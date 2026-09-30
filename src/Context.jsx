import { createContext, useState, useEffect } from "react";
import { getProducts } from "./Api";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [visible, setVisible] = useState("block");

  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);


  // GET PRODUCTS
  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const data = await getProducts();

        setProducts(data);

      } catch (error) {

        setError(error.message);

      } finally {

        setLoading(false);

      }

    };

    fetchProducts();

  }, []);


  // ADD PRODUCT TO CART
  const addToCart = (product) => {

    setCart((previousCart) => [
      ...previousCart,
      product
    ]);

  };

  // Remove product

  const removeFromCart = (indexToRemove) => {
  setCart((previousCart) =>
    previousCart.filter((_, index) => index !== indexToRemove)
  );
};


  return (

    <CartContext.Provider
      value={{
        visible,
        setVisible,

        products,

        cart,
        addToCart,
        removeFromCart,

        loading,
        error
      }}
    >

      {children}

    </CartContext.Provider>

  );
};