import React, { useEffect, useState } from "react"

import Menu from '../components/Menu.jsx'
import Edit from '../img/edit.png'
import Delete from '../img/delete.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from "axios"
import moment from "moment"
import { useContext } from "react"
import { AuthContext } from "../context/authContext"
import DOMPurify from "dompurify"



const Single = () => {
    const [post, setPost] = useState({});

    const location = useLocation();
    const navigate = useNavigate();

    const postId = location.pathname.split("/")[2];

    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get(`/posts/${postId}`);
            setPost(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
      }, [postId]);
    
      const handleDelete = async ()=>{
        try {
          await axios.delete(`/posts/${postId}`);
          navigate("/")
        } catch (err) {
          console.log(err);
        }
      }
    
      const getText = (html) =>{
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
      }
   

   return (
    <div className="single">
      <div className="content">
        <img src={`../upload/${post?.img}`} alt="" />
        <div className="user">
          {post.userImg && <img
            src={post.userImg}
            alt=""
          />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className="edit">
              <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt="" />
              </Link>
              <img onClick={handleDelete} src={Delete} alt="" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        ></p>      </div>
      <Menu cat={post.cat}/>
    </div>
  );
};

export default Single








// return (
    //    <div className='single'>
          //  <div className='content'>
             //   <img src="https://www.mangeons-local.bzh/wp-content/uploads/fruits-de-saison-3.jpg" alt=""/>
             //   <div className='user'>
              //      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7UOZ6fe-blb78gYzpejrF0o5MO3qZxLkfUg&s" alt=""/>
              //  <div className='info'>
              //      <span>James</span>
              //      <p>Poster il y'a 2 jours</p>
              //  </div>
              //  <div className='edit'>
               //     <Link to={'/write?edit=2'}>
               //     <img src={Edit} alt=''/>
                //    </Link>
               //     <img src={Delete} alt=''/>
           //     </div>
        //        </div>
        //        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        //        <p>
        //            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ut veniam maxime cumque sit tenetur corrupti,
        //             nemo ducimus architecto corporis dicta natus, voluptates quaerat accusantium vitae amet! Quod, illo minima.
        //             Lorem ipsum dolor sit amet consectetur adipisicing.
        //             <br/></p>
                     
        //             <p>Fugiat explicabo laborum quo facilis quidem ad magni aperiam distinctio unde labore id nemo voluptas tempora quae, 
        //             aut et consequuntur. Nam, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veniam,
        //             ex maiores aliquam cum aperiam ab nemo error consectetur officia eligendi magnam quis, ratione minus, laboriosam blanditiis? Placeat, perspiciatis praesentium.
        //             </p><br/>

        //             <p>lorem ipsum ipsum Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt inventore et 
        //             delectus repellendus accusamus molestiae explicabo perferendis repudiandae,
        //             optio eos accusantium at sed? Ipsam consectetur, numquam tempora reiciendis fugiat temporibus.
        //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolore blanditiis, consequuntur deleniti laborum, 
        //             vel sint reprehenderit aut dicta quia quaerat qui? Laudantium excepturi quisquam, accusantium ipsam ad quaerat eum.
        //            </p><br/>

        //           <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illo error alias autem officiis ea odio 
        //             facere eius eveniet quae? Beatae culpa laborum minima? Quis quam iusto hic amet. Esse.
        //             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit facilis eum porro doloribus accusantium vel neque et
        //             repellat fugit ipsam velit reiciendis commodi, explicabo mollitia libero. Facilis perferendis quos aspernatur!
        //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ducimus dignissimos error impedit iure inventore 
        //             tempora incidunt excepturi sit! Neque provident, molestias illo consequuntur libero cupiditate itaque dolore animi soluta?
        //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quae placeat expedita ipsam pariatur natus.
        //             Ipsam ullam accusamus rerum non architecto quia mollitia dolor tenetur ut, quam eligendi itaque fugit!
        //             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, harum. Perferendis quia impedit labore officiis porro eos reprehenderit,
        //             fuga, aliquam voluptatem unde dolore magnam excepturi eveniet autem accusamus explicabo voluptates?
                //   <br/>
             //   </p>
         //   </p>
       // </div>
      //  <Menu/>
    //</div>
   //);