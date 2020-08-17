import React from "react";
import { Grid } from "@material-ui/core";
import RecipeReviewCard from "../CustomCard";
import { useMediaQuery } from "react-responsive";
import CustomCarousel from "../Carousel/Carousel";
import productService from "../../services/ProductServices";
import Skeleton from "@material-ui/lab/Skeleton";
const Home = (props) => {
  const [imgBuffer, setImgBuffer] = React.useState("");
  const [products, setProducts] = React.useState([]);
  let skel = 10;
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
  React.useEffect(apiGETproducts, []);
  return (
    <div>
      <CustomCarousel></CustomCarousel>

      <Grid container spacing={1} align="center" justify="center">
        {products.length != 0
          ? products.map((product, index) => {
              return (
                <RecipeReviewCard
                  badge={props.badge}
                  setbadge={props.setbadge}
                  key={index}
                  image={product.image.data}
                  stock={product.stock}
                  product={product}
                  setProducts={setProducts}
                ></RecipeReviewCard>
              );
            })
          : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((val, index) => {
              return (
                <div key={index} style={{ margin: "20px" }}>
                  <Skeleton variant="text" />
                  <Skeleton variant="circle" width={40} height={40} />
                  <Skeleton variant="rect" width={345} height={178} />
                </div>
              );
            })}
      </Grid>
    </div>
  );
};
export default Home;
