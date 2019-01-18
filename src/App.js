import React, { Component } from 'react'
import NavigationBar from './components/navigationBar'
import ItemSelection from './components/itemSelection'
import ItemPage from './components/itemPage'
import ShoppingCart from './components/shoppingCart'
import CheckoutSummary from './components/checkOutSummary'


const euros = new Intl.NumberFormat('fi-FI', { style: 'currency', currency: 'EUR' })

const items = [
  {
    id: 1,
    name: 'ITEM 1',
    description: 'This is a short text 1',
    itemInformation: 'This is a full description for the item 1. This includes everything that needs to be explained about the product.',
    unitPrice: 3.60
  },
  {
    id: 2,
    name: 'ITEM 2',
    description: 'This is a short text 2',
    itemInformation: 'This is a full description for the item 1. This includes everything that needs to be explained about the product.',
    unitPrice: 7.20
  },
  {
    id: 3,
    name: 'ITEM 3',
    description: 'This is a short text 3',
    itemInformation: 'This is a full description for the item 1. This includes everything that needs to be explained about the product.',
    unitPrice: 1.80
  },
  {
    id: 4,
    name: 'ITEM 4',
    description: 'This is a short text 4',
    itemInformation: 'This is a full description for the item 1. This includes everything that needs to be explained about the product.',
    unitPrice: 7.00
  },
  {
    id: 5,
    name: 'ITEM 5',
    description: 'This is a short text 5',
    itemInformation: 'This is a full description for the item 1. This includes everything that needs to be explained about the product.',
    unitPrice: 14.30
  }
]

const navigationItems = [{
  id: 0,
  name: 'Items'
},
{
  id: 1,
  name: 'Shoping cart'
}]

const accendSort = (a, b) => {
  if (a.id >= b.id) {
    return 1
  }
  return -1
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      activeNavItem: 0,
      activeItem: 0,
      items: items,
      shoppingCart: [],
      navItems: navigationItems,
      summary:[]
    }
  }

  handlePageChange = (pageId) => () => {
    console.log('handleClick clicked')

    this.setState(prevState => {
      if (prevState.activenavitem===2)
      {
        return { activeNavItem: pageId, activeItem: 0, summary:'' }  
      }
      return { activeNavItem: pageId, activeItem: 0 }

    })
  }

  changeActiveItem = number => {
    this.setState({ activeNavItem: number })
  }

  handleItemClick = id => {
    this.setState({ activeItem: id })
  }

  handleCheckout = (totalCost) => {
    console.log('checked out')
    let summary = this.state.shoppingCart.map(item => {
      console.log(item)
      let text =  `${item.name} purchased ${item.amount} ${item.amount>1?'pcs':'pc'} costing ${euros.format(item.amount*item.unitPrice)},`
      return {id:item.id, text}
    })
    summary.push({id:0,text:`with total cost of ${euros.format(totalCost)}`})


    this.setState({summary,shoppingCart:[], activeNavItem: 2 })
  }

  handleShoppingCartClick = (id, buttonName) => {
    this.setState(prevState => {
      let items = [...prevState.shoppingCart]
      if (buttonName === 'delete') {
        items = items.filter(item => {
          return item.id !== id
        })
      } else if (buttonName === 'increase') {
        items = items.map(item => {
          if (item.id === id) {
            item.amount++
          }
          return item
        })
      } else if (buttonName === 'decrease') {
        items = items.map(item => {
          if (item.id === id) {
            item.amount--
          }
          return item
        })
      }
      return { shoppingCart: items }
    })
  }

  handleAmountChange = data => {
    this.setState(prevState => {
      let newShoppingCart = [...prevState.shoppingCart]
      const index = newShoppingCart.findIndex((item) => item.id === data.id)
      if (index >= 0) {
        newShoppingCart[index] = { id: data.id, name: data.name, amount: data.amount, unitPrice: data.unitPrice }
      }
      else {
        newShoppingCart.push({ id: data.id, name: data.name, amount: data.amount, unitPrice: data.unitPrice })
      }

      return ({
        shoppingCart: newShoppingCart.sort(accendSort)
      })
    })
  }

  selectElement = () => {
    const {activeItem, activeNavItem, shoppingCart} = this.state

    if (activeNavItem === 1) {
      return <ShoppingCart items={shoppingCart}
        handleShoppingCartClick={this.handleShoppingCartClick}
        handleCheckout={this.handleCheckout} />
    }

    else if (activeNavItem === 2) {
      return <CheckoutSummary summary={this.state.summary} handleClick={this.handlePageChange} />
    }

    else {
      if (activeItem > 0) {
        let shoppingCartIndex = shoppingCart.findIndex(item => {
          return item.id === activeItem
        })
        let cartAmount = shoppingCartIndex > -1 ? shoppingCart[shoppingCartIndex].amount : 0

        return <ItemPage item={this.state.items[activeItem - 1]}
          handleItemClick={this.handleItemClick}
          handleSubmit={this.handleAmountChange}
          amount={cartAmount} />
      }
      let items = this.state.items.map(item => {
        let shoppingCartIndex = shoppingCart.findIndex(scItem => item.id === scItem.id)
        item.amount = shoppingCartIndex > -1 ? shoppingCart[shoppingCartIndex].amount : 0
        return item
      })

      return <ItemSelection items={items} handleItemClick={this.handleItemClick} />
    }
  }

  render() {

    const nakyma = this.selectElement()
    return (
      <div>
        <NavigationBar activeItem={this.state.activeNavItem} items={this.state.navItems} handlePageChange={this.handlePageChange} />
        {nakyma}

      </div>


    )
  }
}

export default App