import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useSubscription } from "@apollo/client";
import { UpdateProducts, Delete_Products } from "../../graphQL/mutation";
import { SubscriptionProducts } from "../../graphQL/subscription";
import GetProducts from "../../graphQL/query";

const StoreManagement = () => {
  const { data, loading, error } = useSubscription(SubscriptionProducts);
  const [updateProduct] = useMutation(UpdateProducts);
  const [deleteProduct] = useMutation(Delete_Products);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleDelete = (itemId, productName) => {
    if (
      window.confirm(
        `Are you sure you want to delete product "${productName}"?`
      )
    ) {
      deleteProduct({
        variables: {
          id: itemId,
        },
        refetchQueries: [{ query: GetProducts }],
      });
    }
  };

  const [editingProduct, setEditingProduct] = useState(null);
  const regexName = /^[a-zA-Z ]{2,30}$/;
  const onSubmit = (formData) => {
    updateProduct({
      variables: {
        id: editingProduct.id,
        productName: formData.productName,
        productCategory: formData.productCategory,
        productFreshness: formData.productFreshness,
        productPrice: formData.productPrice,
        productDescription: formData.productDescription,
      },
      refetchQueries: [{ query: GetProducts }],
    });
    setEditingProduct(null);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p> {error.message}</p>;
  return (
    <>
      <div className="list-product mt-5 ">
        <h2 className="text-center mb-3">List Product</h2>
        {/* table */}
        <div className="d-flex justify-content-center">
          <table className="table table-striped" style={{ width: 1100 }}>
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
              {data?.products.map((item, index) => (
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
                      onClick={() => handleDelete(item.id, item.productName)}>
                      Delete
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => setEditingProduct(item)}>
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {editingProduct && (
        <div className="form-edit mb-5">
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
                        defaultValue={editingProduct.productName}
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
                <div className="col-6 ">
                  <input
                    type="text"
                    className="form-control form-control-sm "
                    id="productCategory"
                    name="productCategory"
                    {...register("productCategory", {
                      required: "Product Category is required",
                      pattern: {
                        value: regexName,
                        message: "Product Category tidak valid",
                      },
                      maxLength: {
                        value: 21,
                        message: "tidak boleh lebih dari 20 karakter",
                      },
                    })}
                    style={{
                      border: errors.productCategory && "1px solid red",
                    }}
                    aria-describedby="nameHelp"
                    defaultValue={editingProduct.productCategory}
                  />
                  <div id="nameHelp" className="form-text text-danger">
                    {errors?.productCategory?.message}
                  </div>
                </div>
                {/* radio button */}
                <label htmlFor="productFreshness">Product Freshness :</label>
                <br />
                <div className="col-6 ">
                  <input
                    type="text"
                    className="form-control form-control-sm "
                    id="productFreshness"
                    name="productFreshness"
                    {...register("productFreshness", {
                      required: "Product Freshness is required",
                      pattern: {
                        value: regexName,
                        message: "Product Freshness tidak valid",
                      },
                      maxLength: {
                        value: 21,
                        message: "tidak boleh lebih dari 20 karakter",
                      },
                    })}
                    style={{
                      border: errors.productFreshness && "1px solid red",
                    }}
                    aria-describedby="nameHelp"
                    defaultValue={editingProduct.productFreshness}
                  />
                  <div id="nameHelp" className="form-text text-danger">
                    {errors?.productFreshness?.message}
                  </div>
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
                    defaultValue={editingProduct.productDescription}
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
                  defaultValue={editingProduct.productPrice}
                />
                <div id="priceHelp" className="form-text text-danger">
                  {errors?.productPrice?.message}
                </div>
                <button
                  className="btn btn-primary mt-5 ms-3 me-3"
                  type="submit"
                  style={{ width: 550 }}>
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StoreManagement;
