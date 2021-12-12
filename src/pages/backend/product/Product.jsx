/* eslint-disable jsx-a11y/anchor-is-valid */
import BackendLayout from "../../../componenrs/layouts/backend/BackendLayout";
import api from "../../../services/productAPI";
import { useState, useEffect } from "react";
//==========================================================================
// ส่วนของการอ่านข้อมูลจาก API
//==========================================================================
// สร้างตัวแปรมารับข้อมูลที่อ่านจาก API

const Product = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    api.getAllProduct().then((res) => {
      console.log(res.data);
      setproducts(res.data);
    });
  }, []);

  return (
    <BackendLayout title="Dashboard">
      <div>
        <h1 className="h3 mb-3">Product List</h1>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th>Img</th>
                      <th>Name</th>
                      <th>Barcode</th>
                      <th>Price</th>
                      <th>Date</th>
                      <th>Manage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => (
                      <tr key={index}>
                        <td><img src={product.product_image} height="50" alt="" /></td>
                        <td>{product.product_name}</td>
                        <td>{product.product_barcode}</td>
                        <td>{product.product_price}</td>
                        <td>{product.product_date}</td>
                        <td className="text-right" style={{ width: "200px" }}>
                          <a href="#" className="btn btn-sm btn-warning">
                            Edit
                          </a>
                          <a href="#" className="btn btn-sm btn-danger">
                            Delete
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackendLayout>
  );
};

export default Product;
