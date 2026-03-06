import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(()=>{
   try{
     const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
   }catch{
    return []
   }
  });

  useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart))

  },[cart])

    

  const addToCart = (product) => {
  setCart((prevCart) => {

    const existingItem = prevCart.find(
      (item) => item.id === product.id
    );

    if (existingItem) {
      return prevCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prevCart, { ...product, quantity: 1 }];
  });
};

  // ✅ Remove item completely
  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

    // ✅ Increase quantity
  const increaseQuantity = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };


  // ✅ Decrease quantity
  const decreaseQuantity = (id) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };


  // ✅ Clear entire cart
  const clearCart = () => {
    setCart([]);
  };

  // Empty cart

  const clearFullCart = ()=>{
    setCart([])
  }

  return (
   <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
         clearFullCart 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};