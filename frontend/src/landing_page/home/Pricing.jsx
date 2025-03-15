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
            <div className="col-7 py-5">
                <div className="row" style={{display:"flex",alignItems:"end"}}>

                <div className="col p-0">
                    <img src="images/pricingMF.svg" alt=""  />
                </div>

                <div className="col p-0">
                    <p style={{fontSize:"0.7rem"}}>Free account <br /> opening</p>
                </div>

                <div className="col p-0">
                    <img src="images/pricingMF.svg" alt=""   />
                </div>

                <div className="col p-0">
                    <p style={{fontSize:"0.7rem"}}> Free equity delivery and direct mutual funds</p>
                </div>

                <div className="col p-0">
                    <img src="images/intradayTrades.svg" alt=""  />
                </div>

                <div className="col p-0 ">
                    <p style={{fontSize:"0.7rem"}}>Intraday and <br />F&O</p>
                </div>
                </div>
            </div>
        </div>
       </div>
    );
}