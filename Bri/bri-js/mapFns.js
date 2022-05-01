
/* === OUR DATA ON GITHUB === */
const mapvars = {
  coolingCenters: 'https://raw.githubusercontent.com/bri-ne/MUSA611-Final/main/data/DataForMap/newData/newcoolingcenters.geojson',
  emergencyP: "https://raw.githubusercontent.com/bri-ne/MUSA611-Final/main/data/DataForMap/newData/newemergencyprep.geojson",
  pools: "https://raw.githubusercontent.com/bri-ne/MUSA611-Final/main/data/DataForMap/newData/newpublicpools.geojson",
  parks: "https://raw.githubusercontent.com/bri-ne/MUSA611-Final/main/data/DataForMap/newData/newparksandgs.geojson",
  hosp: "https://raw.githubusercontent.com/bri-ne/MUSA611-Final/main/data/DataForMap/newData/newhospitals.geojson",
  HVI:"https://raw.githubusercontent.com/bri-ne/MUSA611-Final/main/data/DataForMap/newData/newoverallvulnerability.geojson",
  PVI:"https://raw.githubusercontent.com/bri-ne/MUSA611-Final/main/data/DataForMap/newData/newerphysicalvulnerability.geojson",
  SVI: "https://raw.githubusercontent.com/bri-ne/MUSA611-Final/main/data/DataForMap/newData/newsocialvulnerability.geojson"

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
  var HVIScore = `<h2> Heat Vulnerability Score: ${feature.properties.TotalVulScore} </h2>`;
  layer.bindPopup(HVIScore);
};  

function onEachFeatureSVI(feature, layer){
  //use feature.properties to construct popup html
    var SVIScore = `<h2> Social Vulnerability Score: ${feature.properties.SocVulScoreQuantile} </h2>`;
    layer.bindPopup(SVIScore);
  };  


function onEachFeaturePVI(feature, layer){
  //use feature.properties to construct popup html
    var PVIScore = `<h2> Physical Vulnerability Score: ${feature.properties.PhysVulScoreQuantile} </h2>`;
    layer.bindPopup(PVIScore);
  }; 

// === Map color Function === //
function getColor(d) {
  return d > 4 ? '#A10000' :
    d > 3  ? '#b74015' :
    d > 2   ? '#c56e23' :
    d > 1   ? '#d49e33' :
    d > 0   ? '#FFE74C' :
                '#fff9db';
  }

// === Style  === //
function styleHVI(feature) {
  return {
      fillColor: getColor(feature.properties.TotalVulScore),
      weight: 0.5,
      opacity: 0.7,
      color: "gray", 
      fillOpacity: 0.5,
      colorOpacity:0.1,
  };
};

function styleSVI(feature) {
  return {
      fillColor: getColor(feature.properties.SocVulScore),
      weight: 0.5,
      opacity: 0.7,
      color: "gray", 
      fillOpacity: 0.5,
      colorOpacity:0.1,
  };
};


function stylePVI(feature) {
  return {
      fillColor: getColor(feature.properties.PhysVulScore),
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
  fetch(mapvars.SVI)
  .then(resp => resp.json())
  .then(data => {
    L.geoJSON(data, {style: styleSVI,  
      onEachFeature: onEachFeatureSVI
    }).addTo(layerGroup);
  if (callback){
    callback();
  };
});
sidebarContentController("filter-slide");
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
    console.log("includes resoruces")
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
    console.log("resoruces unchecked")
    uncheck(checkies[4]);
    uncheck(checkies[5]);
    uncheck(checkies[6]);
    uncheck(checkies[7]);
    uncheck(checkies[8]);
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
//const pointLayers = [coolingCenters, emergencyP, pools, parks]
//const polygonLayers = [HVI, PVI, SVI]



//tableData.features.forEach(ele => dataT.push(ele.properties))




//const urlList = [coolingCenters, emergencyP, pools]

//urlList.forEach(element => updateMap(element))


