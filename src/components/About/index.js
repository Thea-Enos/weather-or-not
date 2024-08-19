import React from "react";
import styled from "styled-components";

import NavigationButton from "../NavigationButton";

const Title = styled.h1`
  color: #ff8e53;
`;

const About = () => (
  <div className="App">
    <Title>About</Title>
    <p>Hi, I'm Thea :)</p>
    <p>
      I believe many of life's problems are solved by dressing for the weather!
    </p>
    <p>
      This site is powered by{" "}
      <a
        className={"prettyLink"}
        href={"https://openweathermap.org/"}
        target={"_blank"}
        rel={"noopenner noreferrer"}
      >
        OpenWeatherMap
      </a>
      . Specifically, it leverages the{" "}
      <a
        className={"prettyLink"}
        href={"https://openweathermap.org/forecast5#zip5"}
        target={"_blank"}
        rel={"noopenner noreferrer"}
      >
        5 day weather forecast API request by zip code
      </a>
      .
    </p>
    <NavigationButton route="/" label="home" />
  </div>
);

export default About;
