import React from 'react'


const CheckoutSummary = ({summary, handleClick}) => {
    
    const summarytext = summary.map(item => 
    <p key={item.id} 
    style={{font:'25px bold', marginTop: '50px'}}
    >{item.text}</p>)

    return (
        <div className='centerSection'>
        <h2>CHECK OUT SUMMARY</h2>

        <div>
            {summarytext}
        </div>
        <button 
            className='btn btn-primary makePurchase'
            name='makePurchase'
            onClick={handleClick(0)}
            >Return to Start</button>

    </div>
    )
}

export default CheckoutSummary




