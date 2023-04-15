import { gql } from "@apollo/client";


 const GetProducts = gql `
  query MyQuery {
    products {
      productName
      id
      productCategory
      productDescription
      productFreshness
      productImage
      productPrice
    }
  }
`;

export default GetProducts;

