"use strict"
import userDAO from '../dao/userDAO.mjs'

const userController = {
    findAll: async () => await userDAO.findAll(),
    findByUsername : async (login)=> {
        const user = await userDAO.findByUsername(login)
        return user
    },
    add : async (user) => await userDAO.add(user),
    remove : async (login) => await userDAO.removeByLogin(login),
    update: async (user) => await userDAO.update(user)
}
export default userController
