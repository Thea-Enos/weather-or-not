import PropTypes from "prop-types";
import React from "react";

const Recommendations = ({
  city,
  hasRain,
  lacksForecast,
  wearJacket,
  wearCoat,
}) => (
  <section>
    <h3>How to prepare {city ? "for " + city : ""}...</h3>
    {lacksForecast ? (
      <p>
        Sorry! We don't have any forecast data for you at the moment :( Please
        enter a valid US zip code.
      </p>
    ) : null}
    {hasRain ? <p>Looks like it's gonna rain! Bring an umbrella.</p> : null}
    {wearJacket ? <p>It's chilly outside. Wear a jacket.</p> : null}
    {wearCoat ? <p>It's cold outside. Wear a coat.</p> : null}
    {!(lacksForecast || hasRain || wearJacket || wearCoat) ? (
      <p>It's a lovely day! Enjoy.</p>
    ) : null}
  </section>
);

Recommendations.propTypes = {
  city: PropTypes.string,
  hasRain: PropTypes.bool.isRequired,
  lacksForecast: PropTypes.bool.isRequired,
  wearCoat: PropTypes.bool.isRequired,
  wearJacket: PropTypes.bool.isRequired,
};

export default Recommendations;
