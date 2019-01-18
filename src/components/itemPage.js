import React from 'react'


class ItemPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item:props.item,
            amount:props.amount,
            handleItemClick:props.handleItemClick,
            handleSubmit:props.handleSubmit
        }
    }


    handleChange = (event) => {
        const {value} = event.target
        this.setState({amount:value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {id,name,unitPrice} = this.state.item
        const returnValue = {id, name, amount:this.state.amount, unitPrice}
        this.state.handleSubmit(returnValue)
    }
    render() {
        return (
            <div className='centerSection'>
                <h2>{this.state.item.name}</h2>
                <p className='shortDescription'>{this.state.item.description}</p>
                <p>{this.state.item.itemInformation}</p>
                <button
                    className='bottomLeft btn btn-secondary'
                    onClick={() => this.state.handleItemClick(0)}
                >Back</button>

                <form onSubmit={this.handleSubmit} className='itemPage'>
                    <label>Amount:</label>
                    <br/>
                    <input type= 'number'
                    className='amountInput'
                    name='amount' 
                    style={{width:'90px'}}
                    value={this.state.amount} 
                    onChange={this.handleChange}/>
                    <br/>
                    <br/>
                    <button className='btn btn-secondary'>Update Amount</button>
                </form>
            </div>

        )
    }
}

export default ItemPage