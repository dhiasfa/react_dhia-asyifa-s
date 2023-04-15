import { gql } from "@apollo/client";

export const UpdateProducts = gql`
  mutation MyMutation(
    $id: uuid!
    $productName: String!
    $productFreshness: String!
    $productDescription: String!
    $productCategory: String!
    $productPrice: Int!
  ) {
    update_products_by_pk(
      pk_columns: { id: $id }
      _set: {
        productName: $productName
        productPrice: $productPrice
        productFreshness: $productFreshness
        productDescription: $productDescription
        productCategory: $productCategory
      }
    ) {
      id
      productName
      productFreshness
      productDescription
      productCategory
      productPrice
    }
  }
`;
export const Delete_Products = gql`
  mutation MyMutation($id: uuid!) {
    delete_products_by_pk(id: $id) {
      id
    }
  }
`;