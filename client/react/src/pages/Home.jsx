import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useState  } from 'react'
import axios from "axios"
const Home = () => {
 /* const posts = [
    {
        id: 1,
        title: "Exploring Art",
        desc: "Discover the beauty and creativity in various forms of art.",
        img: "art.jpg"
    },
    {
        id: 2,
        title: "Innovative Design",
        desc: "Dive into the world of innovative and functional design.",
        img: "design.jpg"
    },
    {
        id: 3,
        title: "Gourmet Delights",
        desc: "Experience the flavors and recipes from around the world.",
        img: "food.jpg"
    },
    {
        id: 4,
        title: "Science Discoveries",
        desc: "Stay updated with the latest breakthroughs in science.",
        img: "science.jpg"
    },
    {
        id: 5,
        title: "Tech Trends",
        desc: "Get the latest updates on technology and gadgets.",
        img: "tech.jpg"
    }
];*/

  const [posts , setPosts] = useState([])

  useEffect(() => {
      const fetchData = async() => {
        try{
          const res = await axios.get("http://localhost:8800/api/posts" , {
            withCredentials: true,
          })
          console.log("get",res.data)
          setPosts(res.data)
        }catch (error) {
          console.log(err)
        }
        
      }
      fetchData()
  } , [])
  console.log(posts)
  return (
    <div className='home'>
        <div className='posts'>
          {posts.map((post)=> (
          
            <div className='post' key={post.id}>
              <div className="img">
                 <img className='img'  src={post.img} alt=""/> 
              </div>
             
            <div className="content">
             <Link className='link' to={`/post/${post.id}`}>
              <h1>{post.title}</h1>
            </Link>
            <p>{post.desc}</p>
            <button> Read more</button>
            </div>
            </div>

            
          ))}
        </div>
    </div>
  )
}

export default Home
