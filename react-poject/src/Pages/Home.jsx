import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
    
    const posts = [
        {
        id: 1,
        title: "je suis le titre de mon premier article",
        desc: "je suis ca description",
        img: "https://images.rtl.fr/~c/1200v800/rtl/www/1095331-l-art-de-multiples-bienfaits.jpg"
      },
      {
        id: 2,
        title: "je suis le titre de mon premier article",
        desc: "je suis ca description",
        img: "https://nouvellesconso.leclerc/wp-content/uploads/2018/11/ONC_Focus-sante_Alimentation-prevention_OK.png"
      },
      {
        id: 3,
        title: "je suis le titre de mon premier article",
        desc: "je suis ca description",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMgNYqCHCMgobQrSeeNGBiKnDjuNxZCT8aVLR1jl4aMw&s"
      },
      {
        id: 4,
        title: "je suis le titre de mon premier article",
        desc: "je suis ca description",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZP4-rT-3hSFibyW1MW7VfrTUwRb_PNp7eaA&s"
      },
    ];
    return (
        <div className='home'>
            <div className='posts'>
                {posts.map(post=>(
                    <div className="post" key={post.id}>
                        <div className='img'>
                            <img src={post.img} alt=""/>
                        </div>
                        <div className='content'>
                            <Link className="link" to={'/post/${post.id}'}>
                            <h1>{post.title}</h1>
                            <p>{post.desc}</p>
                            <button>En savoir plus</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home