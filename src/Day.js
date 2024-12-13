import React from "react";
import { formatDay } from "./formatDay";
import { getWeatherIcon } from "./getWeatherIcon";

export class Day extends React.Component {
  render() {
    const { date, max, min, code, isToday } = this.props;
    return (
      <li className={isToday ? "day is-today" : "day"}>
        <img
          src={getWeatherIcon(code)}
          alt={getWeatherIcon(code)}
          className="weather-icon"
        />
        <p>{isToday ? "Today" : formatDay(date)}</p>
        <p>
          {Math.floor(min)}&deg; &mdash; <strong>{Math.ceil(max)}&deg;</strong>
        </p>
      </li>
    );
  }
}
