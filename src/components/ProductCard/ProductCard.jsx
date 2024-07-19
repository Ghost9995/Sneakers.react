import "./ProductCard.css";
import { useState } from "react";
import { LuCheck, LuHeart, LuPlus } from "react-icons/lu"
function ProductCard(props) {
  const [selected, setSelected] = useState(false);
  const [liked, setLiked] = useState(false);
  return (
    <div className="product-card">
      <div className="product-like">
      <button className={liked && "liked"} onClick={() => setLiked(!liked)}>
    <LuHeart
    color={liked ? "#FF3535" : "#EAEAEA"}
    fill={liked ? "#FF3535" : "none"}
    size={16}
    />
      </button>
      </div>
      <div className="product-card__image">
        <img src={props.img} alt="" />
      </div>
      <p className="product-title">{props.productTitle}</p>
      <div className="product-bottom">
        <div className="product-info">
          <p>Цена:</p>
          <h5>{props.productPrice}</h5>
        </div>
        <button 
        className={selected && "selected"} 
        onClick={() => setSelected(!selected)}
        >
        {!selected ? (
          <LuPlus size={12} color="#d3d3d3" />
        ) : (
          <LuCheck size={12} color="black" />
        )}
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
