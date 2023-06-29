// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDx4q_AR_07NDfzfGwvUyfFG35sRHRFRCM&libraries=visualization">

let map: google.maps.Map, heatmap: google.maps.visualization.HeatmapLayer;

function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    zoom: 13,
    center: { lat: 37.775, lng: -122.434 },
    mapTypeId: "satellite",
  });

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
  });

  document
    .getElementById("toggle-heatmap")!
    .addEventListener("click", toggleHeatmap);
  document
    .getElementById("change-gradient")!
    .addEventListener("click", changeGradient);
  document
    .getElementById("change-opacity")!
    .addEventListener("click", changeOpacity);
  document
    .getElementById("change-radius")!
    .addEventListener("click", changeRadius);
}

function toggleHeatmap(): void {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient(): void {
  const gradient = [
    "rgba(0, 255, 255, 0)",
    "rgba(0, 255, 255, 1)",
    "rgba(0, 191, 255, 1)",
    "rgba(0, 127, 255, 1)",
    "rgba(0, 63, 255, 1)",
    "rgba(0, 0, 255, 1)",
    "rgba(0, 0, 223, 1)",
    "rgba(0, 0, 191, 1)",
    "rgba(0, 0, 159, 1)",
    "rgba(0, 0, 127, 1)",
    "rgba(63, 0, 91, 1)",
    "rgba(127, 0, 63, 1)",
    "rgba(191, 0, 31, 1)",
    "rgba(255, 0, 0, 1)",
  ];

  heatmap.set("gradient", heatmap.get("gradient") ? null : gradient);
}

function changeRadius(): void {
  heatmap.set("radius", heatmap.get("radius") ? null : 20);
}

function changeOpacity(): void {
  heatmap.set("opacity", heatmap.get("opacity") ? null : 0.2);
}

// Heatmap data: 500 Points
function getPoints() {
  return [
  new google.maps.LatLng(40.6344229, 14.5483229),
  new google.maps.LatLng(40.7018381, 14.520688),
  new google.maps.LatLng(40.694777, 14.5362976),
  new google.maps.LatLng(40.697383, 14.535202),
  new google.maps.LatLng(40.6979529, 14.5245174),
  new google.maps.LatLng(40.6970099, 14.5384512),
  new google.maps.LatLng(40.6986315, 14.5258272),
  new google.maps.LatLng(40.7026628, 14.5227225),
  new google.maps.LatLng(40.695002, 14.53186),
  new google.maps.LatLng(40.7028474, 14.5225848),
  new google.maps.LatLng(40.6951326, 14.5297507),
  new google.maps.LatLng(40.694777, 14.5362976),
  new google.maps.LatLng(40.694777, 14.5362976),
  ];
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
