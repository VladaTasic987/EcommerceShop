import { createContext, useState, useEffect } from "react";
import { getProducts } from "./Api";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [visible, setVisible] = useState("block");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <CartContext.Provider value={{ visible, setVisible, products, loading, error }}>
      {children}
    </CartContext.Provider>
  );
};