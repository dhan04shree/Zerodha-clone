export default function Pricing(){
    return(
       <div className="container">
        <div className="row p-3">
            <div className="col-5 py-5 ps-5">
                <h1 className="pb-3 fs-2">Unbeatable pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href=""  style={{textDecoration:"none"}}>See pricing  <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
      {/* <div className="col-2"></div> */}
            <div className="col-7 py-5 pe-5">
                <div className="row">
                <div className="col-3 me-3 mt-4">
                    <p style={{fontSize:"0.65rem",position:"absolute",top:"99rem",left:"41rem"}}>Free account <br /> opening</p>
                    <img src="images/pricingMF.svg" alt=""  />
                </div>
                <div className="col-3 me-4 mt-4">
                    <p style={{fontSize:"0.65rem",position:"absolute",top:"99rem",left:"52rem"}}> Free equity delivery <br />and direct mutual funds</p>
                    <img src="images/pricingMF.svg" alt=""   />
                </div>
                <div className="col-3 mx-5 mt-4">
                    <p style={{fontSize:"0.65rem",position:"absolute",top:"99rem",left:"66rem"}}>Free account <br /> opening</p>
                    <img src="images/intradayTrades.svg" alt=""  />
                </div>
                </div>
            </div>
        </div>
       </div>
    );
}