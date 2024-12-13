import sunLightIcon from "./assets/sun-light.svg";
import cloudSunnyIcon from "./assets/cloud-sunny.svg";
import cloudIcon from "./assets/cloud.svg";
import fogIcon from "./assets/fog.svg";
import rainIcon from "./assets/rain.svg";
import heavyRainIcon from "./assets/heavy-rain.svg";
import snowIcon from "./assets/snow.svg";
import thunderStormIcon from "./assets/thunderstorm.svg";

export function getWeatherIcon(wmoCode) {
  const icons = new Map([
    [[0], sunLightIcon],
    [[1, 2], cloudSunnyIcon],
    [[3], cloudIcon],
    [[45, 48], fogIcon],
    [[51, 56, 61, 66, 80], rainIcon],
    [[53, 55, 63, 65, 57, 67, 81, 82], heavyRainIcon],
    [[71, 73, 75, 77, 85, 86], snowIcon],
    [[95, 96, 99], thunderStormIcon],
  ]);
  const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
  if (!arr) return "NOT FOUND";
  return icons.get(arr);
}
