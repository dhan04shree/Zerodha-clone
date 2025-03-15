export default function Awards(){
    return(
        <div className="container  p-5 mb-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src="/images/largestBroker.svg" alt=""/>
                </div>
                <div className="col-6 p-5">
                    <h1 className="fs-2">Largest stock broker in india</h1>
                    <p className="mb-5">2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in:</p>
                    <div className="row">
                        <div  className="col-6">
                    <ul>
                        <li><p>Futures and Options</p></li>
                        <li><p>Commodity derivatives</p></li>
                        <li><p>Currency derivatives</p></li>
                        </ul>
                        </div>
                        <div  className="col-6">
                        <ul>
                        <li><p>Stocks & IPOs</p></li>
                        <li><p>Direct mutual funds</p></li>
                        <li><p>Bonds and Growth</p></li>
                    </ul>  
                    </div> 
                    </div>
                    <img src="\images\pressLogos.png" alt="" style={{width:"90%"}} />
                </div>
            </div>
        </div>
    );
}