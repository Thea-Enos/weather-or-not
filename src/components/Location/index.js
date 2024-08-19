import { Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

import "../../styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    width: 125,
  },
}));

const Location = ({ zipCode, handleZipChange }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <h3>Where are you going today?</h3>
        </Grid>
        <Grid item xs={6}>
          <br />
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="zip-input"
              label="US Zip Code"
              variant="outlined"
              value={zipCode}
              onChange={handleZipChange}
              type="string"
              inputProps={{
                maxLength: "5",
              }}
            />
          </form>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Location.propTypes = {
  handleZipChange: PropTypes.func.isRequired,
  zipCode: PropTypes.string.isRequired,
};

export default Location;
