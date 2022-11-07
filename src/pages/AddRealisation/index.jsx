import React from 'react'
import './style.css'

function AddRealisation() {
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [videoUrl, setVideoUrl] = React.useState('');
    const [picture, setPicture] = React.useState('');

    const addProduct =async()=>{
        console.warn(name, description, videoUrl, picture);
        const userId=JSON.parse(localStorage.getItem('token')).userId;
        console.warn(userId);
        let result = await fetch('http://localhost:8000/api/realisation',{
            method:'post',
            body:JSON.stringify({name, description, videoUrl, picture}),
            headers:{
                "Content-type":"application/json"
            }
        });
        result = await result.json()
        console.warn(result)
    }
  return (
    <div className='realisation'>
        <h1>Add Réalisation</h1>
        <input type='texte' placeholder='Enter realisation name' className='inputBox' onChange={(e)=>setName(e.target.value)}/>
        <input type='texte' placeholder='Enter description' className='inputBox' onChange={(e)=>setDescription(e.target.value)}/>
        <input type='texte' placeholder='Enter URL of the video' className='inputBox'onChange={(e)=>setVideoUrl(e.target.value)}/>
        <input type='texte' placeholder='Enter URL of the picture' className='inputBox'onChange={(e)=>setPicture(e.target.value)}/>
        <button onClick={addProduct} className='appButton'>Ajouter</button>
    </div>
  )
}

export default AddRealisation