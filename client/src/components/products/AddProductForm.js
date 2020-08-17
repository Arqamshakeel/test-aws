import React from "react";
import clsx from "clsx";
import fileUpload from "fuctbase64";
import {
  Grid,
  TextField,
  makeStyles,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from "@material-ui/core";
import productService from "../../services/ProductServices";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  formControl: {
    minWidth: 120,
  },
  TextFieldMarginTop: {
    marginTop: "15px",
  },
}));
const AddProductForm = () => {
  const classes = useStyles();
  const [tags, setTags] = React.useState("");
  const [productName, setProductName] = React.useState("");
  const [company, setCompanyName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [stock, setStock] = React.useState("");
  const [img, setImg] = React.useState({
    file: null,
  });
  const [imgBase64, setImgBase64] = React.useState(null);
  var buffer = null;
  const handleChange = (event) => {
    setTags(event.target.value);
    console.log(event.target.value);
  };

  const handleImage = (event) => {
    fileUpload(event).then((data) => {
      //imgBase64 = data.base64;
      setImgBase64(data.base64);
      //buffer = Buffer.from(imgBase64, "utf-8");
      console.log(buffer + "buffer");
      var lengthInKB = data.size / 1000;
      console.log(data.size / 1000);
      //console.log(imgBase64);
      if (lengthInKB > 600) {
        alert("File size should not be greater than 600KB.");
        setImg({ file: null });
      }
    });

    setImg({
      file: URL.createObjectURL(event.target.files[0]),
    });

    //var buf = new Buffer(img, "utf-8");
  };

  const apiGETproducts = () => {
    productService
      .postProduct({
        name: productName,
        price: price,
        stock: stock,
        tags: tags,
        img: "data:image/jpeg;base64," + imgBase64,
        company: company,
      })
      .then(function (data) {
        //setImgBuffer(data);
        console.log("Posted");
        console.log(imgBase64);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <Grid container style={{ marginTop: "10px" }}>
        <Grid item xs={12} md={4}></Grid>
        <Grid item xs={12} md={4} style={{ textAlign: "center" }}>
          <h1>Add New Product's Information</h1>
        </Grid>
        <Grid item xs={12} md={4}></Grid>
      </Grid>
      <Grid
        container
        style={{ marginTop: "50px" }}
        align="center"
        justify="center"
      >
        <Grid item xs={3} style={{ border: "1px black solid" }}></Grid>
        <Grid item xs={12} md={5} style={{ border: "1px black solid" }}>
          <FormControl>
            <TextField
              label="Product Name"
              variant="outlined"
              style={{ width: 350 }}
              value={productName}
              onChange={(e) => {
                setProductName(e.target.value);
              }}
            />
            <TextField
              className={classes.TextFieldMarginTop}
              label="Stock"
              variant="outlined"
              type="number"
              style={{ width: 350 }}
              value={stock}
              onChange={(e) => {
                setStock(e.target.value);
              }}
            />
            <TextField
              className={classes.TextFieldMarginTop}
              label="Price"
              variant="outlined"
              type="number"
              style={{ width: 350 }}
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <TextField
              className={classes.TextFieldMarginTop}
              label="Company"
              variant="outlined"
              style={{ width: 350 }}
              value={company}
              onChange={(e) => {
                setCompanyName(e.target.value);
              }}
            />
          </FormControl>
          <div>
            <FormControl
              variant="outlined"
              className={clsx(classes.formControl, classes.TextFieldMarginTop)}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Tags
              </InputLabel>
              <Select
                style={{ width: 350 }}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={tags}
                onChange={handleChange}
                label="Area"
              >
                <MenuItem value={"Snacks"}>Snacks</MenuItem>
                <MenuItem value={"Drinks"}>Drinks</MenuItem>
                <MenuItem value={"Chocolates"}>Chocolates</MenuItem>
              </Select>
              <Button
                variant="contained"
                component="label"
                className={classes.TextFieldMarginTop}
              >
                Upload Picture
                <input
                  type="file"
                  style={{ display: "none" }}
                  accept="image/*"
                  onChange={(event) => {
                    handleImage(event);
                    // React.rea readFile(event);
                    //  console.log(event);
                  }}
                />
              </Button>
              <img src={img.file} alt="" width="350px" />
              {console.log(img.file)}
            </FormControl>
          </div>
        </Grid>
        <Grid item xs={3} style={{ border: "1px black solid" }}></Grid>
        <Grid item xs={3} style={{ border: "1px black solid" }}></Grid>
        <Grid item xs={12} md={5} style={{ border: "1px black solid" }}>
          <Button
            style={{ height: "50px", marginTop: "5px" }}
            variant="contained"
            color="primary"
            onClick={apiGETproducts}
          >
            Upload
          </Button>
        </Grid>
        <Grid item xs={3} style={{ border: "1px black solid" }}></Grid>
        {/* for button */}
      </Grid>
    </div>
  );
};

export default AddProductForm;
