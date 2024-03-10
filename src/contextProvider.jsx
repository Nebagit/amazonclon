import React, { useState, createContext, useContext } from "react";

const colorContext = createContext();

export const useColor = () => {
  return useContext(colorContext);
};

export const ThemeProvider = props => {
  const [color, setColor] = useState("light");

  const colorToggler = () => {
    setColor(prevColor => (prevColor === "light" ? "dark" : "light"));
  };

  return (
    <colorContext.Provider value={{ color, colorToggler }}>
      {props.children}
    </colorContext.Provider>
  );
};
