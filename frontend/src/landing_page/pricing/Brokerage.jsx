function Brokerage() {
    return ( 
        <div className="container">
            
            <div className="row text-center py-5 border-top">
                <div className="col-md-8 py-5">                
                    <a href="" style={{textDecoration:"none"}}><h4 style={{opacity:"0.85"}} className='mt-3'>Brokerage Calculator</h4></a>
                    <ul style={{textAlign:"left",lineHeight:"2.5"}} className='text-muted'>
                    <li>Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
                    GST per order.</li>
                    <li>Digital contract notes will be sent via e-mail.</li>
                    <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                    <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                    equity (whichever is lower).</li>
                    <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity
                    (whichever is lower).</li>
                    <li>If the account is in debit balance, any order placed will be
                    charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                </div>

                <div className="col-md-4 py-5">
                
                    <a href="" style={{textDecoration:"none"}}><h4 style={{opacity:"0.85"}} className='mt-3'>List of charges</h4></a>
                   <ul>
                    
                   </ul>
                </div>
                
            </div>    
        </div>
     );
}

export default Brokerage;