import {mongoose} from 'mongoose';
import Post from "../model/postModel.mjs";



const schema = new mongoose.Schema({
    id  : {type : Number}  ,
    Title  : {type : String},
    description  : {type : String},
    image : {type : String},
    uID : {type : String}
})
const MongoPost = new mongoose.model('postCollection',schema)

const postDAO = {
    //Renvoie un tableau d'utilisateurs
    findAll :async ()=> {
        const data = await MongoPost.find({})
        return data.map((Post)=>new Post(post))},
    //supprime tous les utilisateurs
    removeAll : async () => {
        await MongoPost.deleteMany()
    },
    //Renvoie un utilisateur connu par son login ou null
    findByTitle: async (title)=> {
        let data = await MongoPost.findOne({title  : title })
        if (data!=null)
             data = new Post(data)
        return data
    },
    //Ajout un utilisateur si il est valide et n'existe pas
    //sinon "User already exists" ou "Not a valid user"
    add: async (user)=> {
        if (await userDAO.findByUsername(user.login))
            return Promise.reject("User already exists")
        try {
            const mongoUser = new MongoUser({...user})
            await mongoUser.save()
            return await userDAO.findByUsername(user.login)
        } catch (e) {
            return Promise.reject("Not a valid user")
        }
    },
    //supprime un utilisateur connu par son login
    //renvoie true si la suppression fonction false sinon
    removeByLogin: async (login) => {
        const data = await MongoPost.deleteOne({login : login})
        return data.deletedCount == 1
    },
    //modifie un utilisateur
    //renvoie l'utilisateur modifié ou null
    update:async(post) => {
        let data = await MongoPost.findOne({title: post.title})
        if (data == null)
            return null
        data.password=user.password
        await data.save()
        return await userDAO.findByUsername(user.login)
    }
}
export default postDAO