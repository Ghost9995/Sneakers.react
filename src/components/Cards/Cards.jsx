import ProductCard from "../ProductCard/ProductCard";
import "./Cards.css";
import { LuSearch } from "react-icons/lu";
import shoe from "../img/shoe.png";
import shoe1 from "../img/shoe1.png";
import shoe2 from "../img/shoe2.png";
import shoe3 from "../img/shoe3.png";
import shoe4 from "../img/shoe4.png";
import shoe5 from "../img/shoe5.png";
import shoe6 from "../img/shoe6.png";
import shoe7 from "../img/shoe7.png";
import shoe8 from "../img/shoe8.png";
import shoe9 from "../img/shoe9.png";
import shoe10 from "../img/shoe10.png";
import shoe11 from "../img/shoe11.png";
import { useState } from "react";
let productsData = [
  {
    productPrice: "7,999руб.",
    productTitle: "Nike Blazer Mid Suede Men's Sneakers",
    img: shoe,
  },
  {
    productPrice: "8,999руб.",
    productTitle: "Nike Air Max 270 Men's Sneakers",
    img: shoe1,
  },
  {
    productPrice: "5,959руб.",
    productTitle: "Nike Blazer Mid Suede Men's Sneakers",
    img: shoe2,
  },
  {
    productPrice: "6,599руб.",
    productTitle: "Puma X Aka Boku Future Rider sneakers",
    img: shoe3,
  },
  {
    productPrice: "8,999руб.",
    productTitle: "Men's Under Armor Curry 8 Sneakers",
    img: shoe4,
  },
  {
    productPrice: "8,999руб.",
    productTitle: "Nike Kyrie 7 Men's Sneakers",
    img: shoe5,
  },
  {
    productPrice: "8,999руб.",
    productTitle: "Men's Jordan Air Jordan 11 Sneakers",
    img: shoe6,
  },
  {
    productPrice: "8,999руб.",
    productTitle: "Nike LeBron XVIII Men's Sneakers",
    img: shoe7,
  },
  {
    productPrice: "8,999руб.",
    productTitle: "Nike Lebron XVIII Low Men's Sneakers",
    img: shoe8,
  },
  {
    productPrice: "8,999руб.",
    productTitle: "Nike Blazer Mid Suede Men's Sneakers",
    img: shoe9,
  },
  {
    productPrice: "8,999руб.",
    productTitle: "Puma X Aka Boku Future Rider sneakers",
    img: shoe10,
  },
  {
    productPrice: "8,999руб.",
    productTitle: "Nike Kyrie Flytrap IV Men's Sneakers",
    img: shoe11,
  },
];


function Cards() {
  const [products, setProducts] = useState(productsData);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.productTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="cards-wrapper">
      <div className="cards-top container">
        <h1>All sneakers</h1>
        <div className="form-group">
          <input type="text" onChange={handleSearch}   name="name" id="name" placeholder="Search..." />
          <div className="icon"><LuSearch color="#E4E4E4" size={24} /></div>
        </div>
      </div>
      <div className="cards container">
        
      {filteredProducts.length === 0 ? (
          <div className="text-not-found">Not Found</div>
        ) : (
          filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              productTitle={product.productTitle}
              productPrice={product.productPrice}
              img={product.img}
            />
          ))
        )}
      </div>
    </div>
  );
}


export default Cards;