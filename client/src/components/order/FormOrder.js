import React from "react";
import clsx from "clsx";
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
import Cart from "../cart/Cart";
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
const FormOrder = () => {
  const classes = useStyles();
  const [area, setArea] = React.useState("");

  const handleChange = (event) => {
    setArea(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div>
      <Grid container style={{ marginTop: "10px" }}>
        <Grid item xs={12} md={4}></Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{ textAlign: "center", marginTop: "70px" }}
        >
          <h1>Confirm Address</h1>
        </Grid>
        <Grid item xs={12} md={4}></Grid>
      </Grid>
      <Grid
        container
        style={{ marginTop: "50px" }}
        align="center"
        justify="center"
      >
        <Grid item xs={1} style={{ border: "1px black solid" }}></Grid>
        <Grid item xs={12} md={12} style={{ border: "1px black solid" }}>
          <div>
            <TextField
              label="Full Name"
              variant="outlined"
              style={{ width: 350 }}
            />
          </div>
          <div>
            <TextField
              className={classes.TextFieldMarginTop}
              label="Phone Number"
              variant="outlined"
              type="number"
              style={{ width: 350 }}
            />
          </div>
          <TextField
            className={classes.TextFieldMarginTop}
            label="Phone Number"
            variant="outlined"
            type="number"
            style={{ width: 350 }}
          />
          <div>
            <FormControl
              variant="outlined"
              className={clsx(classes.formControl, classes.TextFieldMarginTop)}
            >
              <InputLabel id="demo-simple-select-outlined-label">
                Area
              </InputLabel>
              <Select
                style={{ width: 350 }}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={area}
                onChange={handleChange}
                label="Area"
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value={"wapdatown"}>Wapda Town</MenuItem>
                <MenuItem value={"citi"}>Citi Housing Society</MenuItem>
                <MenuItem value={"canal"}>Canal View</MenuItem>
              </Select>
            </FormControl>
          </div>
          <TextField
            style={{ width: 350 }}
            className={classes.TextFieldMarginTop}
            id="outlined-multiline-static"
            label="Street#"
            multiline
            rows={4}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={5} style={{ border: "1px black solid" }}></Grid>
        <Grid container>
          <Grid item xs={12} md={4}></Grid>
          <Grid
            item
            xs={12}
            md={4}
            style={{ textAlign: "center", marginTop: "70px" }}
          >
            <h1>Cart</h1>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}></Grid>
        <Cart />
        {/* <Grid item xs={1} style={{ border: "1px black solid" }}></Grid> */}
        {/* for button */}
        <Grid item xs={1}></Grid>
        <Grid item xs={12} md={5}></Grid>
        <Grid item xs={12} md={5}>
          <Button
            style={{
              float: "right",
              height: "50px",
              marginTop: "10px",
              marginRight: "5px",
            }}
            variant="contained"
            color="primary"
          >
            Confirm Order
          </Button>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
};

export default FormOrder;
