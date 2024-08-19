import { Grid, Slider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 262,
  },
}));

const formatValueLabel = (value) => {
  return `${value}°F`;
};

const TemperatureSlider = ({
  coatCutoff,
  handleTemperatureChange,
  jacketCutoff,
}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h3>What are your temperature tolerances?</h3>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.root}>
            <Slider
              aria-labelledby="vertical-slider"
              className={classes.root}
              getAriaValueText={formatValueLabel}
              valueLabelFormat={formatValueLabel}
              onChange={handleTemperatureChange}
              orientation="vertical"
              value={[coatCutoff, jacketCutoff]}
              valueLabelDisplay="on"
              min={20}
              max={80}
            />
          </div>
        </Grid>
        <Grid item xs={8}>
          <p>I like to wear a jacket when it's below {jacketCutoff}°F</p>
          <p>I like to wear a coat when it's below {coatCutoff}°F</p>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

TemperatureSlider.propTypes = {
  coatCutoff: PropTypes.number.isRequired,
  handleTemperatureChange: PropTypes.func.isRequired,
  jacketCutoff: PropTypes.number.isRequired,
};

export default TemperatureSlider;
