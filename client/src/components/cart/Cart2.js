import React from "react";
import MaterialTable from "material-table";
import productService from "../../services/ProductServices";

export default function MaterialTableDemo() {
  const [cart, setCart] = React.useState([]);
  const apiPOSTcart = () => {
    //console.log(props.product._id);
    productService
      .getAllCartData()
      .then(function (cart) {
        console.log(cart);
        setCart(cart);
        console.log(cart[0].name);
        //props.cartbagde("10");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  React.useEffect(apiPOSTcart, []);
  const [state, setState] = React.useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Company", field: "surname" },
      { title: "Qty.", field: "birthYear", type: "numeric" },
      {
        title: "Price",
        field: "birthCity",
        lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
      },
      {
        title: "Total Price",
        field: "birthCity",
        lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
      },
    ],
    data: [
      {
        name: cart.length,
        surname: "Baran",
        birthYear: 1987,
        birthCity: 63,
      },
      {
        name: "Zerya Betül",
        surname: "Baran",
        birthYear: 2017,
        birthCity: 34,
      },
    ],
  });

  return (
    <MaterialTable
      style={{ marginTop: "100px" }}
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
