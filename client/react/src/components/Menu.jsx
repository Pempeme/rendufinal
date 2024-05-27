import React from 'react'
const posts = [
    {
        id: 1,
        title: "Exploring Art",
        desc: "Discover the beauty and creativity in various forms of art.",
        img: "/src/assets/art.jpg"
    },
    {
        id: 2,
        title: "Innovative Design",
        desc: "Dive into the world of innovative and functional design.",
        img: "/src/assets/design.jpg"
    },
    {
        id: 3,
        title: "Gourmet Delights",
        desc: "Experience the flavors and recipes from around the world.",
        img: "/src/assets/food.jpg"
    },
    {
        id: 4,
        title: "Science Discoveries",
        desc: "Stay updated with the latest breakthroughs in science.",
        img: "/src/assets/science.jpg"
    },
    {
        id: 5,
        title: "Tech Trends",
        desc: "Get the latest updates on technology and gadgets.",
        img: "/src/assets/tech.jpg"
    }
];

const Menu = () => {
  return (
    <div className='menu'>
        <h1>Other posts you may like </h1>
        {
            posts.map((post) => (
                <div className="post" key={post.id}>
                    <img src={post.img} alt="" />
                    <h2>{post.title}</h2>
                    <button>Read more</button>
                </div>
            ))
        }
    </div>  
  )
}

export default Menu
