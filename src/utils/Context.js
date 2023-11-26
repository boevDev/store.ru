import { createContext, useEffect, useState } from 'react';

export const CustomContext = createContext();

export const Context = (props) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('cart') !== null) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addCart = (product) => {
    setCart((prev) => [
      ...prev,
      {
        ...product,
        count: 1,
      },
    ]);
  };

  const plusOneCart = (id) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count + 1 };
        } else {
          return item;
        }
      })
    );
  };

  const minusOneCart = (id) => {
    let count = cart.find((item) => item.id === id).count;

    if (count === 1) {
      setCart((prev) => prev.filter((item) => item.id !== id));
    } else {
      setCart((prev) =>
        prev.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count - 1 };
          } else {
            return item;
          }
        })
      );
    }
  };

  const deleteProductCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const removeCart = () => {
    setCart([]);
  };

  const value = {
    cart,
    addCart,
    removeCart,
    plusOneCart,
    minusOneCart,
    deleteProductCart,
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};
