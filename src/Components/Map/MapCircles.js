import { useEffect } from "react";
import { rdwApiCall } from "../../rdwApiCall.js";
import { mouseMove, mouseOut } from "./MapTooltip";
import * as d3 from "d3";

const MapCircles = () => {
  const circleData = rdwApiCall()

  //Radius scale van de cirkels in de map hier gezet op scaleSqrt
  const radiusScale = d3.scaleSqrt();

  // De projection/look van de map bepaald van de map
  const projection = d3.geoMercator().scale(5000).center([5.1, 52]);

  //Domain en range van de scale hier bepaald
  radiusScale.domain([0, 400]).range([0, 10]);

  // Effect call om de circles te updaten wanneer de selected opties verandert
  useEffect(() => {
    const selectOption = document.getElementById("select");

    makeCircles("parkeer");

    selectOption.addEventListener("change", (e) => {
      makeCircles(selectOption.value);
    });

    // Functie die cirkels maakt op de map gebasseerd op de gekozen optie (selectedVariabel) en de gekozen groep/map waarop de cirkels
    // gemaakt moeten worden (selectedGroup)
    function makeCircles(selectedVariabel) {
      const Circles = d3.select("#group").selectAll("circle").data(circleData);
      d3.select("#map")
        // Update call die elke keer gaat wanneer er een nieuwe variabel gekozen wordt, haal de vorige cirkels weg en zet de radius op 0
        .selectAll("circle")
        .transition()
        .duration(1000)
        .attr("r", function (d) {
          return radiusScale(d[selectedVariabel]);
        });
      Circles.enter()
        .append("circle")
        .attr("cx", function (d) {
          return projection([d.longitude, d.latitude])[0];
        })
        .attr("cy", function (d) {
          return projection([d.longitude, d.latitude])[1];
        })
        .attr("r", function (d) {
          return radiusScale(d[selectedVariabel]);
        })
        .style("fill", "69b3a2")
        .attr("stroke", "#69b3a2")
        .attr("stroke-width", 0.7)
        .attr("fill-opacity", 0.6)
        .attr("cursor", "pointer")
        // mouse events voor tooltip en styling
        .on("mousemove", mouseMove)
        .on("mouseout", mouseOut);
    }
  }, [circleData]);
  //     }
};

export default MapCircles;
