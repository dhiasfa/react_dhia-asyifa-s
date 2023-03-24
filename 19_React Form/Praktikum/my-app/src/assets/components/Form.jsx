import React, { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import "../style.css";
export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [product, setProduct] = useState([]);

  const onSubmit = (data, e) => {
    // mengambil data file dari image file
    const file = e.target.elements.imageInput.files[0];
    // menambahkan data ke dalam array products
    setProduct([...product, { ...data, imageInput: file }]);
    reset();
  };
  const handleDelete = (id) => {
    const konfirmasiDelete = window.confirm(
      "Are you want to delete this data?"
    );
    if (konfirmasiDelete) {
      const updatedProduct = product.filter((item) => item.id !== id);
      setProduct(updatedProduct);
    }
  };

  const regexName = /^[a-zA-Z ]{2,30}$/;
  return (
    <>
      <div className="container-fluid">
        <div className="body">
          <div className="d-flex justify-content-center">
            <div className="form-product">
              <h3 className="mt-5">Detail Product</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
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
                        {...register("productName", {
                          required: "Product Name is required",
                          pattern: {
                            value: regexName,
                            message: "Product Name tidak valid",
                          },
                          maxLength: {
                            value: 10,
                            message: "tidak boleh lebih dari 10 karakter",
                          },
                        })}
                        style={{
                          border: errors.productName && "1px solid red",
                        }}
                        aria-describedby="nameHelp"
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
                      id="Pcategory"
                      name="Pcategory"
                      {...register("productCategory", {
                        required: "Product Category is required",
                      })}
                      style={{
                        border: errors.productCategory && "1px solid red",
                      }}
                      aria-describedby="categoryHelp">
                      <option value="" name="Pcategory">
                        Choose option
                      </option>
                      <option value="cookies" name="Pcategory">
                        Cookies
                      </option>
                      <option value="Dress" name="Pcategory">
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
                      <label htmlFor="file_upload " className="form-label">
                        Image of Product:
                      </label>
                      <input
                        className="form-control form-control-sm"
                        name="image-product"
                        id="image-product"
                        type="file"
                        {...register("imageInput", {
                          required: "Product Image is required",
                        })}
                        style={{ border: errors.imageInput && "1px solid red" }}
                        aria-describedby="imageHelp"
                      />
                      {/* <img src="" width={300} ref={imageRef} /> */}
                      <div id="imageHelp" className="form-text text-danger">
                        {errors?.imageInput?.message}
                      </div>
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
                    {...register("productFreshness", {
                      required: "Product Freshness is required",
                    })}
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
                    {...register("productFreshness", {
                      required: "Product Freshness is required",
                    })}
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
                    {...register("productFreshness", {
                      required: "Product Freshness is required",
                    })}
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
                  <label htmlFor="comment" className="mb-2 mt-4">
                    Additional Description
                  </label>
                  <textarea
                    className="form-control"
                    id="product-description"
                    name="product-description"
                    {...register("productDescription", {
                      required: "Product Description is required",
                    })}
                    style={{
                      border: errors.productDescription && "1px solid red",
                    }}
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
                  id="product-price"
                  name="product-price"
                  {...register("productPrice", {
                    required: "Product Price is required",
                    min: { value: 1000, message: "Minimal harga 1000 rupiah " },
                  })}
                  style={{ border: errors.productPrice && "1px solid red" }}
                />
                <div id="priceHelp" className="form-text text-danger">
                  {errors?.productPrice?.message}
                </div>
                <button
                  className="btn btn-primary mt-5 ms-3 me-3"
                  type="submit"
                  style={{ width: 550 }}>
                  {" "}
                  Submit
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
                  {item.imageInput && (
                    <img
                      src={URL.createObjectURL(item.imageInput)}
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

