import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AdminMenu from "../../components/Layout/AdminMenu";
import { useAuth } from "../../context/auth";
import moment from "moment";  //moment is a popular JavaScript library used for parsing, validating, manipulating, and formatting dates.
import { Select } from "antd";
const { Option } = Select;

const AdminOrders = () => {
  const [status] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancelled",
  ]);
  const [orders, setOrders] = useState([]);
  const [auth] = useAuth();

  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v2/auth/all-orders");
      setOrders(data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch orders.");
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  const handleChange = async (orderId, value) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const { data} = await axios.put(`/api/v2/auth/order-status/${orderId}`, {
        status: value,
      });
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, status: value } : order
        )
      );
      toast.success("Order status updated successfully.");
    } catch (error) {
      console.error("There was an error updating the order status:", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Data:", error.response.data);
        console.error("Status:", error.response.status);
        console.error("Headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Request:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error message:", error.message);
      }
      toast.error("Failed to update order status.");
    }
  };

  return (
    <div title={"All Orders Data"}>
      <div className="row dashboard">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Orders</h1>
          {orders.map((o, i) => (
            <div className="border shadow mb-3" key={o._id}>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Status</th>
                    <th scope="col">Buyer</th>
                    <th scope="col">Date</th>
                    <th scope="col">Payment</th>
                    <th scope="col">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{i + 1}</td>
                    <td>
                      <Select
                        bordered={false}
                        onChange={(value) => handleChange(o._id, value)}
                        defaultValue={o.status}
                      >
                        {status.map((s, i) => (
                          <Option key={i} value={s}>
                            {s}
                          </Option>
                        ))}
                      </Select>
                    </td>
                    <td>{o.buyer?.name}</td>
                    <td>{moment(o.createAt).fromNow()}</td>
                    <td>{o.payment.success ? "Success" : "Failed"}</td>
                    <td>{o.products?.length}</td>
                  </tr>
                </tbody>
              </table>
              <div className="container">
                {o.products?.map((p) => (
                  <div className="row mb-2 p-3 card flex-row" key={p._id}>
                    <div className="col-md-4">
                      {p.photo ? (
                        <p>image is not Available</p>
                      ) : (
                        <img 
                        src={`/api/v2/product/product-photo/${p._id}`}
                        className="card-img-top"
                          alt={p.name}
                          width="100px"
                          height="100px"
                        />
                      )}
                    </div>

                    <div className="col-md-8">
                      <p>{p.name}</p>
                      <p>{p.description.substring(0, 30)}...</p>
                      <p>Price: {p.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;