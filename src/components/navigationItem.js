import React from 'react'


const NavigationItem = ({item,liclassActive,handlePageChange}) => {

    return (
                    <li className={liclassActive}>
                        <a href="##" 
                        className="nav-link m-2 menu-item"
                        onClick={handlePageChange(item.id)}
                        >
                        {item.name}
                        </a>
                    </li>

)

}

export default NavigationItem