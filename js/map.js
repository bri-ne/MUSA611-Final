let map = L.map('map', {zoomControl: false}).setView([34.0736417742618, -118.23598649280784], 11);
const cartopositron = 'https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png'
L.tileLayer(cartopositron, {
  
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.',
}).addTo(map);
let layerGroup = L.layerGroup().addTo(map)

L.Control.geocoder().addTo(map);

L.control.zoom({
  position: 'topright'
}).addTo(map);

/* === OUR DATA ON GITHUB === */
const coolingCenters = 'https://raw.githubusercontent.com/bri-ne/MUSA611-Final/main/data/DataForMap/newData/newcoolingcenters.geojson'
const emergencyP = "https://raw.githubusercontent.com/bri-ne/MUSA611-Final/main/data/DataForMap/newData/newemergencyprep.geojson"
const pools = "https://raw.githubusercontent.com/bri-ne/MUSA611-Final/main/data/DataForMap/newData/newpublicpools.geojson"
const parks = "https://raw.githubusercontent.com/bri-ne/MUSA611-Final/main/data/DataForMap/newData/newparksandgs.geojson"
const HVI = "https://raw.githubusercontent.com/bri-ne/MUSA611-Final/main/data/DataForMap/newData/newoverallvulnerability.geojson"

function onEachFeatureName(feature, layer){
  //use feature.properties to construct popup html
  var resourceName = `<h2> Resource: ${feature.properties.Name} </h2>`;
  layer.bindPopup(resourceName);
  };
function onEachFeatureHVI(feature, layer){
//use feature.properties to construct popup html
  var HVIScore = `<h2> Heat Vulnerability Score: ${feature.properties.TotalVulScore} </h2>`;
  layer.bindPopup(HVIScore);
};  

/* Map color Functions*/
function getColor(d) {
  return d > 4 ? '#f0f921' :


    d > 3  ? '#f2844b' :

    d > 2   ? '#cc4778' :

    d > 1   ? '#8f0da4' :

    d > 0   ? '#41049d' :
                '#0d0887';
  }


function styleHVI(feature) {
  return {
      fillColor: getColor(feature.properties.TotalVulScore),
      weight: 0.5,
      opacity: 0.7,
      color: 'white',
      fillOpacity: 0.5
  };
}  

function updateMap(url) {
  /*layerGroup.clearLayers();*/
  var markersClust = new L.MarkerClusterGroup();
  fetch(url)
  .then(resp => resp.json())
  .then(data => {
    L.geoJSON(data, {style: styleHVI,  
      onEachFeature: onEachFeatureHVI
    }).addTo(layerGroup)
    });
}

function updateMappoint(url) {
  /*layerGroup.clearLayers();*/
  
  fetch(url)
  .then(resp => resp.json())
  .then(data => {
    
    L.geoJSON(data, {
      onEachFeature: function(feature) {
      var marker = L.marker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]]).bindPopup(`<h2> Resource: ${feature.properties.Name} </h2>`);
      markersClust.addLayer(marker).bindTooltip(`<h2> Resource: ${feature.properties.Name} </h2>`);}
      
    });
    
    });
      
}
var markersClust = new L.MarkerClusterGroup();
markersClust.addTo(map);

updateMap(HVI)

//updateMap(coolingCenters);

const urlList = [coolingCenters, emergencyP, pools]

urlList.forEach(element => updateMappoint(element))


