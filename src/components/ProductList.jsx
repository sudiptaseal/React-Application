import React from 'react'

const ProductList = () => {
    const products = [
        { id: 1, name: "phone", price: "$1200" },
        { id: 2, name: "Laptop", price: "$30000" },
        { id: 3, name: "headPhone", price: "$150" }
    ]
    return (
        <div>
            {
                products.map(({ id, name, price }) => (
                    <div key={id}>
                        <h1>Name = {name}</h1>
                        <h1>Price = {price}</h1>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductList