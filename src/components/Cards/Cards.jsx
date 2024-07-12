import ProductCard from "../ProductCard/ProductCard";
import "./Cards.css";
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
let products = [
  {
    productPrice: "148,1 $",
    productTitle: "Nike Blazer Mid Suede Men's Sneakers",
    img: shoe,
  },
  {
    productPrice: "148,01 $",
    productTitle: "Nike Air Max 270 Men's Sneakers",
    img: shoe1,
  },
  {
    productPrice: "96,77 $",
    productTitle: "Nike Blazer Mid Suede Men's Sneakers",
    img: shoe2,
  },
  {
    productPrice: "102,46 $",
    productTitle: "Puma X Aka Boku Future Rider sneakers",
    img: shoe3,
  },
  {
    productPrice: "173,06",
    productTitle: "Men's Under Armor Curry 8 Sneakers",
    img: shoe4,
  },
  {
    productPrice: "128,65 $",
    productTitle: "Nike Kyrie 7 Men's Sneakers",
    img: shoe5,
  },
  {
    productPrice: "122,96 $",
    productTitle: "Men's Jordan Air Jordan 11 Sneakers",
    img: shoe6,
  },
  {
    productPrice: "187,86 $",
    productTitle: "Nike LeBron XVIII Men's Sneakers",
    img: shoe7,
  },
  {
    productPrice: "159,39",
    productTitle: "Nike Lebron XVIII Low Men's Sneakers",
    img: shoe8,
  },
  {
    productPrice: "96,77 $",
    productTitle: "Nike Blazer Mid Suede Men's Sneakers",
    img: shoe9,
  },
  {
    productPrice: "102,46 $",
    productTitle: "Puma X Aka Boku Future Rider sneakers",
    img: shoe10,
  },
  {
    productPrice: "159,39 $",
    productTitle: "Nike Kyrie Flytrap IV Men's Sneakers",
    img: shoe11,
  },
];

function Cards() {
  return (
    <div className="cards-wrapper">
      <div className="cards-top container">
        <h1>All sneakers</h1>
      </div>
      <div className="cards container">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            productTitle={product.productTitle}
            productPrice={product.productPrice}
            img={product.img}
          />
        ))}
      </div>
    </div>
  );
}


export default Cards;
