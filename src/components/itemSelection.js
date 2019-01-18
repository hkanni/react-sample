import React from 'react'
import ItemBox from './itemBox'

const ItemSelection = ({items, handleItemClick}) => {

    //console.log(items)
    return (
        <div className='centerSection'>
            <h2>ITEMS</h2>
            {items.map(item => <ItemBox item={item} key={item.id} handleItemClick={handleItemClick}/>)}
        </div>

    )
}


export default ItemSelection

