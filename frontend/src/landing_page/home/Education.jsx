export default function Education(){
    return(
        <div className="container pt-5 mb-4">
            <div className="row">
                <div className="col-6">
                    <img src="images/education.svg" alt="" />
                </div>
                <div className="col-6 pt-5">
                    <h1 className="fs-2 mb-4">Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <a href="" style={{textDecoration:"none"}}>Varsity <i class="fa-solid fa-arrow-right-long"></i></a>
                    <p className="mt-4">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
    );
}