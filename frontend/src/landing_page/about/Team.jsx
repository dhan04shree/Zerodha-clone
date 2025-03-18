export default function Team(){
    return(
        <div className="container pb-5">
      <div className="row text-center pb-4">
        <h1 className="fs-2 pt-5" style={{opacity:"0.86"}}>
          People
        </h1>
      </div>
      {/* <hr /> */}
      <div className="row px-5 pb-5" style={{fontSize:"1.06em"}}>

        <div className="col-5 pt-5 text-center text-muted">
        <img src="https://zerodha.com/static/images/nithin-kamath.jpg" alt=""style={{borderRadius:"50%",height:"18rem",width:"18rem"}} />
        <h4 className="fs-5">Nithin Kamath</h4>
        <h5 className="fs-6">Founder, CEO</h5>
        </div>

        <div className="col-7 pt-5" style={{opacity:"0.9"}}>
        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader.Today, Zerodha has changed the landscape of the Indian broking industry.</p>
        <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
        <p>Playing basketball is his zen.</p>
        <p>Connect on <a href="">Homepage</a> / <a href=""> TradingQnA</a> / <a href="">Twitter</a></p>
        </div>
      </div>
    </div>
    );
}