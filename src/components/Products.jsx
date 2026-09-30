import { useContext } from "react";
import { CartContext } from "../Context";
import { useRef } from "react";



{/* PRODUCTS */}


export default function Products () {

    const { products, loading, error } = useContext(CartContext);

  console.log(products);

  const productsRef = useRef(null);

const slideLeft = () => {
  productsRef.current.scrollBy({
    left: -300,
    behavior: "smooth",
  });
};

const slideRight = () => {
  productsRef.current.scrollBy({
    left: 300,
    behavior: "smooth",
  });
};


    return (

        <section id="shop" className="products">
  <h2 className="section-title">Featured Products</h2>

  <div className="products-slider">

    <button
      className="slider-button slider-button-left"
      onClick={slideLeft}
    >
      &#10094;
    </button>

    <div className="products-grid" ref={productsRef}>
      {products.map((product) => (
        <div className="product-card" key={product.id}>

          <img
            src={product.images[0]}
            alt={product.title}
            className="product-image"
          />

          <div className="product-info">
            <h3>{product.title}</h3>

            <p className="product-price">
              ${product.price}
            </p>

            <button className="cart-button">
              Add to Cart
            </button>
          </div>

        </div>
      ))}
    </div>

    <button
      className="slider-button slider-button-right"
      onClick={slideRight}
    >
      &#10095;
    </button>

  </div>
</section>


    )
}

