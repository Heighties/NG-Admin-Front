import React, { useEffect, useState } from "react";
import "./style.css";
// import { useFetch } from "../../utils/hooks";
import { Link } from "react-router-dom";
// import UpdateProduct from "../UpdateProduct";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:8000/api/products");
    result = await result.json();
    setProducts(result);
  };

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:8000/api/products/${id}`, {
      method: "Delete",
    });

    result = await result.json();

    if (result) {
      alert("Product deleted");
      getProducts();
    }
  };

  return (
    <div className="product-list">
      <h3>Products</h3>
      <ul>
        <li>S. No.</li>
        <li>Name.</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operation</li>
      </ul>

      {products.map((item, index) => (
        <ul key={item._id}>
          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li>{item.category}</li>
          <li>
            <button onClick={() => deleteProduct(item._id)}>Delete</button>
            <Link to={"/update/" + item._id}>Update</Link>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default Product;
