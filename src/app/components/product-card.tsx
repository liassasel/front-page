import { useState } from "react";
import { products, Product } from "../../app/data/protducts";

// Product Card Component
const ProductCard = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value: number) => {
    const newQuantity = Math.max(1, Math.min(99, value));
    setQuantity(newQuantity);
  };

  return (
    <div className="product-card">
      <div className="product-status">
        {product.onSale && <span className="on-sale">ON SALE</span>}
        <div className="quantity-selector">
          <input
            type="number"
            value={quantity}
            onChange={(e) =>
              handleQuantityChange(parseInt(e.target.value) || 1)
            }
            min="1"
            max="99"
            className="quantity-input"
          />
          <div className="quantity-controls">
            <button
              onClick={() => handleQuantityChange(quantity + 1)}
              className="quantity-btn"
              disabled={quantity >= 99}
            >
              ▲
            </button>
            <button
              onClick={() => handleQuantityChange(quantity - 1)}
              className="quantity-btn"
              disabled={quantity <= 1}
            >
              ▼
            </button>
          </div>
        </div>
      </div>

      {product.inStock && <span className="stock-status">IN STOCK</span>}

      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <div className="price-info">
          <span className="current-price">${product.price.toFixed(2)}</span>
          {product.originalPrice > product.price && (
            <span className="original-price">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        <p className="product-description">{product.description}</p>
      </div>

      <div className="product-buttons">
        <button className="details-btn">DETAILS</button>
        <button className="add-btn">ADD</button>
      </div>
    </div>
  );
};

export default ProductCard;
