import "./App.css";
import * as d3 from "d3";
import SelectType from "./SelectType";
import MapCircles from "./Map/MapCircles";
import Map from "./Map/Map";

function App() {
  MapCircles();

  d3.selectAll("#map").append("div").attr("class", "hidden tooltip");

  return (
    <>
      <SelectType />
      <h1>Verschillende aspecten van carpool locaties</h1>
      <Map/>
    </>
  );
}

export default App;
