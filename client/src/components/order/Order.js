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
// import {
//   increment,
//   decrement,
//   zero,
//   set,
// } from "../../Redux/actions/orderBadgeAction";

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

const Order = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [order, setorder] = React.useState([]);
  const [subtotal, setSubtotal] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  // var total = 0;
  const handleTotal = (item, index) => {
    // console.log(item);

    var test = 0;
    for (let i = 0; i < order.length; i++) {
      test = test + Number(order[i].qty) * Number(order[i].price);
      console.log(test);
    }

    //setTotal(test);
    // total = total + Number(item.qty) * Number(item.price);
    // return total;
  };

  const apiPOSTorder = () => {
    //console.log(props.product._id);
    productService
      .getOrder()
      .then(function (order) {
        console.log(order);
        setorder(order);
        // console.log("hahah" + order.length);
        // var test = 0;
        // for (let i = 0; i < order.length; i++) {
        //   test = test + Number(order[i].qty) * Number(order[i].price);
        //   console.log(test);
        // }

        // setTotal(test);
        //props.orderbagde("10");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  React.useEffect(apiPOSTorder, []);
  //React.useEffect(handleTotal, [total]);
  const handleDelete = (id) => {
    //console.log();
    console.log("hello");
  };

  return (
    <Grid container>
      <Grid item xs={12} md={1}></Grid>
      <Grid item xs={12} md={10}>
        <TableContainer component={Paper} style={{ marginTop: "100px" }}>
          <Table className={classes.table} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={5}>
                  Details
                </TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>hahaha</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>Qty.</TableCell>
                <TableCell>Price</TableCell>
                <TableCell align="right">Total Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {console.log(order.length)}
              {order ? (
                order.map((item, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>
                        <IconButton
                          onClick={() => {
                            productService
                              .deleteorderItem(item.id)
                              .then(function (order) {
                                console.log(order.length);
                                //console.log();
                                //setorder(order);
                                //dispatch(set(order.length));
                                //apiPOSTorder();
                                //props.orderbagde("10");
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
                      <TableCell>{item.customerData.fname}</TableCell>
                      <TableCell>{item.customerData.address}</TableCell>
                      <TableCell>{item.customerData.phone}</TableCell>
                      <TableCell>
                        {item.customerData.cart.map((product, index) => {
                          return <div key={index}>{product.name}</div>;
                        })}
                      </TableCell>
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

export default Order;
