import { useContext, useRef } from "react";
import { CartContext } from "../Context";


export default function Products() {

  const {
    products,
    loading,
    error,
    addToCart
  } = useContext(CartContext);


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


  if (loading) {
    return <p>Loading products...</p>;
  }


  if (error) {
    return <p>Error: {error}</p>;
  }


  return (

    <section id="shop" className="products">

      <h2 className="section-title">
        Featured Products
      </h2>


      <div className="products-slider">


        {/* LEFT BUTTON */}

        <button
          className="slider-button slider-button-left"
          onClick={slideLeft}
        >
          &#10094;
        </button>


        {/* PRODUCTS */}

        <div
          className="products-grid"
          ref={productsRef}
        >

          {products.map((product) => (

            <div
              className="product-card"
              key={product.id}
            >

              <img
                src={product.images[0]}
                alt={product.title}
                className="product-image"
              />


              <div className="product-info">

                <h3>
                  {product.title}
                </h3>


                <p className="product-price">
                  ${product.price}
                </p>


                <button
                  className="cart-button"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>

              </div>

            </div>

          ))}

        </div>


        {/* RIGHT BUTTON */}

        <button
          className="slider-button slider-button-right"
          onClick={slideRight}
        >
          &#10095;
        </button>


      </div>

    </section>

  );
}