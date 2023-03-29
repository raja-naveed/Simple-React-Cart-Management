import React from 'react'

const ProductList = ({ addToCart}) => {

    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: 100
        },
        {
            id: 2,
            name: 'Product 2',
            price: 200
        },
        {
            id: 3,
            name: 'Product 3',
            price: 300
        },
        {

            id: 4,
            name: 'Product 4',
            price: 400
        }
    ]
    
  return (
    <div>
      <h2>Items</h2>
        <ul>
            {products.map((product)=>(
                <li key={product.id}>
                    {product.name} - ${product.price}
                    <button onClick={()=>addToCart(product)}>Add to cart</button>
                </li>
            ))}
            </ul>
    </div>
  )
}

export default ProductList;
