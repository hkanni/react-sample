import React from 'react'
import ShoppingCartItem from './shoppingCartItem'

    const euros = new Intl.NumberFormat('fi-FI', { style: 'currency', currency: 'EUR' })
    const sum = (accumulator, currentValue) => accumulator + currentValue.unitPrice*currentValue.amount;

    
    const ShoppingCart = (props) => {

        const itemList = props.items.map( (item) => {
            return  <ShoppingCartItem key={item.id} item={item} handleClick={props.handleShoppingCartClick}/>
         })
         
         const totalCost = props.items.reduce(sum,0)
         
    return (
        <div className='centerSection'>
        <h2>Shopping cart</h2>

        <div>
            {itemList.length>0? itemList: <p>There are no items in the shopping cart</p>}
            <p className='totalCost'>Total cost of the shopping cart is: {euros.format(totalCost)}</p>
            <button 
            className='btn btn-primary makePurchase'
            name='makePurchase'
            onClick={() => {
                return window.confirm("Are you sure you want to check out?") ? props.handleCheckout(totalCost):null
            }}
            >Check out</button>
        </div>
    </div>

    )
}


export default ShoppingCart