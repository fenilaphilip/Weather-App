export default function Temperature(properties) {
  if (properties.unit === "imperial") {
    return <span className="wtmeasure">{properties.value}°F</span>;
  } else {
    return <span className="wtmeasure">{properties.value}°C</span>;
  }
}
