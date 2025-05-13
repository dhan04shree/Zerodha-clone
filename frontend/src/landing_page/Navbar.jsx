import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom bg-light sticky-top">
      <div className="container p-2">

        <div style={{display:"flex",gap:"6rem"}}>

            <Link className="navbar-brand" to={"/"}>
          <img src="images/logo.svg" style={{ width: "9rem" }} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
           </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link f-link" to={"/signup"}>
              Signup
            </Link>
            <Link className="nav-link f-link" to={"/about"}>
              About
            </Link>
            <Link className="nav-link f-link" to={"/products"}>
              Products
            </Link>
            <Link className="nav-link f-link" to={"/pricing"}>
              Pricing
            </Link>
            <Link className="nav-link f-link" to={"/support"}>
              Support
            </Link>
            <Link className="nav-link" href="#">
              <i className="fa-solid fa-bars"></i>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
