import logo from './components/bootstrap-logo.png';
import './App.css';
// import HandleInput from './components/script';
import React, { useState } from 'react';

function App() {
  const maxLength = 25;
  const [productName, setName] = useState('');
  const [productCategory, setCategory] = useState('');
  const [imageInput, setImage] = useState('');
  const [productFreshness, setFreshness] = useState('');
  const [productDescription, setDescription] = useState('');
  const [productPrice, setPrice] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
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
  const handleInput = (event) => {
    event.preventDefault();
    if (productName.length > maxLength) {
      productName.slice(0, maxLength);
      // handleNameChange.slice(0, maxLength);
      // handleNameChange(inputValue.slice(0, 25));
        return false;
    } else if (productName.length == 10){
      alert("Last Name must not exceed 25 characters");
      return false;
    }

  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // Validasi input Product Name
    const pattern = /[^\w\s]/gi;
    if (pattern.test(productName)) {
        alert("Name must not contain symbols.");
        return false;
    }
    if (productName.length === 0) {
        alert("The Product Name field must be filled in");
        return false;
    }
    // Validasi input Product Category
    if (productCategory.length === "") {
        alert("The Product Category field must be filled in");
        return false;
    }
    // Validasi input Image of Product
    if (imageInput === "" ) {
        alert("The Image of Product field must be filled in");
        return false;
    }
    // Validasi input Product Freshness
    if (productFreshness === "") {
        alert("Please select a valid Product Freshness.");
        return false;
    }
    // Validasi input Additional Description
    if (productDescription.length === 0) {
        alert("The Additional Description field must be filled in");
        return false;
    }
    // Validasi input Product Price
    if (productPrice.length === 0) {
        alert("Please enter a valid Product price.");
        return false;
    }
    const message = `Product Name: ${productName}
                    \n Product Category : ${productCategory}
                    \n Product Freshness : ${ productFreshness}
                    \n Product Description : ${productDescription}
                    \n Product Price : ${productPrice}`
                    ;

    
    alert(message);
        
  }

  return (
    <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&family=Open+Sans:wght@400;500&family=Roboto:wght@400;500&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" type="text/css" href="./assets/style.css" />
    {/* bootstrap */}
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossOrigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
    />
    <title>Create Product</title>
    <header>
      <div className="container-fluid">
        <div className="d-flex justify-content-between">
          <h4 className="pt-3">Simple header</h4>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="nav nav-pills ">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <div className="container-fluid pt-4 pb-5">
      <div className=" d-flex justify-content-center mt-5 pb-2">
        <div className="content">
          <div className="text-center">
            <img src={logo} alt="bootstrap-logo" />
            <h2>Create Product</h2>
            <p>
              Below is an example form built entirely with Bootstrap’s form
              controls. Each required form group has a validation state that can
              be triggered by attempting to submit the form without completing it.
            </p>
          </div>
          {/* form */}
          <div className="d-flex justify-content-center">
            <div className="form-product">
              <h3 className="mt-5">Detail Product</h3>
              <form id="create-form" encType="multipart/form-data" onSubmit= {handleSubmit}>
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
                        value={productName} onChange={handleNameChange} onInput={handleInput} 
                      />
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
                  </div>
                </div>
                {/* image product */}
                <div className="mb-5">
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
                      />
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
                    defaultValue="Brand New"
                    checked={productFreshness === "Bnew"}
                  />
                  <label className="form-check-label" htmlFor="Bnew" onChange={handleFreshnessChange}>
                    Brand New
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="SecHank"
                    name="product_freshness"
                    defaultValue="Second Hank"
                    checked={productFreshness === "SecHank"}
                  />
                  <label className="form-check-label" htmlFor="SecHank" onChange={handleFreshnessChange}>
                    Second Hank
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="refurbished"
                    name="product_freshness"
                    defaultValue="Refurbished"
                    checked={productFreshness === "refurbished"}
                  />
                  <label className="form-check-label" htmlFor="refurbished" onChange={handleFreshnessChange}>
                    Refurbished
                  </label>
                </div>
                {/* Additional Description */}
                <div className="form-group">
                  <label htmlFor="comment" className="mb-2">
                    Additional Description
                  </label>
                  <textarea
                    className="form-control"
                    id="product-description"
                    name="product-description"
                    style={{ height: 116 }}
                    value={productDescription}
                    onChange={handleDescriptionChange}
                  />
                </div>
                {/* Price */}
                <label htmlFor="productPrice" className="mt-4 mb-2">
                  Product Price :
                </label>
                <input
                  className="form-control mb-5"
                  type="number"
                  id="product-price"
                  name="product-price"
                  value={productPrice}
                  onChange={handlePriceChange}
                />
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
        </div>
      </div>
      <div className="list-product">
        <h2 className="text-center">List Product</h2>
        {/* table */}
        <table className="table table-striped" style={{ width: 900 }}>
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Category</th>
              <th scope="col">Image of Product</th>
              <th scope="col">Product Freshness</th>
              <th scope="col">Additional Desciption</th>
              <th scope="col">Product Price</th>
            </tr>
          </thead>
          <tbody id="list">
            <tr>
              <th scope="row">1,001</th>
              <td>Lorem</td>
              <td>ipsum</td>
              <td>dolor</td>
              <td>Brand new</td>
              <td>adipiscing</td>
              <td>1</td>
            </tr>
            <tr>
              <th scope="row">1,002</th>
              <td>Lorem</td>
              <td>ipsum</td>
              <td>dolor</td>
              <td>Second Hand</td>
              <td>adipiscing</td>
              <td>10</td>
            </tr>
            <tr>
              <th scope="row">1,003</th>
              <td>Lorem</td>
              <td>ipsum</td>
              <td>dolor</td>
              <td>Brand new</td>
              <td>adipiscing</td>
              <td>20</td>
            </tr>
            <tr>
              <th scope="row">1,004</th>
              <td>Lorem</td>
              <td>ipsum</td>
              <td>dolor</td>
              <td>Refushed</td>
              <td>adipiscing</td>
              <td>9</td>
            </tr>
          </tbody>
        </table>
        {/* search */}
        <form role="search">
          <div className="row">
            <div className="col-3">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search by Product Name"
                aria-label="Search"
              />
            </div>
          </div>
          <div className="button">
            <button className="btn btn-primary position-relative" type="button">
              Deletion
            </button>
            <button
              className="btn btn-outline-primary position-absolute"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
    {/* JavaScript Bundle with Popper */}
  </>
  
  );
}

export default App;
