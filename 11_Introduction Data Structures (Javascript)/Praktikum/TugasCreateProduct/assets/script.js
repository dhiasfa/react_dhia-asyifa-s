// fungsi untuk memvalidasi input dari productName
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

}

function addData() {
    // Menangkap nilai inputan dari form
    let productName = document.getElementById("productName").value;
    let productCategory = document.getElementById("Pcategory").value;
    let productFreshness = document.querySelector('input[name="product_freshness"]:checked').value;
    let productDescription = document.getElementById("product-description").value;
    let productPrice = document.getElementById("product-price").value;

    //  Mengambil reference untuk elemen tabel dan form
    let  table = document.getElementById("myTable");
    let  myForm = document.getElementById("create-form");

    // Variabel untuk panjang row pada tabel 
    let rowCount = table.rows.length;

    // Buat elemen row baru untuk tabel
    let row = table.insertRow(-1);

    // Menambahkan cell untuk setiap kolom pada row
    let noCell = row.insertCell(0);
    let productNameCell = row.insertCell(1);
    let productCategoryCell = row.insertCell(2);
    let imageInputCell = row.insertCell(3);
    let productFreshnessCell = row.insertCell(3);
    let productDescriptionCell = row.insertCell(5);
    let productPriceCell = row.insertCell(6);
    
    
  // Masukkan data ke dalam cell
    noCell.innerHTML = rowCount;
    productNameCell.innerHTML = productName;
    productCategoryCell.innerHTML = productCategory;
    imageInputCell.innerHTML = "lorem";
    productFreshnessCell.innerHTML = productFreshness;
    productDescriptionCell.innerHTML = productDescription;
    productPriceCell.innerHTML = productPrice;
// Kosongkan form setelah data telah ditambahkan ke dalam tabel
    myForm.reset();

}

