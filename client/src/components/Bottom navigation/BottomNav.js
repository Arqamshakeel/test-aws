import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MailIcon from "@material-ui/icons/Mail";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge, createMuiTheme, ThemeProvider, Paper } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import { set, setOrder } from "../../Redux/actions/CartBadgeAction";
import { useSelector, useDispatch } from "react-redux";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles({
  root: {
    width: "100%",
    display: "relative",
    position: "fixed",
    bottom: "0px",
  },
});

const BottomNav = (props) => {
  const cartBadge = useSelector((state) => state.counter.counter);
  const orderBadge = useSelector((state) => state.order.order);
  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });
  console.log("Botton: " + props);
  console.log(props);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <BottomNavigation
          //  position="static"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction
            label="Recents"
            icon={
              <Badge badgeContent={cartBadge} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            }
            onClick={() => {
              console.log("yessssss");

              props.history.push("/cart");
            }}
          />
          <BottomNavigationAction
            label="Favorites"
            icon={<HomeIcon />}
            onClick={() => {
              console.log("yessssss");

              props.history.push("/");
            }}
          />
          <BottomNavigationAction
            label="Nearby"
            onClick={() => {
              console.log("yessssss");

              props.history.push("/allorders");
            }}
            icon={
              <Badge badgeContent={orderBadge} color="secondary">
                <MailIcon />
              </Badge>
            }
          />
        </BottomNavigation>
      </Paper>
    </ThemeProvider>
  );
};
export default withRouter(BottomNav);
