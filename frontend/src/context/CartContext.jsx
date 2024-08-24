import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemQuantity, setItemQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, currentItem) => {
      return acc + currentItem.price * currentItem.quantity;
    }, 0);
    setTotal(total);
  }, [cart]);

  useEffect(() => {
    if (!cart) return;

    const quantity = cart.reduce((acc, currentItem) => {
      return acc + currentItem.quantity;
    }, 0);
    setItemQuantity(quantity);
  });

  const addToCart = (product, id) => {
    const newItem = { ...product, quantity: 1 };
    console.log(newItem);

    const cartItem = cart.find((item) => item.id === id);
    console.log(cartItem);
    if (!cartItem) {
      setCart([...cart, newItem]);
      return;
    }

    const newCart = [...cart].map((item) => {
      if (item.id !== id) return item;

      return { ...item, quantity: cartItem.quantity + 1 };
    });

    setCart(newCart);
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseQuantity = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  const decreaseQuantity = (id) => {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem?.quantity < 2) {
      removeFromCart(id);
      return;
    }

    if (!cartItem) return;

    const newCart = cart.map((item) => {
      if (item.id !== id) return item;

      return { ...item, quantity: cartItem.quantity - 1 };
    });
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        itemQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
