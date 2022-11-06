import React from 'react'
import './style.css'

function AddProduct() {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const addProduct =async()=>{
        console.warn(name,price,category,company);
        const userId=JSON.parse(localStorage.getItem('token')).userId;
        console.warn(userId);
        let result = await fetch('http://localhost:8000/api/products',{
            method:'post',
            body:JSON.stringify({name, price, category, company, userId}),
            headers:{
                "Content-type":"application/json"
            }
        });
        result = await result.json()
        console.warn(result)
    }
  return (
    <div className='product'>
        <h1>Add Product</h1>
        <input type='texte' placeholder='Enter product name' className='inputBox' onChange={(e)=>setName(e.target.value)}/>
        <input type='texte' placeholder='Enter product price' className='inputBox' onChange={(e)=>setPrice(e.target.value)}/>
        <input type='texte' placeholder='Enter product category' className='inputBox'onChange={(e)=>setCategory(e.target.value)}/>
        <input type='texte' placeholder='Enter product company' className='inputBox'onChange={(e)=>setCompany(e.target.value)}/>
        <button onClick={addProduct} className='appButton'>Add Product</button>
    </div>
  )
}

export default AddProduct