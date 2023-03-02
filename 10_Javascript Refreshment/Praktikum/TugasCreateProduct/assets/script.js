function validateProductName() {
    let input = document.getElementById("productName");
    let maxLength = 25;
    
   if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
        return false;
    } else if (input.value.length == 10){
      alert("Last Name must not exceed 25 characters");
      return false;
    }
    else {
      return true;
    }
}

function handleInput(){

    let productName = document.getElementById("productName");
    let productCategory = document.getElementById("Pcategory");
    let imageInput= document.getElementById("image-product");
    let productFreshness = document.querySelector('input[name="product_freshness"]:checked');
    let productDescription = document.getElementById("product-description");
    let productPrice = document.getElementById("product-price");

    const pattern = /[^\w\s]/gi;
    if (pattern.test(productName.value)) {
        alert("Name must not contain symbols.");
        return false;
    }

  // Validasi input Product Name
  if (productName.value.length === 0) {
      alert("The Product Name field must be filled in");
      return false;
  }
  // Validasi input Product Category
  if (productCategory.value === "" ) {
      alert("The Product Category field must be filled in");
      return false;
  }

  // Validasi input Image of Product
  if (imageInput.value === "") {
      alert("The Image of Product field must be filled in");
      return false;
  }

  // Validasi input Product Freshness
  if (!productFreshness) {
      alert("Please select a valid Product Freshness.");
      return false;
  }

  // Validasi input Additional Description
  if (productDescription.value.length === 0) {
      alert("The Additional Description field must be filled in");
      return false;
  }

  // Validasi input Product Price
  if (productPrice.value.length === 0) {
      alert("Please enter a valid Product price.");
      return false;
  }
  const data = {
      productName: productName.value,
      productCategory: productCategory.value,
      productFreshness: productFreshness.value,
      productDescription: productDescription.value,
      productPrice: productPrice.value
  };

  alert(`Data yang telah dimasukkan:\n${JSON.stringify(data, null, 2)}`);

}
