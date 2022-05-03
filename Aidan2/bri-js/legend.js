// === Legend code ===//
/* Legend Function */


function getLegend (name) {
  if (name === "HVI"){
    LegendTitle = "Overall Heat Vulnerability";
    HVIlegend.addTo(map); 
  };
  if (name === "SVI"){
    LegendTitle = "Social Heat Vulnerability";
    SVIlegend.addTo(map);   
  };
  if (name === "PVI"){
    LegendTitle = "Physical Heat Vulnerability";
    PVIlegend.addTo(map);
  }
  
}  

// HVI LEGEND ///
var HVIlegend = L.control({position: 'bottomright'});
    HVIlegend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info-legend');
    labels = [`<div class="legendTitle">${LegendTitle}</div><div class="legendBody">`],
    catlables = ['Most Vulnerable','Very Vulnerable','Above-Average Vulnerability','City Average Vulnerability','Some Vulnerability','No Vulnerability'];
    categories = [5, 4, 3, 2, 1, 0]
    for (var i = 0; i < categories.length; i++) {

            div.innerHTML += 
            labels.push(
              //'<div style=" padding-bottom:0.5rem;padding-left: 25%; display: flex; flex-direction:row;">'+
              '<div>'+
              '<i class="circle" style=" color: white;background-color:' + 
              getColorHVI(categories[i]) + '"></i> ' +
              '<i class="legendtext">'+ (catlables[i] ? catlables[i] : '') + '</i>'+
            '</div>'
            );
        }
        labels.push('</div>')    
        div.innerHTML = labels.join("");
    return div;
    };

// SVI LEGEND ///
var SVIlegend = L.control({position: 'bottomright'});
    SVIlegend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info-legend');
    labels = [`<div class="legendTitle">${LegendTitle}</div><div class="legendBody">`],
    catlables = ['Most Vulnerable','Above-Average Vulnerability','City Average Vulnerability','Some Vulnerability','No Vulnerability'];
    categories = [5, 4, 3, 2, 1, 0]
    for (var i = 0; i < categories.length; i++) {

            div.innerHTML += 
            labels.push(
              //'<div style=" padding-bottom:0.5rem;padding-left: 25%; display: flex; flex-direction:row;">'+
              '<div>'+
              '<i class="circle" style=" color: white;background-color:' + 
              getColorSVI(categories[i]) + '"></i> ' +
              '<i class="legendtext">'+ (catlables[i] ? catlables[i] : '') + '</i>'+
            '</div>'
            );
        }
        labels.push('</div>')    
        div.innerHTML = labels.join("");
    return div;
    };    

// PVI LEGEND ///
var PVIlegend = L.control({position: 'bottomright'});
    PVIlegend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info-legend');
    labels = [`<div class="legendTitle">${LegendTitle}</div><div class="legendBody">`],
    catlables = ['Most Vulnerable','Above-Average Vulnerability','City Average Vulnerability','Some Vulnerability','No Vulnerability'];
    categories = [5, 4, 3, 2, 1, 0]
    for (var i = 0; i < categories.length; i++) {

            div.innerHTML += 
            labels.push(
              //'<div style=" padding-bottom:0.5rem;padding-left: 25%; display: flex; flex-direction:row;">'+
              '<div>'+
              '<i class="circle" style=" color: white;background-color:' + 
              getColorPVI(categories[i]) + '"></i> ' +
              '<i class="legendtext">'+ (catlables[i] ? catlables[i] : '') + '</i>'+
            '</div>'
            );
        }
        labels.push('</div>')    
        div.innerHTML = labels.join("");
    return div;
    };        