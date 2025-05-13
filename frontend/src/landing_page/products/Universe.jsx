export default function Universe(){
    return(
        <div className="container pb-5 text-center">
        <div className="row text-center">
          <h1 className="pt-5 pb-3 fs-1">The Zerodha Universe</h1>
          <p className="pb-3 fs-5">
          Extend your trading and investment experience even further with our partner platforms
          </p>
        </div>
        <div className="row">
            <div className="col-md-4 p-3" style={{textAlign:"center"}}>
                <img style={{width:"13rem"}} src="https://zerodha.com/static/images/partners/zerodhafundhouse.png" alt="" className="image-fluid"/>
                <p className="p-3" style={{fontSize:"0.8rem",fontWeight:"500",opacity:"0.5"}}>Our asset management venture that is creating simple and transparent indexfunds to help you save for your goals.</p>
            </div>
            <div className="col-md-4 p-3" style={{textAlign:"center"}}>
                <img style={{width:"13rem",paddingTop:"1rem"}} src="https://zerodha.com/static/images/products/sensibull-logo.svg" alt="" className="image-fluid" />
                <p className="p-3 pt-4" style={{fontSize:"0.8rem",fontWeight:"500",opacity:"0.5"}}>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
            </div>
            <div className="col-md-4 p-3" style={{textAlign:"center"}}>
                <img  style={{width:"10rem"}} src="https://zerodha.com/static/images/partners/tijori.svg" alt="" className="image-fluid" />
                <p className="p-3" style={{fontSize:"0.8rem",fontWeight:"500",opacity:"0.5"}}>Investment research platform that offers detailed insights on stocks,sectors, supply chains, and more.</p>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4 p-3 px-5" style={{textAlign:"center"}}>
                <img style={{width:"10rem"}} src="images/streakLogo.png" alt=""className="image-fluid" />
                <p className="p-3" style={{fontSize:"0.8rem",fontWeight:"500",opacity:"0.5"}}>Systematic trading platform that allows you to create and backtest strategies without coding.</p>
            </div>
            <div className="col-md-4 p-3 px-5" style={{textAlign:"center"}}>
                <img style={{width:"13rem",paddingTop:"1rem"}} src="images/smallcaseLogo.png" alt="" className="image-fluid" />
                <p className="p-3" style={{fontSize:"0.8rem",fontWeight:"500",opacity:"0.5"}}>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
            </div>
            <div className="col-md-4 p-3 px-5" style={{textAlign:"center"}}>
                <img  style={{width:"9rem"}} src="images/dittoLogo.png" alt="" className="image-fluid"/>
                <p className="p-3" style={{fontSize:"0.8rem",fontWeight:"500",opacity:"0.5"}}>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
            </div>
        </div>
        <button
          style={{width:"14rem",margin:"auto",backgroundColor:"#387ed1",color:"white"}} className="p-2 my-3 btn fs-5 btn-hover"
        >
          Sign up for free
        </button>
      </div>
    );
}