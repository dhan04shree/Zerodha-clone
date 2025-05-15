import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbarstyle.css"
export default function Menu() {
  const [selectedMenu, setSelectedMenu] = useState(0);
 const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };
  
  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Orders", path: "/orders" },
    { name: "Holdings", path: "/holdings" },
    { name: "Positions", path: "/positions" },
    { name: "Funds", path: "/funds" },
    { name: "Apps", path: "/apps" },
  ];

  return (
    <ul className="navbar-nav nav-res mb-2 mb-lg-0 align-items-center">
      
      {menuItems.map((item, index) => (
        <li className="nav-item" key={index}>
          <Link
            to={item.path}
            className={`nav-link ${selectedMenu === index ? "active" : ""}`}
           onClick={() => handleMenuClick(index)}
          >
            <span className={selectedMenu === index ? activeMenuClass : menuClass}>
            {item.name}
            </span>
          </Link>
        </li>
      ))}
      <li className="nav-item d-flex align-items-center ms-lg-3">
        <div className="profile" style={{ width: "30px", height: "30px" }}>
          <div className="avatar">ZU</div>
        </div>
        <span className="username">USERID</span>
      </li>
    </ul>
  );
}
