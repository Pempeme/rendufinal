import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const Write = () => {
    const [value, setValue] = useState('');

    console.log(value)
    return (
        <div className='add'> 
        <div className='content'>
            <input type='text' placeholder='Title'/>
            <div className='editorContainer'>
                <ReactQuill className='editor' theme='snow' value={value} onChange={setValue}/>
            </div>
        </div>
        <div className='menu'>
        <div className='item'>
            <h1>Publier</h1>
            <span>
                <b>Status: </b> Projet
            </span>
            <span>
                <b>Visible: </b> Public
            </span>
            <input type="file" name='' id='file' />
            <label className='file' htmlFor='file'>Télécharger l'image</label>
            <div className='buttons'> 
                <button>Enregistrer brouillon</button>
                <button>Mise à jour</button>
            </div>
        </div>
        <div className='item'>
            <h1>Categorie</h1>
            <div className='cat'>

            <input type="radio" name='cat' value="art" id='art'/>
            <label htmlFor='art'>Art</label>
            </div>
            <div className='cat'>
            <input type="radio" name='cat' value="alimentation" id='Alimentation'/>
            <label htmlFor='alimentation'>Alimentation</label></div>
            <div className='cat'>
            <input type="radio" name='cat' value="science" id='science'/>
            <label htmlFor='science'>Science</label></div>
            <div className='cat'>
            <input type="radio" name='cat' value="technologie" id='technologie'/>
            <label htmlFor='technologie'>Technologie</label></div>
            <div className='cat'>
            <input type="radio" name='cat' value="cinema" id='cinema'/>
            <label htmlFor='cinema'>Cinema</label></div>
            <div className='cat'>
            <input type="radio" name='cat' value="disign" id='disign'/>
            <label htmlFor='disign'>Disign</label>
            </div>
          </div>
        </div>
       </div>
    );
};

export default Write