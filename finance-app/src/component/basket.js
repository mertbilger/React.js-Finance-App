import React from 'react'

export default function Basket({basket}) {
  return (
    <div>
    <div className='mainBasket'>
    <div className='showBasket'>
    <h2>Sepetim</h2>
    
    {
     basket.map(item => (
       <div className='basketList'>
       <img width="40" src={item.icon} />
       <p>{item.name} </p>
       <p>{item.price} $</p>
       
      
       </div>
       
       ))
     }
      <button className='btnbasket'>Satın Al</button>
     </div>


     </div>
     </div>
     )
   }
