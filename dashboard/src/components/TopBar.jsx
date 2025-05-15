import Menu from "./Menu";
import "./navbarstyle.css"
export default function TopBar() {
  return (
  <nav className="navbar navbar-expand-lg p-0 ">
  <div className="container-fluid topbar-container">
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarMenu"
      aria-controls="navbarMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="d-flex align-items-center indices-container">
      <div className="text-end nifty">
        <p className="mb-0 index ">NIFTY 50</p>
        <p className="mb-0 index-points">100.2</p>
      </div>
      <div className="text-end sensex">
        <p className="mb-0 index ">SENSEX</p>
        <p className="mb-0  index-points">100.2</p>
      </div>
    </div>
      <img src="logo.png" style={{ width: "40px",marginLeft:"1rem" }} />

     {/* Move this inside the collapse, so it aligns properly */}
    <div className="collapse navbar-collapse bg-white" id="navbarMenu">
        {/* <img src="logo.png" style={{ width: "40px",marginLeft:"1rem" }} /> */}
      <div className="navrespo d-flex flex-grow-1 align-items-center justify-content-end">
        <Menu />
    </div>
  </div>
  </div>
</nav>
  );
}
