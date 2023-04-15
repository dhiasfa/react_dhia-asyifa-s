import React from "react";
import { useNavigate } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
const GetProducts = gql`
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
const Card = () => {
  const { data, loading, error } = useQuery(GetProducts);
  const navigate = useNavigate();
  return (
    <>
      <h3 className="ms-5 mt-4 mb-3" style={{ color: "#37517E" }}>
        Product List
      </h3>
      <div className="d-flex justify-content-evenly mb-5">
        {data?.products.map((item) => (
          <div className="card" style={{ width: "18rem" }} key={item.id}>
            <img
              src={item.productImage}
              className="card-img-top"
              alt=""
              style={{ height: 150 }}
            />
            <div className="card-body">
              <h5 className="card-title">{item.productName}</h5>
              <p className="card-text">{item.productDescription}</p>
            </div>
          </div>
        ))}
      </div>
      <div class="d-flex justify-content-end me-5 mb-5">
        <button className="btn btn-primary" onClick={() => navigate("/store")}>
          Load More..
        </button>
      </div>
    </>
  );
};

export default Card;
