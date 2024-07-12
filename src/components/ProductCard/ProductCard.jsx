import "./ProductCard.css";
import { useState } from 'react';
import { LuPlus, LuCheckCircle2 } from "react-icons/lu";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

function ProductCard({ productTitle, productPrice, img }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const togglePlus = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="product-card">
      <div className="favorite-icon" onClick={toggleFavorite}>
        {isFavorite ? <MdFavorite color="red" size={20} /> : <MdFavoriteBorder size={20} />}
      </div>
      <div className="product-card__image">
        <img src={img} alt="Product" />
      </div>
      <p className="product-title">{productTitle}</p>
      <div className="product-bottom">
        <div className="product-info">
          <p>Price:</p>
          <h5>{productPrice}</h5>
        </div>
        <button id="btn" onClick={togglePlus}>
          {isExpanded ? (
            <LuCheckCircle2 size={20} color="green" />
          ) : (
            <LuPlus size={20} color="#d3d3d3" />
          )}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
