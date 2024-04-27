import {mongoose} from 'mongoose';
import User from "../model/userModel.mjs";

const schema = new mongoose.Schema({
    id  : {type : Number}  ,
    username  : {type : String},
    email  : {type : String},
    password : {type : String},
    image : {type : String}
})
const MongoUser = new mongoose.model('userCollection',schema)

const userDAO = {
    //Renvoie un tableau d'utilisateurs
    findAll :async ()=> {
        const data = await MongoUser.find({})
        return data.map((user)=>new User(user))},
    //supprime tous les utilisateurs
    removeAll : async () => {
        await MongoUser.deleteMany()
    },
    //Renvoie un utilisateur connu par son login ou null
    findByUsername: async (username)=> {
        let data = await MongoUser.findOne({username : username})
        if (data!=null)
             data = new User(data)
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
        const data = await MongoUser.deleteOne({login : login})
        return data.deletedCount == 1
    },
    //modifie un utilisateur
    //renvoie l'utilisateur modifié ou null
    update:async(user) => {
        let data = await MongoUser.findOne({login: user.login})
        if (data == null)
            return null
        data.password=user.password
        await data.save()
        return await userDAO.findByUsername(user.login)
    }
}
export default userDAO
