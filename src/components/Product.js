import React from "react";

const Product = ({ product, toggleBought, handleDelete }) => {
  return (
    <div className="product">
      <p
        style={{ textDecoration: product.bought && "line-through" }}
        className="product_content"
      >
        {product.title}
      </p>
      <p
        style={{ textDecoration: product.bought && "line-through" }}
        className="product_content"
      >
        R${product.price}
      </p>

      <div className="actn_Container">
        <button onClick={() => toggleBought(product)}>Buy</button>
        <button onClick={() => handleDelete(product.id)}>X</button>
      </div>
    </div>
  );
};

export default Product;
