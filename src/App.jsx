import React , { useState } from 'react'
import ProductList from './ProductList';
import Cart from './Cart'

function App() {
  const [cart, setCart]=useState([]);

  const addToCart = (product) => {
    setCart((prevCart)=>[...prevCart, product]);
  }

  const removeItem = (productId) => {
    setCart((prevCart)=>prevCart.filter((item)=>item.id !== ProductId));
  }
  return (
    <React.Fragment>
      <ProductList addToCart={addToCart}/>
      <Cart cart={cart} removeItem={removeItem} />
    </React.Fragment>
    
  )
}

export default App
