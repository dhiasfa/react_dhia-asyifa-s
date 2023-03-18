import React from 'react'
import "../style.css"
import { useState } from 'react';
export const Form = () => {
    const maxChar =10;
    const [productName, setName] = useState('');
    const [productCategory, setCategory] = useState('');
    const [imageInput, setImage] = useState('');
    const [productFreshness, setFreshness] = useState('');
    const [productDescription, setDescription] = useState('');
    const [productPrice, setPrice] = useState('');
    const [errors, setErrors] = useState({});
    const newErrors = {};
    const handleNameChange = (event) => {
      setName(event.target.value);
      if (productName.length == maxChar) {
        newErrors.productName = 'Product Name tidak boleh lebih dari 10 karakter';
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
      if (productName === '') {
        newErrors.productName = 'ProductName is required';
      }
      if (productCategory === '') {
        newErrors.productCategory = 'Product Category is required';
      }
      if (imageInput === '') {
        newErrors.imageInput = 'Image Input is required';
      }
      if (productFreshness === '') {
        newErrors.productFreshness = 'Product Freshness is required';
      }
      if (productDescription === '') {
        newErrors.productDescription = 'Product Description is required';
      }
      if (productPrice === '') {
        newErrors.productPrice = 'Product Price is required';
      }
      setErrors(newErrors);
    }
  return (
   <>
    <div className="container-fluid">
      <div className='body'>
             {/* form */}
             <div className="d-flex justify-content-center">
            <div className="form-product">
              <h3 className="mt-5">Detail Product</h3>
              <form id="create-form" encType="multipart/form-data" onSubmit={handleSubmit}>
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
                        value={productName} onChange={handleNameChange} maxLength={10}
                        style={{ border: errors.productName && '1px solid red'}}
                      />
                      {errors.productName && <span style={ {color:'red'}}>{errors.productName}</span>}
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
                      value={productCategory} onChange={handleCategoryChange}
                      style={{ border: errors.productCategory && '1px solid red' }}
                    >
                      <option value=""  name="Pcategory">
                        Choose
                      </option>
                      <option value="cookies"  name="Pcategory">
                        Cookies
                      </option>
                      <option value="Dress"name="Pcategory">
                        Dress
                      </option>
                    </select>
                    {errors.productCategory && <span style={ {color:'red'}}>{errors.productCategory}</span>}
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
                        style={{ border: errors.imageInput && '1px solid red' }}
                      />
                      {errors.imageInput && <span style={ {color:'red'}}>{errors.imageInput}</span>}
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
                    checked={productFreshness === 'Brand New'}
                    onChange={handleFreshnessChange}
                  />
                  <label className="form-check-label" htmlFor="Bnew" >
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
                    checked={productFreshness === 'Second Hank'}
                    onChange={handleFreshnessChange}
                  />
                  <label className="form-check-label" htmlFor="SecHank" >
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
                    checked={productFreshness === 'Refurbished'}
                    onChange={handleFreshnessChange}
                  />
                  <label className="form-check-label" htmlFor="refurbished" >
                    Refurbished
                  </label>
                </div>
                {errors.productFreshness && <span style={ {color:'red'}}>{errors.productFreshness}</span>}
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
                    style={{ border: errors.productDescription && '1px solid red' }}
                    />
                    {errors.productDescription && <span style={ {color:'red'}}>{errors.productDescription}</span>}
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
                  style={{ border: errors.productPrice && '1px solid red' }}
                />
                {errors.productPrice && <span style={ {color:'red'}} >{errors.productPrice}</span>}
                {/* submit */}
                <input
                  className="btn btn-primary mt-5 ms-3 me-3"
                  type="submit"
                  defaultValue="Submit"
                  style={{ width: 550}}
                />
              </form>
            </div>
          </div>
    </div>
    </div>
   </>
  )
}
