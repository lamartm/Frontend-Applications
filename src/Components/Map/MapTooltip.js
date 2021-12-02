import * as d3 from "d3";

export function mouseMove(event, d) {
  // Tooltip  word op mouse hover visible, positie ervan is bepaald van de muis coordinaten relatief van de window, de message zelf is relatief
  // van de geselecteerde variabel
  const selectOption = document.getElementById("select")

  d3.select(".tooltip")
    .classed("hidden", false)
    .attr(
      "style",
      "left:" + (event.clientX + 20) + "px; top:" + (event.clientY - 20) + "px"
    )
    .html(`${d.gebied + "<br />" + "Aantal:" + " " + d[selectOption.value]}`);
}

export function mouseOut(d) {
  d3.select(".tooltip").classed("hidden", true);
}
