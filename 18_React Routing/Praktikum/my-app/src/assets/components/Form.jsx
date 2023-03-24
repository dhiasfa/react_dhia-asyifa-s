import React from "react";
import "../style.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from 'react-router-dom'


export const Form = () => {
  const maxChar = 10;
  const [productName, setName] = useState("");
  const [productCategory, setCategory] = useState("");
  const [imageInput, setImage] = useState("");
  const [productFreshness, setFreshness] = useState("");
  const [productDescription, setDescription] = useState("");
  const [productPrice, setPrice] = useState("");
  const [product, setProduct] = useState([]);
  // const [item, setItem] = useState([]);
  const [errors, setErrors] = useState({});
  const newErrors = {};
  const handleNameChange = (event) => {
    setName(event.target.value);
    if (productName.length == maxChar) {
      newErrors.productName = "Product Name tidak boleh lebih dari 10 karakter";
    }
    setErrors(newErrors);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleImageChange = (event) => {
    setImage(event.target.value);
  };
  const handleFreshnessChange = (event) => {
    setFreshness(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (productName === "") {
      newErrors.productName = "ProductName is required";
    }
    if (productCategory === "") {
      newErrors.productCategory = "Product Category is required";
    }
    if (imageInput === "") {
      newErrors.imageInput = "Image Input is required";
    }
    if (productFreshness === "") {
      newErrors.productFreshness = "Product Freshness is required";
    }
    if (productDescription === "") {
      newErrors.productDescription = "Product Description is required";
    }
    if (productPrice === "") {
      newErrors.productPrice = "Product Price is required";
    }
    setErrors(newErrors);
    const newProduct = {
      id: uuidv4(),
      name: productName,
      category: productCategory,
      image: imageInput,
      freshness: productFreshness,
      description: productDescription,
      price: productPrice,
    };
    setProduct([...product, newProduct]);
    // reset form fields
    setName("");
    setCategory("");
    setImage("");
    setFreshness("");
    setDescription("");
    setPrice("");
  };
  const handleDelete = (id) => {
    const konfirmasiDelete = window.confirm(
      "Are you want to delete this data?"
    );
    if (konfirmasiDelete) {
      const updatedProducts = product.filter((item) => item.id !== id);
      setProduct(updatedProducts);
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="body">
          {/* form */}
          <div className="d-flex justify-content-center">
            <div className="form-product">
              <h3 className="mt-5">Detail Product</h3>
              <form
                id="create-form"
                encType="multipart/form-data"
                onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label htmlFor="Pname" className="form-label">
                    Product Name:
                  </label>
                  <div className="row">
                    <div className="col-6 ">
                      <input
                        type="text"
                        className="form-control form-control-sm "
                        id="productName"
                        name="productName"
                        value={productName}
                        onChange={handleNameChange}
                        maxLength={10}
                        style={{
                          border: errors.productName && "1px solid red",
                        }}
                      />
                      {errors.productName && (
                        <span style={{ color: "red" }}>
                          {errors.productName}
                        </span>
                      )}
                    </div>
                    <div className="col-1" id="container"></div>
                  </div>
                </div>
                {/* category */}
                <label htmlFor="Pcategory" className="mb-2">
                  Product Category:
                </label>
                <br />
                <div className="row">
                  <div className="col-5 mb-3">
                    <select
                      className="form-select form-select-sm"
                      id="Pcategory"
                      name="Pcategory"
                      placeholder="Choose"
                      value={productCategory}
                      onChange={handleCategoryChange}
                      style={{
                        border: errors.productCategory && "1px solid red",
                      }}>
                      <option value="" name="Pcategory">
                        Choose
                      </option>
                      <option value="cookies" name="Pcategory">
                        Cookies
                      </option>
                      <option value="Dress" name="Pcategory">
                        Dress
                      </option>
                    </select>
                    {errors.productCategory && (
                      <span style={{ color: "red" }}>
                        {errors.productCategory}
                      </span>
                    )}
                  </div>
                </div>
                {/* image product */}
                <div className="mb-3">
                  <div className="row">
                    <div className="col-5">
                      <label htmlFor="file_upload " className="form-label">
                        Image of Product:
                      </label>
                      <input
                        className="form-control form-control-sm"
                        name="image-product"
                        id="image-product"
                        type="file"
                        value={imageInput}
                        onChange={handleImageChange}
                        style={{ border: errors.imageInput && "1px solid red" }}
                      />
                      {errors.imageInput && (
                        <span style={{ color: "red" }}>
                          {errors.imageInput}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                {/* radio button */}
                <label htmlFor="Pfreshness">Product Freshness :</label>
                <br />
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="Bnew"
                    name="product_freshness"
                    value="Brand New"
                    checked={productFreshness === "Brand New"}
                    onChange={handleFreshnessChange}
                  />
                  <label className="form-check-label" htmlFor="Bnew">
                    Brand New
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="SecHank"
                    name="product_freshness"
                    value="Second Hank"
                    checked={productFreshness === "Second Hank"}
                    onChange={handleFreshnessChange}
                  />
                  <label className="form-check-label" htmlFor="SecHank">
                    Second Hank
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="refurbished"
                    name="product_freshness"
                    value="Refurbished"
                    checked={productFreshness === "Refurbished"}
                    onChange={handleFreshnessChange}
                  />
                  <label className="form-check-label" htmlFor="refurbished">
                    Refurbished
                  </label>
                </div>
                {errors.productFreshness && (
                  <span style={{ color: "red" }}>
                    {errors.productFreshness}
                  </span>
                )}
                {/* Additional Description */}
                <div className="form-group">
                  <label htmlFor="comment" className="mb-2 mt-4">
                    Additional Description
                  </label>
                  <textarea
                    className="form-control"
                    id="product-description"
                    name="product-description"
                    value={productDescription}
                    onChange={handleDescriptionChange}
                    style={{
                      border: errors.productDescription && "1px solid red",
                    }}
                  />
                  {errors.productDescription && (
                    <span style={{ color: "red" }}>
                      {errors.productDescription}
                    </span>
                  )}
                </div>
                {/* Price */}
                <label htmlFor="productPrice" className="mt-4 mb-2">
                  Product Price :
                </label>
                <input
                  className="form-control"
                  type="number"
                  id="product-price"
                  name="product-price"
                  value={productPrice}
                  onChange={handlePriceChange}
                  style={{ border: errors.productPrice && "1px solid red" }}
                />
                {errors.productPrice && (
                  <span style={{ color: "red" }}>{errors.productPrice}</span>
                )}
                {/* submit */}
                <input
                  className="btn btn-primary mt-5 ms-3 me-3"
                  type="submit"
                  defaultValue="Submit"
                  style={{ width: 550 }}
                />
              </form>
            </div>
          </div>
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
                {product.map((products, index) => (
                  <tr key={products.id}>
                    <td>
                      <Link to={`/detailProduct/${products.id}`}>
                      {index + 1}
                      </Link>
                    </td>
                    <td>{products.name}</td>
                    <td>{products.category}</td>
                    <td></td>
                    <td>{products.freshness}</td>
                    <td>{products.description}</td>
                    <td>{products.price}</td>
                    <td className="d-flex">
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(products.id)}>
                        Delete
                      </button>
                      <button className="btn btn-success">Edit</button>
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
                <button
                  className="btn btn-primary position-relative"
                  type="button">
                  Deletion
                </button>
                <button
                  className="btn btn-outline-primary position-absolute"
                  type="submit">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
