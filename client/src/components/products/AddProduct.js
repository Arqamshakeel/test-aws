import React from "react";
import { Fab, makeStyles, Grid } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import clsx from "clsx";
import CustomCard from "../CustomCard";
import productService from "../../services/ProductServices";
import RecipeReviewCard from "../CustomCard";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(5),
    },
  },
  position: {
    position: "fixed",
    bottom: "0px",
    right: "0px",
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
const products = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const AddProduct = (props) => {
  const [products, setProducts] = React.useState([]);
  const apiGETproducts = () => {
    productService
      .getAllProducts()
      .then(function (data) {
        //   console.log(data[0].image.data);
        setProducts(data);
        //props.setbadge("12");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const classes = useStyles();
  React.useEffect(apiGETproducts, []);
  console.log(props);

  return (
    <div>
      <Grid container spacing={1} align="center" justify="center">
        {products.map((product, index) => {
          return (
            <RecipeReviewCard
              setbadge={props.setbadge}
              key={index}
              image={product.image.data}
              stock={product.stock}
              product={product}
            ></RecipeReviewCard>
          );
        })}
      </Grid>

      <div className={clsx(classes.root, classes.position)}>
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => {
            props.history.push("/addproductform");
          }}
        >
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
};

export default AddProduct;
