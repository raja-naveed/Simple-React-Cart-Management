import React from 'react'

const Cart = ({cart , removeItem}) => {
    const countByProduct = cart.reduce((acc, item)=>{
        if(!acc[item.id]){
            acc[item.id] = { ...item, quantity: 0};
        }
        acc[item.id].quantity++;
        return acc;
    }, {});
    const cartItems = Object.values(countByProduct);

    
    const totalprice = cart.reduce((total, item)=>total+item.price*item.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cart.length ===0 ? ( <p>Cart is empty</p> ):(
      <ul>
        {cart.map((item)=>(
            <li key={item.id}>
                {item.name} - ${item.price} * {item.quantity}
                <button onClick={()=>removeItem(item.id)}>Remove</button>
            </li>
        ))}
        <li id='total'>Total: {totalprice} $</li>
        </ul>)
        }
    </div>
  )
}

export default Cart;
