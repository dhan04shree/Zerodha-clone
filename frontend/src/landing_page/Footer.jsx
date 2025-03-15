export default function Footer(){
    return(
        <div style={{backgroundColor:"#fbfbfb",borderTop:"1px solid #dcdcdc" }}>
       <div className="container">
            <div className="row p-5">
                <div className="col-3">
                    <img src="images/logo.svg" style={{width:"70%"}} alt="" />
                    <p className="text-muted mt-3" style={{fontSize:"0.8rem"}}>© 2010 - 2025, Zerodha Broking Ltd. <br /> All rights reserved.</p>
                    <p className="text-muted fs-5"><i className="fa-brands fa-x-twitter me-3"></i>
                    <i class="fa-brands fa-square-facebook me-3  ms-1"></i>
                    <i className="fa-brands fa-instagram me-3  ms-1"></i>
                    <i class="fa-brands fa-linkedin-in me-3"></i>
                    <hr />
                    <i className="fa-brands fa-youtube me-3 mt-1"></i>
                    <i className="fa-brands fa-whatsapp me-3  ms-1"></i>
                    <i className="fa-brands fa-telegram  ms-1"></i></p>
                </div>
                <div className="col-3">
                    <ul  style={{listStyleType:"none"}}> 
                        <li className="pb-4 fs-5" style={{fontWeight:"500",color:"#000000ab"}}>Company</li>
                        <li className="pb-2"><a className="f-link" href="">About</a></li>
                        <li className="pb-2"><a className="f-link" href="">Products</a></li>
                        <li className="pb-2"><a className="f-link" href="">Pricing</a></li>
                        <li className="pb-2"><a className="f-link" href="">Referral programme</a></li>
                        <li className="pb-2"><a className="f-link" href="">Careers</a></li>
                        <li className="pb-2"><a className="f-link" href="">Zerodha.tech</a></li>
                        <li className="pb-2"><a className="f-link" href="">Open source</a></li>
                        <li className="pb-2"><a className="f-link" href="">Press & media</a></li>
                        <li className="pb-2"><a className="f-link" href="">Zerodha Cares (CSR)</a></li>
                    </ul>
                </div>
                <div className="col-3"><ul  style={{listStyleType:"none"}}> 
                        <li className="pb-4 fs-5" style={{fontWeight:"500",color:"#000000ab"}}>Support</li>
                        <li className="pb-2"><a className="f-link" href="">Contact us</a></li>
                        <li className="pb-2"><a className="f-link" href="">Support portal</a></li>
                        <li className="pb-2"><a className="f-link" href="">Z-Connect blog</a></li>
                        <li className="pb-2"><a className="f-link" href="">List of charges</a></li>
                        <li className="pb-2"><a className="f-link" href="">Downloads & resources</a></li>
                        <li className="pb-2"><a className="f-link" href="">Videos</a></li>
                        <li className="pb-2"><a className="f-link" href="">Market overview</a></li>
                        <li className="pb-2"><a className="f-link" href="">How to file a complaint?</a></li>
                        <li className="pb-2"><a className="f-link" href="">Status of your complaints</a></li>
                    </ul>
                </div>
                <div className="col-3"><ul  style={{listStyleType:"none"}}> 
                        <li className="pb-4 fs-5" style={{fontWeight:"500",color:"#000000ab"}}>Account</li>
                        <li className="pb-2"><a className="f-link" href="">Open an account</a></li>
                        <li className="pb-2"><a className="f-link" href="">Fund transfer</a></li>
                    </ul>
                </div>
            </div>
       </div>
        </div>
    );
}