import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
} from "@material-ui/core";

export default function AddressForm({
  area,
  setArea,
  setFname,
  fname,
  setLname,
  lname,
  setAddress1,
  address1,
  setAddress2,
  address2,
}) {
  //const [area, setArea] = React.useState("");
  const handleBtn = () => {
    console.log("Handleeeeeeee");
  };

  const handleChange = (event) => {
    setArea(event.target.value);
    console.log(event.target.value);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            value={fname}
            onChange={(e) => {
              setFname(e.target.value);
            }}
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            value={lname}
            onChange={(e) => {
              setLname(e.target.value);
            }}
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            value={address1}
            onChange={(e) => {
              setAddress1(e.target.value);
            }}
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Phone"
            fullWidth
            value={address2}
            onChange={(e) => {
              setAddress2(e.target.value);
            }}
            autoComplete="shipping cc-number"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">Area</InputLabel>
            <Select
              fullWidth
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={area}
              onChange={handleChange}
              label="Area"
            >
              <MenuItem value={"wapdatown"}>Wapda Town</MenuItem>
              <MenuItem value={"citi"}>Citi Housing Society</MenuItem>
              <MenuItem value={"canal"}>Canal View</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            defaultValue="Gujranwala"
            disabled
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
