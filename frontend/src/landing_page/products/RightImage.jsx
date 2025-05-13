export default function RightImage({
    imageURL,
    productName,
    productDesc,
    link1
  }) {
    return(
      <div className="container">
          <div className="row">
              <div className="col-md-5 mr-5 mt-5 pt-5" style={{lineHeight:"1.8"}}>
                  <h1 className="pt-5" style={{fontSize:"2.1rem",opacity:"0.85"}}>{productName}</h1>
                  <p style={{fontSize:"1.1rem",opacity:"0.9"}}>{productDesc}</p>
                  <div style={{width:"70%",height:"10%",display:"flex",justifyContent:"space-between"}}>
                  <a href={link1}>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                  </div>
  
              </div>
              <div className="col-md-7">
                  <img src={imageURL} alt="" className="image-fluid" style={{width:"90%"}} />
              </div>
          </div>
      </div>
    );
  }
  