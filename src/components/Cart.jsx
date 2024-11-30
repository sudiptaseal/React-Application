import React from 'react'

const Cart = () => {
    const items = ["paper","pencil","pen"]
  return (
    <div>
        <h2>Cart</h2>
        {items.length > 0 && <h2>You have {items.length} item in your cart</h2>}

        <h1>Products</h1>
        {
            items.map(item => (
                <ul key={Math.random()}>
                    <li>{item}</li>
                </ul>
            ))
        }
    </div>

  )
}

export default Cart