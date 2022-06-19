import { Home } from "@material-ui/icons";
import { createTheme } from "@mui/material";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/system";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import BasketPage from "./Components/BasketPage";
import Chat from "./Components/Chat";
import Navbar from "./Components/Navbar";
import OrderComplete from "./Components/OrderComplete";
import ProductDetails from "./Components/ProductDetails";
import ProductList from "./Components/ProductList";

function App() {
  const [darkmode, setdarkmode] = useState(false);
  const palettetype = darkmode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: palettetype,
    },
  });

  function handleThemeChange() {
    setdarkmode(!darkmode);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar darkMode={darkmode} handleThemeChange={handleThemeChange} />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route path="/ordercomplete" element={<OrderComplete />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
