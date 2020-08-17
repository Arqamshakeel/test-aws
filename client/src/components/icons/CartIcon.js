import React from "react";
import { IconButton, Badge } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import productService from "../../services/ProductServices";
const CartIcon = () => {
  const [badge, setBadge] = React.useState("0");
  const apiPOSTcart = () => {
    //console.log(props.product._id);
    productService
      .getAllCartData()
      .then(function (cart) {
        console.log(cart);
        //setCart(cart);
        console.log("hahah" + cart.length);
        setBadge(cart.length);
        //props.cartbagde("10");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //React.useEffect(apiPOSTcart, [] );
  return (
    <IconButton
      aria-label="show 4 new mails"
      color="inherit"
      onClick={() => {}}
    >
      <Badge color="secondary" badgeContent={badge}>
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

export default CartIcon;
