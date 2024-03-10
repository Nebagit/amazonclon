// import { useContext, useEffect } from "react";
import "./App.css";
import Routing from "./Router";
import { ThemeProvider } from "./contextProvider";
// import { DataContext } from "./Components/DataProvider/DataProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <Routing />
      </ThemeProvider>
    </>
  );
}

export default App;
