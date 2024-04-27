import React from 'react'

const Menu = () => {

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
        <div className="menu">
            <h1>Autres post que tu pourrais aimer</h1>
            {posts.map(post=>(
                <div className='post' key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Voir plus</button>
                </div>
            ))}
        </div>
    )
}

export default Menu