import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  let [orders, setOrders] = React.useState([]);
  React.useEffect(() => {
    axios.get("http://localhost:3002/allorders").then((res) => {
      console.log(res.data);
      setOrders(res.data);
    });
  })

  return (
    <div className="orders">
      <h3 className="title">Orders ({orders.length})</h3>
      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
          
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
          {orders.map((order, index) => {
            return (
              <tr key={index}>
                
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
                <td>{order.mode}</td>
              </tr>
            );
          })}
        </table>
      </div>
      {orders.length === 0 && (
        <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
          
      </div>
      )}




      
        
          
    </div>
  );
};

export default Orders;
