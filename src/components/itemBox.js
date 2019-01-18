import React from 'react'


const ItemBox = ({item, handleItemClick}) => {
    return (
        <div className='inlineItem' onClick={() => handleItemClick(item.id)}>
            <h5>{item.name}</h5>
            <span>{item.description}</span>
            <p><b>{item.amount}</b></p>
        </div>

    )
}

export default ItemBox