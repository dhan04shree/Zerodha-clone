import React from 'react';
function Hero() {
    return ( 
        <div className="container pt-5">
            <div className="row text-center p-5">
                <h1 style={{fontSize:"2.7rem",opacity:"0.9"}}>Charges</h1>
                <p className="mt-2 text-muted fs-4">List of all charges and taxes</p>
            </div>
            <div className="row text-center p-5">
                <div className="col py-4 pe-4">
                    <img src="images/pricingEquity.svg" alt="" style={{width:"80%"}}/>
                    <h2 style={{fontSize:"1.9rem",opacity:"0.87"}} className='mt-3'>Free equity delivery</h2>
                    <p style={{fontSize:"1.1rem",opacity:"0.9"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col p-4">
                <img src="images/intradayTrades.svg" alt="" style={{width:"80%"}} />
                    <h2 style={{fontSize:"1.9rem",opacity:"0.87"}} className='mt-3'>Intraday and F&O trades</h2>
                    <p style={{fontSize:"1.1rem",opacity:"0.9"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col py-4 ps-4">
                <img src="images/pricingEquity.svg" alt="" style={{width:"80%"}} />
                    <h2 style={{fontSize:"1.9rem",opacity:"0.87"}} className='mt-3'>Free direct MF</h2>
                    <p style={{fontSize:"1.1rem",opacity:"0.9"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
            
            
        </div>
     );
}

export default Hero;