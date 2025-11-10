import React, { useState} from "react";
import food_items from "../food";
import { dataContext } from "./DataContext.jsx";

const UserContext = ({ children }) => {
  const [input, setInput] = useState("");
  const [cate, setCate] = useState(food_items);
  const [showCart, setShowCart] = useState(false);

  const data = { input, setInput, cate, setCate,showCart,setShowCart };

  return (
    <dataContext.Provider value={data}>
      {children}
    </dataContext.Provider>
  );
};

export default UserContext;
