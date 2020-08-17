import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import productService from "../../services/ProductServices";
import { Grid, IconButton, Badge, Typography } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  zero,
  set,
} from "../../Redux/actions/CartBadgeAction";

const TAX_RATE = 0.07;

const useStyles = makeStyles({
  table: {
    //minWidth: 700,
    //margin:"100px"
    //width: "100px",
  },
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

const rows = [
  createRow("Paperclips (Box)", 100, 1.15),
  createRow("Paper (Case)", 10, 45.99),
  createRow("Waste Basket", 2, 17.99),
];

const Cart = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [cart, setCart] = React.useState([]);
  const [subtotal, setSubtotal] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  // var total = 0;
  const handleTotal = (item, index) => {
    // console.log(item);

    var test = 0;
    for (let i = 0; i < cart.length; i++) {
      test = test + Number(cart[i].qty) * Number(cart[i].price);
      console.log(test);
    }

    setTotal(test);
    // total = total + Number(item.qty) * Number(item.price);
    // return total;
  };

  const apiPOSTcart = () => {
    //console.log(props.product._id);
    productService
      .getAllCartData()
      .then(function (cart) {
        console.log(cart);
        setCart(cart);
        console.log("hahah" + cart.length);
        var test = 0;
        for (let i = 0; i < cart.length; i++) {
          test = test + Number(cart[i].qty) * Number(cart[i].price);
          console.log(test);
        }

        setTotal(test);
        //props.cartbagde("10");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  React.useEffect(apiPOSTcart, []);
  //React.useEffect(handleTotal, [total]);
  const handleDelete = (id) => {
    //console.log();
    console.log("hello");
  };

  return (
    <Grid container>
      <Grid item xs={12} md={1}></Grid>
      <Grid item xs={12} md={10}>
        <TableContainer component={Paper} style={{ marginTop: "0px" }}>
          <Table className={classes.table} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={5}>
                  Details
                </TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>Qty.</TableCell>
                <TableCell>Price</TableCell>
                <TableCell align="right">Total Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {console.log(cart.length)}
              {cart ? (
                cart.map((item, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>
                        <IconButton
                          onClick={() => {
                            productService
                              .deleteCartItem(item.id)
                              .then(function (cart) {
                                console.log(cart.length);
                                //console.log();
                                setCart(cart);
                                dispatch(set(cart.length));
                                apiPOSTcart();
                                //props.cartbagde("10");
                              })
                              .catch(function (error) {
                                console.log(error);
                              });
                          }}
                          aria-label="show 4 new mails"
                          color="inherit"
                        >
                          <DeleteOutlineIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.company}</TableCell>
                      <TableCell>{item.qty}</TableCell>
                      <TableCell>{item.price}</TableCell>
                      <TableCell align="right">
                        {Number(item.qty) * Number(item.price)}
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <></>
              )}

              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={4}>Subtotal</TableCell>
                <TableCell align="right">Rs. {total}</TableCell>
              </TableRow>
              <TableRow></TableRow>
              <TableRow>
                <TableCell colSpan={4}>Total</TableCell>
                <TableCell align="right">Rs. {total}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12} md={1}></Grid>
    </Grid>
  );
};

export default Cart;
