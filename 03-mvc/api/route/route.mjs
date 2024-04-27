"use strict"
import express from 'express'
import userController from '../controller/userController.mjs'
import userDAO from "../dao/userDAO.mjs";
import postController from '../controller/postController.mjs';
import postDAO from '../dao/postDAO.mjs';
const router = express.Router()

router
    .route('/user')
        .get(async (req, res) =>{
            // #swagger.summary = 'un résumé'
            // #swagger.description = 'une description'
            res.status(200).send(await userController.findAll())})
        .post(async (req, res) =>{
            /*  #swagger.parameters['body'] = {
            in: 'body',
            description: 'Some description...',
            schema: {
                $login: 'John',
                $password: 'pass'
            }
            } */
            try {
                const user = await  userController.add(req.body)
                return res.status(201).send(user) }
            catch (e) {
                return res.status(400).send({message: 'not added'})
            }
        })
        .put(async (req, res)=> {
            try {
                const user = await userController.update(req.body)
                if (user == null)
                    return res.status(400).send({message: 'not updated'})
                else
                    return res.status(200).send(user)
            } catch (e) {
                return res.status(400).send({message: 'invalid paramters'})
            }
        })
router
    .route('/user/:username')
    .get(async (req, res) =>{
        const username = decodeURIComponent(req.params.username)
        const user = await userController.findByUsername(username)
        if (user==null)
            return res.status(404).send({message: "user not found"})
        else
            return res.status(200).send(user)
    })
    .delete(async (req,res)=> {
        const login = decodeURIComponent(req.params.login)
        const ok = await userDAO.removeByLogin(login)
        if (ok)
            return res.status(200).send({message: "user deleted"})
        else
            return res.status(400).send({message: "user not deleted"})


    })

    router
        .route("/user/:username/posts") 
            .post(async(req ,res )=> {
                try {
                    const username = req.params.username;
                    const postData = req.body; // Les détails de la publication sont fournis dans le corps de la requête
            
                    // Appel du contrôleur pour créer la publication
                    const newPost = await postController.createPost(username, postData);
            
                    // Retourne les détails de la publication créée
                    res.status(201).json(newPost);
                } catch (error) {
                    // En cas d'erreur, retourne un code d'erreur et un message d'erreur
                    res.status(500).json({ error: error.message });
                }
            })

   
export default router

