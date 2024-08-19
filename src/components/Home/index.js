import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import _ from "lodash";
import moment from "moment-timezone";
import React from "react";
import styled from "styled-components";

import Forecast from "../Forecast";
import Location from "../Location";
import NavigationButton from "../NavigationButton";
import TemperatureSlider from "../TemperatureSlider";
import TimeSlider from "../TimeSlider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Title = styled.h1`
  color: #fe6b8b;
`;

const startOfTwoHoursFromNowMoment = moment().add(2, "hour").startOf("hour");
const startOfTwoHoursFromNowMs = startOfTwoHoursFromNowMoment.valueOf();

const startOfTwelveHoursFromNowMoment = moment()
  .add(12, "hours")
  .startOf("hour");
const startOfTwelveHoursFromNowMs = startOfTwelveHoursFromNowMoment.valueOf();

const initialFormState = {
  zipCode: "11209",
  startTimeView: startOfTwoHoursFromNowMs,
  stopTimeView: startOfTwelveHoursFromNowMs,
  startTimeCommitted: startOfTwoHoursFromNowMs,
  stopTimeCommitted: startOfTwelveHoursFromNowMs,
  coatCutoff: 40,
  jacketCutoff: 65,
};

const formReducer = (prevState, { type, payload }) => {
  switch (type) {
    case "updateZip":
      const { newZip } = payload;
      return { ...prevState, zipCode: newZip };
    case "updateViewTimes":
      const { newViewTimeVals } = payload;
      const startTimeView = newViewTimeVals[0];
      const stopTimeView = newViewTimeVals[1];
      return {
        ...prevState,
        startTimeView,
        stopTimeView,
      };
    case "updateCommittedTimes":
      const { newCommittedTimeVals } = payload;
      const startTimeCommitted = newCommittedTimeVals[0];
      const stopTimeCommitted = newCommittedTimeVals[1];
      return {
        ...prevState,
        startTimeCommitted,
        stopTimeCommitted,
      };
    case "updateTemperatures":
      const { newTempteratureVals } = payload;
      const coatCutoff = newTempteratureVals[0];
      const jacketCutoff = newTempteratureVals[1];
      return {
        ...prevState,
        coatCutoff,
        jacketCutoff,
      };
    default:
      return prevState;
  }
};

const Home = () => {
  const classes = useStyles();
  const [formState, dispatchFormState] = React.useReducer(
    formReducer,
    initialFormState,
  );

  const handleZipChange = (e) => {
    const newZip = _.get(e, "target.value", initialFormState.zipCode);
    dispatchFormState({
      type: "updateZip",
      payload: {
        newZip,
      },
    });
  };

  const handleTemperatureChange = (e, newTempteratureVals) => {
    dispatchFormState({
      type: "updateTemperatures",
      payload: {
        newTempteratureVals,
      },
    });
  };

  const handleTimeChange = (e, newViewTimeVals) => {
    dispatchFormState({
      type: "updateViewTimes",
      payload: {
        newViewTimeVals,
      },
    });
  };

  const handleTimeChangeCommitted = (e, newCommittedTimeVals) => {
    dispatchFormState({
      type: "updateCommittedTimes",
      payload: {
        newCommittedTimeVals,
      },
    });
  };

  return (
    <div className="App">
      <Title>Weather or Not</Title>
      <Grid container spacing={3}>
        <Grid item xs={7}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Location
                  zipCode={formState.zipCode}
                  handleZipChange={handleZipChange}
                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TimeSlider
                    handleTimeChange={handleTimeChange}
                    handleTimeChangeCommitted={handleTimeChangeCommitted}
                    startTimeView={formState.startTimeView}
                    stopTimeView={formState.stopTimeView}
                    startTimeCommitted={formState.startTimeCommitted}
                    stopTimeCommitted={formState.stopTimeCommitted}
                  />
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TemperatureSlider
                coatCutoff={formState.coatCutoff}
                handleTemperatureChange={handleTemperatureChange}
                jacketCutoff={formState.jacketCutoff}
              />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Forecast
              zipCode={formState.zipCode}
              startTime={formState.startTimeCommitted}
              stopTime={formState.stopTimeCommitted}
              coatCutoff={formState.coatCutoff}
              jacketCutoff={formState.jacketCutoff}
            />
          </Paper>
        </Grid>
      </Grid>
      <p>
        <NavigationButton route="/about" label="about" />
      </p>
    </div>
  );
};

export default Home;
