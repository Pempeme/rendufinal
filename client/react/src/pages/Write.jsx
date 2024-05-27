import React from 'react'
import ReactQuilll from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import {useState } from 'react'
const Write = () => {

  const [value , setValue] = useState('')
  console.log(value)
  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='title ' />
        <div className="editorContainer">
          <ReactQuilll theme='snow' value={value} onChange={setValue} /> 
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visiblity:</b> Public
          </span>
           <input style={{display:"none"}} type="file"  id="file" />
           <label htmlFor="file">Upload Image </label>
           <div className="buttons">
            <button>Saved as Draft </button>
            <button>Update </button>
           </div>
          
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className='cat'>
          <input type="radio" name="cat" id="art" />
          <label htmlFor="art">Art</label>
          </div>
          <div className='cat'>
             <input type="radio" name="cat" id="science" />
            <label htmlFor="science">Science</label>
          </div>
            <div className='cat'>
              <input type="radio" name="cat" id="tech" />
              <label htmlFor="tech">Tech</label>
            </div>
            <div className='cat'>
              <input type="radio" name="cat" id="cinema" />
              <label htmlFor="design">Cinema</label>
            </div>
            <div className='cat'>
              <input type="radio" name="cat" id="design" />
          <label htmlFor="design">Design</label>
            </div>
            <div className='cat'>
              <input type="radio" name="cat" id="food" />
          <label htmlFor="food">Food</label>
            </div>
          
        </div>
      </div>
    </div>
  )
}

export default Write
