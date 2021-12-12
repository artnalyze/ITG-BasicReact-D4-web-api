/* eslint-disable jsx-a11y/anchor-is-valid */
import BackendLayout from "../../../componenrs/layouts/backend/BackendLayout";

const Product = () => {
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
                    <tr>
                      <td>
                        xxx
                      </td>
                      <td>Samsung</td>
                      <td>2020202020202020</td>
                      <td>200000</td>
                      <td>20/10/2021</td>
                      <td className="text-right" style={{width: '200px'}}>
                          <a href="#" className="btn btn-sm btn-warning">Edit</a>
                          <a href="#" className="btn btn-sm btn-danger">Delete</a>
                      </td>
                    </tr>
                   
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
