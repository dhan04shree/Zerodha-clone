export default function LeftImage({
  imageURL,
  productName,
  productDesc,
  tryDemo,
  learnMore,
  googlePay,
  appStore,
}) {
  return(
    <div className="container p-5">
        <div className="row">
            <div className="col-7 p-5">
                <img src={imageURL} alt="" />
            </div>
            <div className="col-5 p-5 mr-5 mt-5" style={{lineHeight:"1.8"}}>
                <h1 style={{fontSize:"2.1rem",opacity:"0.85"}}>{productName}</h1>
                <p style={{fontSize:"1.1rem",opacity:"0.9"}}>{productDesc}</p>
                <div style={{width:"70%",height:"10%",display:"flex",justifyContent:"space-between"}}>
                <a href={tryDemo}>Try Demo <i class="fa-solid fa-arrow-right-long"></i></a>
                <a href={learnMore}>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="m-2" style={{width:"80%",display:"flex",justifyContent:"space-between"}}>
                <a href={googlePay}><img src="images/googlePlayBadge.svg" alt="" /></a>
                <a href={appStore}><img src="images/appstoreBadge.svg" alt="" /></a>
                </div>

            </div>
        </div>
    </div>
  );
}
