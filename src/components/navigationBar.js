import React from 'react'
import NavigationItem from './navigationItem'

const NavigationBar = ({activeItem, items,handlePageChange}) => {
    
    const navItems = items.map( item => { 
        return (
        <NavigationItem key={item.id} item={item} 
        liclassActive={item.id===activeItem? 'nav-item active':'nav-item'}
        handlePageChange={handlePageChange}/>
    )
    })



    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark navbarHeight">
            <div className="d-flex flex-grow-1">
                
                <a className="navbar-brand d-inline-block" href="##">
                    Sample app
    </a>
                <div className="w-100 text-right">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
            <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
                <ul className="navbar-nav ml-auto flex-nowrap">
                {navItems}
                </ul>
            </div>
        </nav>
    )
}

export default NavigationBar
