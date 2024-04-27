"use strict"
import postDAO from '../dao/postDAO.mjs'
import userDAO from '../dao/userDAO.mjs'

const postController = {
    findAll: async () => await postDAO.findAll(),
    findByTitle : async (title)=> {
        const post = await postDAO.findByTitle(title)
        return post
    },
    add : async (post) => await postDAO.add(post),
    remove : async (title) => await postDAO.removeByTitle(title),
    update: async (post) => await postDAO.update(post) , 
    createPost: async (username, postData) => {
        try {
            // Assurez-vous que userId est un nombre entier
            

            // Vérifiez si l'utilisateur existe (vous devez implémenter cette vérification)
            const userExists = await userDAO.findByUsername(username);
            if (!userExists) {
                throw new Error("User not found");
            }

            // Créez une nouvelle instance de la publication en utilisant les données fournies
            const newPost = new Post({
                title: postData.title,
                description: postData.description,
                image: postData.image,
                uID: username // L'ID de l'utilisateur qui crée la publication
            });
        }catch(e) {
            throw e 
        }
    }
}
export default postController
