import {db}  from "../db.js"
export const getPosts= (req , res ) => {
   const q = req.query.category ? "SELECT * FROM posts WHERE category=?" : "SELECT * FROM posts"

   db.query(q , [req.query.category] , (err , data)=> {
     
    if (err) return res.status(404).json(err)
    return res.status(200).send(data)
   })

}
export const getPost = (req , res ) => {
    res.json("from controller")
}
export const addPost = (req , res ) => {
    res.json("from controller")
}
export const deletePost = (req , res ) => {
    res.json("from controller")
}
export const updatePost = (req , res ) => {
    res.json("from controller")
}
