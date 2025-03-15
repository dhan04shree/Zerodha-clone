export default function Hero(){
    return(
        <div className="container p-5 mb-5">
            <div class="row">
                <img src="/images/homeHero.png" alt="" className="mb-5" style={{width:"70%",margin:"auto"}} />    
            </div>
            <div className="row text-center">
                <h1 className="mt-3">Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button style={{width:"20%",margin:"auto",backgroundColor:"#387ed1",color:"white"}} className="p-2 mb-5 btn fs-5 btn-hover">Sign up for free</button>
            </div>
        </div>
    );
}