import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios, { all } from "axios";
export default function Orders(){

   const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      // console.log(res.data);
      console.log("API response:", res.data); 
      setAllOrders(res.data);
    });
  }, []);
  return (
    <div className="orders">
      <h3 className="title">Orders ({allOrders.length})</h3>
    {allOrders.length > 0 ? (
      <div className="order-table">
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Mode</th>
            <th>Qty.</th>
          </tr>

          {allOrders.map((stock, index) => {
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.price}</td>
                <td>{stock.mode}</td>
                <td>{stock.qty}</td>
              </tr>
            );
          })}
        </table>
      </div>
    ) :   <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div> }

    </div>
  );
};

