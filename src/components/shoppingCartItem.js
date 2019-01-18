import React from 'react'

const euros = new Intl.NumberFormat('fi-FI', { style: 'currency', currency: 'EUR' })

const ShoppingCartItem = ({item,handleClick}) => {
    

    return (
        <div>
            <span className='productName mr-1'>{item.name}</span>
            <span className='productPrice mr-3'>{euros.format(item.unitPrice)}</span>
            <button className='btn btn-secondary' name='increase' onClick={event => handleClick(item.id, event.target.name)}>+</button>
            <div className='productAmountDiv'>
                <span style={{fontSize: '20px'}} className='productAmount badge badge-primary'>{item.amount}</span>
            </div>
            <button className='btn btn-secondary mr-3' name='decrease' onClick={event => handleClick(item.id, event.target.name)}>-</button>
            <div className='totalPrice'>
                <span className='productPrice mr-3'>{euros.format(item.amount*item.unitPrice)}</span>
            </div>
            <button className='btn btn-danger m-2' name='delete' onClick={event => handleClick(item.id, event.target.name)}>Delete</button>
        </div>
    )
}

export default ShoppingCartItem