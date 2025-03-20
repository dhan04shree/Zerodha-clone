export default function RightImage({
    imageURL,
    productName,
    productDesc,
    tryDemo,
    learnMore,
    googlePay,
    appStore,
  }) {
    return(
      <div className="container">
          <div className="row">
             
              <div className="col-5 mr-5 mt-5 p-5" style={{lineHeight:"1.8"}}>
                  <h1 className="pt-5" style={{fontSize:"2.1rem",opacity:"0.85"}}>{productName}</h1>
                  <p style={{fontSize:"1.1rem",opacity:"0.9"}}>{productDesc}</p>
                  <div style={{width:"70%",height:"10%",display:"flex",justifyContent:"space-between"}}>
                  <a href={learnMore}>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                  </div>
  
              </div>
              <div className="col-7">
                  <img src={imageURL} alt="" />
              </div>
          </div>
      </div>
    );
  }
  