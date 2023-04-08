import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./CreateProduct.style.css";
export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [currentProduct, setCurrentProduct] = useState(null);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://642cdf18bf8cbecdb4f8b260.mockapi.io/products")
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, []);

  const onSubmit = (data) => {
    if (currentProduct) {
      axios
        .put(
          `https://642cdf18bf8cbecdb4f8b260.mockapi.io/products/${currentProduct.id}`,
          data
        )
        .then((response) => {
          setProduct((prevProduct) =>
            prevProduct.map((product) =>
              product.id === response.data.id ? response.data : product
            )
          );
          setCurrentProduct(null);
          reset();
          alert("Data berhasil di update");
        });
    } else {
      axios
        .post("https://642cdf18bf8cbecdb4f8b260.mockapi.io/products", data)
        .then((response) => {
          setProduct((prevProduct) => [...prevProduct, response.data]);
          reset();
          alert("Data berhasil di submit");
        });
    }
  };

  const handleEdit = (item) => {
    setCurrentProduct(item);
    reset();
  };

  const handleDelete = (id) => {
    const konfirmasiDelete = window.confirm(
      `do you want to delete data number ${id}?`
    );
    if (konfirmasiDelete) {
      const updatedProduct = product.filter((item) => item.id !== id);
      setProduct(updatedProduct);
      axios
        .delete(`https://642cdf18bf8cbecdb4f8b260.mockapi.io/products/${id}`)
        .then(() => setProduct(product.filter((product) => product.id !== id)));
      alert("Data berhasil dihapus").catch((error) => console.log(error));
    }
  };

  const regexName = /^[a-zA-Z ]{2,30}$/;

  return (
    <>
      {/* onSubmit={handleSubmit(onSubmit)} */}
      <div className="container-fluid">
        <div className="body">
          <div className="d-flex justify-content-center">
            <div className="form-product">
              <h3 className="mt-5">Detail Product</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-2">
                  <label htmlFor="productName" className="form-label">
                    Product Name:
                  </label>
                  <div className="row">
                    <div className="col-6 ">
                      <input
                        type="text"
                        className="form-control form-control-sm "
                        id="productName"
                        name="productName"
                        {...register("productName", {
                          required: "Product Name is required",
                          pattern: {
                            value: regexName,
                            message: "Product Name tidak valid",
                          },
                          maxLength: {
                            value: 26,
                            message: "tidak boleh lebih dari 25 karakter",
                          },
                        })}
                        style={{
                          border: errors.productName && "1px solid red",
                        }}
                        aria-describedby="nameHelp"
                        defaultValue={currentProduct?.productName || ""}
                      />
                      <div id="nameHelp" className="form-text text-danger">
                        {errors?.productName?.message}
                      </div>
                    </div>
                  </div>
                </div>
                {/* category */}
                <label htmlFor="Pcategory" className="mb-2">
                  Product Category:
                </label>{" "}
                <br />
                <div className="row">
                  <div className="col-5 mb-3">
                    <select
                      className="form-select form-select-sm"
                      id="productCategory"
                      name="productCategory"
                      {...register("productCategory", {
                        required: "Product Category is required",
                      })}
                      style={{
                        border: errors.productCategory && "1px solid red",
                      }}
                      aria-describedby="categoryHelp">
                      <option value="" name="productCategory">
                        Choose option
                      </option>
                      <option value="cookies" name="productCategory">
                        Cookies
                      </option>
                      <option value="Dress" name="productCategory">
                        Dress
                      </option>
                    </select>
                    <div id="categoryHelp" className="form-text text-danger">
                      {errors?.productCategory?.message}
                    </div>
                  </div>
                </div>
                {/* image product */}
                <div className="mb-3">
                  <div className="row">
                    <div className="col-5">
                      <label htmlFor="productImage" className="form-label">
                        Image of Product:
                      </label>
                      <input
                        className="form-control form-control-sm"
                        name="productImage"
                        id="productImage"
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          register("productImage", {
                            required: "Product Image is required",
                            value: URL.createObjectURL(e.target.files[0]),
                          })
                        }
                        style={{
                          border: errors.productImage && "1px solid red",
                        }}
                        aria-describedby="imageHelp"
                        defaultValue={currentProduct?.productImage || ""}
                      />
                      <div id="imageHelp" className="form-text text-danger">
                        {errors?.productImage?.message}
                      </div>
                    </div>
                  </div>
                </div>
                {/* radio button */}
                <label htmlFor="productFreshness">Product Freshness :</label>
                <br />
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="Bnew"
                    name="productFreshness"
                    value="Brand New"
                    {...register("productFreshness", {
                      required: "Product Freshness is required",
                    })}
                    defaultChecked={
                      currentProduct?.productFreshness === "Brand New"
                    }
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
                    name="productFreshness"
                    value="Second Hank"
                    {...register("productFreshness", {
                      required: "Product Freshness is required",
                    })}
                    defaultChecked={
                      currentProduct?.productFreshness === "Second Hank"
                    }
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
                    name="productFreshness"
                    value="Refurbished"
                    {...register("productFreshness", {
                      required: "Product Freshness is required",
                    })}
                    defaultChecked={
                      currentProduct?.productFreshness === "Refurbished"
                    }
                  />
                  <label className="form-check-label" htmlFor="refurbished">
                    Refurbished
                  </label>
                </div>
                <div id="freshnessHelp" className="form-text text-danger">
                  {errors?.productFreshness?.message}
                </div>
                {/* Additional Description */}
                <div className="form-group">
                  <label htmlFor="productDescription" className="mb-2 mt-4">
                    Additional Description
                  </label>
                  <textarea
                    className="form-control"
                    id="productDescription"
                    name="productDescription"
                    {...register("productDescription", {
                      required: "Product Description is required",
                    })}
                    style={{
                      border: errors.productDescription && "1px solid red",
                    }}
                    defaultValue={currentProduct?.productDescription || ""}
                  />
                  <div id="descHelp" className="form-text text-danger">
                    {errors?.productDescription?.message}
                  </div>
                </div>
                {/* Price */}
                <label htmlFor="productPrice" className="mt-4 mb-2">
                  Product Price :
                </label>
                <input
                  className="form-control"
                  type="number"
                  id="productPrice"
                  name="productPrice"
                  {...register("productPrice", {
                    required: "Product Price is required",
                    min: { value: 1000, message: "Minimal harga 1000 rupiah " },
                  })}
                  style={{ border: errors.productPrice && "1px solid red" }}
                  defaultValue={currentProduct?.productPrice || ""}
                />
                <div id="priceHelp" className="form-text text-danger">
                  {errors?.productPrice?.message}
                </div>
                <button
                  className="btn btn-primary mt-5 ms-3 me-3"
                  type="submit"
                  style={{ width: 550 }}>
                  {currentProduct ? "Edit" : "Submit"}
                </button>
              </form>
            </div>
          </div>
          <ProductTable product={product} />
        </div>
      </div>
    </>
  );
  function ProductTable({ product }) {
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
  }
};
