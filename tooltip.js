import addGlobalEventListener from "./utils/addGlobalEventListener.js";

// hover over a tooltip
addGlobalEventListener("mouseover", "[data-tooltip]", (e) => {
  const tooltip = createTooltipElement(e.target.dataset.tooltip);
  document.body.append(tooltip);
});

// show tooltip over the top of the element
// when mouse moves off the element remove the tooptip

function createTooltipElement(text) {
  const tooltip = document.createElement("div");
  tooltip.classList.add("tooltip");
  tooltip.innerText = text;
  return tooltip;
}
