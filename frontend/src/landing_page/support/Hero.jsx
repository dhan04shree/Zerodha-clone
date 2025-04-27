export default function Hero(){
    return(
        <div className="container-fluid py-5" style={{backgroundColor:"#387ed1",color:"white"}}>
            <div className="row pb-5" style={{padding:"0 70px"}}>
                <div className="col-7">
                    <h4 style={{fontWeight:"400",fontSize:"1.4rem"}}>Support Portal</h4>
                    <h4 className="mt-5 pb-4"style={{fontWeight:"400",fontSize:"1.5rem"}}>Search for an answer or browse help topics to create a ticket</h4>
                    <input style={{padding:"1rem",width:"100%",fontSize:"1.1rem",marginBottom:"1rem"}} type="text" placeholder="Eg: how do i activate F&amp;O, why is my order getting rejected ..." />
                    <a href="" style={{color:"white",paddingRight:"1rem",fontSize:"1.1rem",lineHeight:"2"}}>Track account opening</a>
                    <a href="" style={{color:"white",paddingRight:"1rem",fontSize:"1.1rem",lineHeight:"2"}}>Track segment activation</a>
                    <a href="" style={{color:"white",paddingRight:"1rem",fontSize:"1.1rem",lineHeight:"2"}}>Intraday margins</a><br />
                    <a href="" style={{color:"white",paddingRight:"1rem",fontSize:"1.1rem",lineHeight:"2"}}>Kite user manual</a>
                </div>
                <div className="col-5 ps-4">
                    <a href="" style={{float:"right",color:"white"}}>Track Tickets</a>
                    <h4 className="mt-5 pt-5" style={{fontWeight:"400",fontSize:"1.4rem"}}>Featured</h4>
                    <ol>
                        <li style={{lineHeight:"2.7",textDecoration:"underline",fontSize:"1.1rem"}}>Latest Intraday leverages and Square-off timings</li>
                        <li style={{lineHeight:"2.7",textDecoration:"underline",fontSize:"1.1rem"}}>Rights Entitlements listing in April 2025</li>
                    </ol>
                </div>
            </div> 
        </div>
    );
}  