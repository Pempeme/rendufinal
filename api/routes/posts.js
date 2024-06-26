import express from  "express" 
const router = express.Router() 
import {
    addPost , 
    deletePost,
    updatePost , 
    getPost , 
    getPosts 
} from "../controllers/post.js"
router.get('/',getPosts)
router.get('/:id',getPost)
router.post('/',addPost)
router.delete('/:id',deletePost)
router.put('/:id',updatePost)
export default router ;