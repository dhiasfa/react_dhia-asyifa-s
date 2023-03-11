import React, { useState } from 'react';

function HandleInput() {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validasi input Product Name
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
};

export default handleInput;
