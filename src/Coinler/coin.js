import React from 'react'


function coin({id,name,icon,price,symbol, onClick}) {

  const onClickHandler = () => onClick(id)
  return (

    <div className='coin'>
 
    <h1>{name}</h1> 
    <img src={icon}/>
    <h3>Fiyat: {price} $</h3>
    <h3>Sembol: {symbol}</h3>
   
    <button className='btn' onClick={onClickHandler}>Sepete Ekle</button>
    </div>
 
  )
}
export default coin