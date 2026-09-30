import { useContext } from "react";
import { CartContext } from "../Context";

export default function Cart() {

  const {
    visible,
    cart,
    removeFromCart
  } = useContext(CartContext);


  return (

    <div
      className="cart_container"
      style={{ display: visible }}
    >

      <h2 className="cart_title">
        Your Cart
      </h2>


      {cart.length === 0 ? (

        <p className="empty_cart">
          Your cart is empty.
        </p>

      ) : (

        <div className="cart_items">

          {cart.map((product, index) => (

            <div
              className="cart_item"
              key={`${product.id}-${index}`}
            >

              <img
                src={product.images[0]}
                alt={product.title}
                className="cart_item_image"
              />


              <div className="cart_item_info">

                <h3>
                  {product.title}
                </h3>

                <p>
                  ${product.price}
                </p>

              </div>


              <button
                className="delete_button"
                onClick={() => removeFromCart(index)}
              >
                Delete
              </button>

            </div>

          ))}

        </div>

      )}

    </div>

  );
}