import React from "react";

const ProductTable = ({ product, handleEdit, handleDelete }) => {
  return (
    <div className="list-product mt-5 ">
      <h2 className="text-center mb-3">List Product</h2>
      {/* table */}
      <table className="table table-striped ms-5" style={{ width: 1100 }}>
        <thead>
          <tr>
            <th scope="col" style={{ width: 30 }}>
              No
            </th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Category</th>
            <th scope="col">Image of Product</th>
            <th scope="col">Product Freshness</th>
            <th scope="col" style={{ width: 150 }}>
              Additional Desciption
            </th>
            <th scope="col">Product Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody id="list">
          {product.map((item, index) => (
            <tr key={item.id} style={{ height: "max-content" }}>
              <td>{index + 1}</td>
              <td>{item.productName}</td>
              <td>{item.productCategory}</td>
              <td>
                {item.productImage && (
                  <img
                    src={item.productImage}
                    width="100"
                    height="100"
                    alt="product"
                  />
                )}
              </td>
              <td>{item.productFreshness}</td>
              <td>{item.productDescription}</td>
              <td>{item.productPrice}</td>
              <td className="">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item.id)}>
                  Delete
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => handleEdit(item)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* search */}
      <form role="search">
        <div className="row">
          <div className="col-3">
            <input
              className="form-control ms-5 me-2"
              type="search"
              placeholder="Search by Product Name"
              aria-label="Search"
            />
          </div>
        </div>
        <div className="button mt-3 mb-3 ms-5">
          <button className="btn btn-primary position-relative" type="button">
            Delete
          </button>
          <button
            className="btn btn-outline-primary position-absolute"
            type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductTable;
