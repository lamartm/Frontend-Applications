import React, { useState, useEffect } from "react";
import * as d3 from "d3";

const Map = () => {
  //state om de topoData op te slaan
  const [topoData, setTopoData] = useState("");
  const topojson = require("topojson");
  const path = d3.geoPath();

  //Width en height handmatig gesteld voor viewbox
  const width = 975;
  const height = 610;

  //d3.zoom gebruikt die reageert op zoom van gebruiker
  const zoom = d3.zoom().on("zoom", function zoomed(event) {
    g.attr("transform", event.transform);
  });

  // Zorg ervoor dat er geen soortgelijke svg element al gerendered is
  d3.select("#map").selectAll("svg").remove();
  const svg = d3
    .select("#map")
    .append("svg")
    .attr("id", "svgMap")
    .attr("viewBox", [0, 0, width, height])
    .call(zoom);

  // Maak een groep aan binnen de svg
  const g = svg.append("g").attr("id", "group");

  // De projection/look van de map bepaald van de map
  const projection = d3.geoMercator().scale(5000).center([5.1, 52]);

  // Pathgenerator die de path/map maakt
  const pathGenerator = path.projection(projection);

  // fetch data op en stuur de data naar de setTopoData state
  useEffect(() => {
    fetch("https://cartomap.github.io/nl/wgs84/provincie_2020.topojson")
      .then((response) => response.json())
      .then((data) => {
        const topo = topojson.feature(data, data?.objects?.provincie_2020);
        const topoData = topo.features;
        setTopoData(topoData);
      });
  }, []);

  // De topojson wordt hier geconverteerd naar geojson en hiervan wordt de NL map punten gemaakt
  g.append("g")
    .attr("fill", "#42428f")
    .attr("stroke", "#2c2c2e")
    .attr("stroke-width", 0.7)
    .selectAll("path")
    .data(topoData)
    .join("path")
    .attr("d", pathGenerator);

  return <div id="map" />;
};

export default Map;
