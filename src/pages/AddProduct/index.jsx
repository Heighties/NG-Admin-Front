import React from 'react'
import './style.css'

function AddProduct() {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompany] = React.useState('');
    const [error, setError] = React.useState(false);

    const addProduct =async()=>{

        if(!name || !price || !company || !category){
            setError(true)
            return false
        }
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
        {error && !name && <span className='invalid-input'>Enter valid name</span>}
        <input type='texte' placeholder='Enter product price' className='inputBox' onChange={(e)=>setPrice(e.target.value)}/>
        {error && !price && <span className='invalid-input'>Enter valid price</span>}
        <input type='texte' placeholder='Enter product category' className='inputBox'onChange={(e)=>setCategory(e.target.value)}/>
        {error && !category && <span className='invalid-input'>Enter valid category</span>}
        <input type='texte' placeholder='Enter product company' className='inputBox'onChange={(e)=>setCompany(e.target.value)}/>
        {error && !company && <span className='invalid-input'>Enter valid company</span>}
        <button onClick={addProduct} className='appButton'>Add Product</button>
    </div>
  )
}

export default AddProduct