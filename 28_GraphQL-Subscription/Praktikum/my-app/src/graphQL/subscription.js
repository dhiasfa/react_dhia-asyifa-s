import { gql } from "@apollo/client";
export const SubscriptionProducts = gql`
  subscription MySubscription {
    products {
      id
      productCategory
      productDescription
      productFreshness
      productImage
      productName
      productPrice
    }
  }
`;