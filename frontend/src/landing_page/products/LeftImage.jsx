export default function LeftImage({
  imageURL,
  productName,
  productDesc,
  link1,link2,link3,link4
}) {
  return(
    <div className="container">
        <div className="row">
            <div className="col-md-7 pt-5">
                <img src={imageURL} alt=""  className="image-fluid" style={{width:"90%"}}/>
            </div>
            <div className="col-md-5 py-5 mt-5" style={{lineHeight:"1.8"}}>
                <h1 style={{fontSize:"2.1rem",opacity:"0.85"}}>{productName}</h1>
                <p style={{fontSize:"1.1rem",opacity:"0.9"}}>{productDesc}</p>
                <div style={{width:"70%",height:"10%",display:"flex",justifyContent:"space-between"}}>
                  {link1 &&
                   <a href={link1}>Try Demo <i class="fa-solid fa-arrow-right-long"></i></a>}
                  {link2 &&
                  <a href={link2}>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                  }
                </div>
                <div className="m-2" style={{width:"80%",display:"flex",justifyContent:"space-between"}}>
                  {link3 && 
                <a href={link3}><img src="images/googlePlayBadge.svg" alt="" /></a>
                  }
                  {link4 && 
                <a href={link4}><img src="images/appstoreBadge.svg" alt="" /></a>
                  }
                </div>

            </div>
        </div>
    </div>
  );
}
