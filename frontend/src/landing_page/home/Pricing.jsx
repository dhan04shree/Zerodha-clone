export default function Pricing() {
    return (
        <div className="container">
            <div className="row px-3 py-5 align-items-center">
                <div className="col-12 col-md-5 mb-4 mb-md-0">
                    <h1 className="pb-3 fs-2">Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="#" className="text-decoration-none">
                        See pricing <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                </div>
                <div className="col-12 col-md-7">
                    <div className="row g-3 align-items-start text-center">
                        <div className="col col-sm-4 ">
                            <img src="images/pricingMF.svg" alt="Pricing MF" className="img-fluid" />
                            <p className="small mt-2">Free account<br />opening</p>
                        </div>

                        <div className="col col-sm-4 ">
                            <img src="images/pricingMF.svg" alt="Equity Delivery" className="img-fluid" />
                            <p className="small mt-2">Free equity delivery<br />and direct mutual funds</p>
                        </div>

                        <div className="col col-sm-4 ">
                            <img src="images/intradayTrades.svg" alt="Intraday Trades" className="img-fluid" />
                            <p className="small mt-2">Intraday<br />and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
