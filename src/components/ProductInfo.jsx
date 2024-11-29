import React from 'react'

const ProductInfo = () => {
    const product = {
        name : "Laptop",
        price : 1200,
        availibity : "yes"
    };
  return (
    <div>
        <h1>name = {product.name}</h1>
        <h2>price = ${product.price}</h2>
        <h3>Availibity = {product.availibity}</h3>
    </div>
  )
}

export default ProductInfo;