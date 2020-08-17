import React, { useEffect } from "react";
import "fontsource-roboto";
//import CustomCard from "./components/CustomCard";
import { Notifications } from "react-push-notification";
import HeaderWithDrawer from "./components/header/HeaderWithDrawer";
import FormOrder from "./components/order/FormOrder";
import AddProduct from "./components/products/AddProduct";
import AddProductForm from "./components/products/AddProductForm";
import Cart from "./components/cart/Cart";
import Home from "./components/home/Home";
import AppBarOnly from "./components/header/AppBarOnly";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Paper, ThemeProvider, createMuiTheme } from "@material-ui/core";

function App() {
  const [dark, setDark] = React.useState(false);
  const theme = createMuiTheme({
    palette: {
      type: dark ? "dark" : "light",
    },
  });
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Paper>
            <Notifications position="bottom-right" />
            <HeaderWithDrawer dark={dark} setDark={setDark} />
          </Paper>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
