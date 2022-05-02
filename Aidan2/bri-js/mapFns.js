
/* === OUR DATA ON GITHUB === */
const mapvars = {
  coolingCenters: 'https://raw.githubusercontent.com/bri-ne/MUSA611-Final/main/data/DataForMap/newestData/newestcoolingcenters.geojson',
  emergencyP: "https://raw.githubusercontent.com/bri-ne/MUSA611-Final/main/data/DataForMap/newestData/newestemergencyprep.geojson",
  pools: "https://raw.githubusercontent.com/bri-ne/MUSA611-Final/main/data/DataForMap/newestData/newestpublicpools.geojson",
  parks: "https://raw.githubusercontent.com/bri-ne/MUSA611-Final/main/data/DataForMap/newestData/newestparksandgs.geojson",
  hosp: "https://raw.githubusercontent.com/bri-ne/MUSA611-Final/main/data/DataForMap/newestData/newesthospitals.geojson",
  HVI:"https://raw.githubusercontent.com/bri-ne/MUSA611-Final/main/data/DataForMap/newestData/newestoverallvulnerability.geojson",
  PVI:"https://raw.githubusercontent.com/bri-ne/MUSA611-Final/main/data/DataForMap/newestData/newestphysicalvulnerability.geojson",
  SVI: "https://raw.githubusercontent.com/bri-ne/MUSA611-Final/main/data/DataForMap/newestData/newestsocialvulnerability.geojson"

}

// === realted styles for mapping ==//

const stylevars = {
  HVI: styleHVI,
  PVI: stylePVI,
  SVI: styleSVI
}

const bindingsvars = {
  HVI: onEachFeatureHVI,
  PVI: onEachFeaturePVI,
  SVI: onEachFeatureSVI,
  coolingCenters: onEachFeatureName,
  emergencyP: onEachFeatureName,
  pools: onEachFeatureName,
  parks: onEachFeatureName,
  hosp: onEachFeatureName
}

const pointLayers = ["coolingCenters", "emergencyP", "pools", "parks", "hosp"] //i think this needs to be a dictionary
const polygonLayers = ["HVI", "PVI", "SVI"] // with string name and var



let tableData

// ================================================ Functions =======================================///

// === onEachFeature: Bindings === //



function onEachFeatureName(feature, layer){
  //use feature.properties to construct popup html
  var resourceName = `<h2> Resource: ${feature.properties.Name} </h2>`;
  layer.bindPopup(resourceName);
  };

function onEachFeatureHVI(feature, layer){
//use feature.properties to construct popup html
  var popupContent = '<table>';
  for (var p in feature.properties) {
    popupContent += '<tr><td>' + p + '</td><td>'+ feature.properties[p] + '</td></tr>';
  }
  popupContent += '</table>';
  layer.bindPopup(popupContent);
  //var HVIScore = `<h2> Heat Vulnerability Score: ${feature.properties.rTotalVulScore} </h2>`;
  //layer.bindPopup(HVIScore);
};

function onEachFeatureSVI(feature, layer){
  //use feature.properties to construct popup html
  var popupContent = '<table>';
  for (var p in feature.properties) {
    popupContent += '<tr><td>' + p + '</td><td>'+ feature.properties[p] + '</td></tr>';
  }
  popupContent += '</table>';
  layer.bindPopup(popupContent);
  //var SVIScore = `<h2> Social Vulnerability Score: ${feature.properties.rSocVulScore} </h2>`;
  //layer.bindPopup(SVIScore);
  };


function onEachFeaturePVI(feature, layer){
  //use feature.properties to construct popup html
  var popupContent = '<table>';
  for (var p in feature.properties) {
    popupContent += '<tr><td>' + p + '</td><td>'+ feature.properties[p] + '</td></tr>';
  }
  popupContent += '</table>';
  layer.bindPopup(popupContent);
  //var PVIScore = `<h2> Physical Vulnerability Score: ${feature.properties.rPhysVulScore} </h2>`;
  //layer.bindPopup(PVIScore);
  };

// === Map color Function === //
function getColorHVI(d) {
  return d > 4 ? '#A10000' :
    d > 3  ? '#b74015' :
    d > 2   ? '#c56e23' :
    d > 1   ? '#d49e33' :
    d > 0   ? '#FFE74C' :
                '#fff9db';
  }

function getColorSVI(d) {
  return d > 4 ? '#003396' :
    d > 3  ? '#1750AC' :
    d > 2   ? '#3373C4' :
    d > 1   ? '#5494DA' :
    d > 0   ? '#86CEFA' :
                '#fff9db';
  }

function getColorPVI(d) {
  return d > 4 ? '#DC1C13' :
    d > 3  ? '#EA4C46' :
    d > 2   ? '#F07470' :
    d > 1   ? '#F1959B' :
    d > 0   ? '#F6BDC0' :
                '#fff9db';
  }





// === Style  === //
function styleHVI(feature) {
  return {
      fillColor: getColorHVI(feature.properties.rTotalVulScore),
      weight: 0.5,
      opacity: 0.7,
      color: "gray",
      fillOpacity: 0.5,
      colorOpacity:0.1,
  };
};

function styleSVI(feature) {
  return {
      fillColor: getColorSVI(feature.properties.rSocVulScore),
      weight: 0.5,
      opacity: 0.7,
      color: "gray",
      fillOpacity: 0.5,
      colorOpacity:0.1,
  };
};


function stylePVI(feature) {
  return {
      fillColor: getColorPVI(feature.properties.rPhysVulScore),
      weight: 0.5,
      opacity: 0.7,
      color: "gray",
      fillOpacity: 0.5,
      colorOpacity:0.1,
  };
};

// === Updating the Map === //

function updateMap(url, styleType, bindings, callback) {
  layerGroup.clearLayers();

  fetch(url)
  .then(resp => resp.json())
  .then(data => {
    dlist = data
    L.geoJSON(data, {style: styleType,
      onEachFeature: bindings
    }).addTo(layerGroup);
    if (callback){
      callback(fillTable);
    };
    console.log(dataT)
    });
};





function updateMappoint(url) {
  layerGroup.clearLayers();
  var markersClust = new L.MarkerClusterGroup();
  fetch(url)
  .then(resp => resp.json())
  .then(data => {

    L.geoJSON(data, {
      onEachFeature: function(feature) {
      var marker = L.marker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]]).bindPopup(`<h2> Resource: ${feature.properties.Name} </h2>`);
      markersClust.addLayer(marker).bindTooltip(`<h2> Resource: ${feature.properties.Name} </h2>`);}

    });
    markersClust.addTo(layerGroup);
    });
};


// === intialize map === //
function initializeMap(callback) {
  fetch(mapvars.HVI)
  .then(resp => resp.json())
  .then(data => {
    L.geoJSON(data, {style: styleHVI,
      onEachFeature: onEachFeatureHVI
    }).addTo(layerGroup);
  if (callback){
    callback();
  };
});
sidebarContentController("story-slide");
};



// === Determine & Update Map From Check boxes == //
function determineMap() {
  layerGroup.clearLayers();
  let names = []
  checkies.forEach(c => {
    if(c.checked === true) {
      let n = c.id
      names.push(n)
    }
  });
  console.log(names)
  names.forEach(name => {
    if (pointLayers.includes(name)) {
      updateMappoint(mapvars[name]);
    }
    if (polygonLayers.includes(name)) {
      updateMap(mapvars[name], stylevars[name], bindingsvars[name])
    }
  });
}


function anyChecked() {

  let trues = [];

  let l1 = checkies[0];
  let l2 = checkies[1];
  let l3 = checkies[2];
  let l4 = checkies[3];
  let l5 = checkies[4];
  let l6 = checkies[5];
  let l7 = checkies[6];
  let l8 = checkies[7];
  let l9 = checkies[8];

  let cs = [l1,l2,l3,l4,l5,l6,l7,l8,l9]
  if (cs[3].checked){
    console.log("includes resources")
    check(l5);
    check(l6);
    check(l7);
    check(l8);
    check(l9);
  };

  cs.forEach(c=> {
    if(c.checked === true) {
      trues.push("y")
    };
  })
  return trues
};

function onCheck() {

  console.log("checkbox checked!")
  let trues = anyChecked();
  console.log(trues)
  if (trues.length > 0){
    determineMap()
  } else {
    layerGroup.clearLayers();
  };

};

function resourceCheck() {
  if (!checkies[3].checked){
    console.log("resources unchecked")
    uncheck(checkies[4]);
    uncheck(checkies[5]);
    uncheck(checkies[6]);
    uncheck(checkies[7]);
    uncheck(checkies[8]);
    layerGroup.clearLayers();
  };
  onCheck();

}


function HVICheck() {
  if (checkies[0].checked){
    uncheck(checkies[1]);
    uncheck(checkies[2]);
    disable(checkies[1]);
    disable(checkies[2]);
    layerGroup.clearLayers();
  };
  onCheck();

}

function SVICheck() {
  if (checkies[1].checked){
    uncheck(checkies[0]);
    uncheck(checkies[2]);
    disable(checkies[0]);
    disable(checkies[2]);
    layerGroup.clearLayers();
  };
  onCheck();

}

function PVICheck() {
  if (checkies[2].checked){
    uncheck(checkies[0]);
    uncheck(checkies[1]);
    disable(checkies[1]);
    disable(checkies[0]);
    layerGroup.clearLayers();
  };
  onCheck();

}







// these might be useful IDK

function check(box) {
  box.checked = true;
}

function uncheck(box) {
  box.checked = false;
}

function disable(box) {
  box.enabled = false;
}
//const pointLayers = [coolingCenters, emergencyP, pools, parks]
//const polygonLayers = [HVI, PVI, SVI]



//tableData.features.forEach(ele => dataT.push(ele.properties))




//const urlList = [coolingCenters, emergencyP, pools]

//urlList.forEach(element => updateMap(element))
