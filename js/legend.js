// === Legend code ===//
/* Legend Function */


function getLegendTitle () {
  let titlehere = LegendTitle;
  return titlehere
}  
var legend = L.control({position: 'bottomleft'});
    legend.onAdd = function (map) {

    
    var div = L.DomUtil.create('div', 'info-legend');
    labels = ['<h4 style=" color:#FFFFFF; margin-bottom:10px; margin-top:0; padding: 1rem; border: 0.2rem solid #1F1F1F; background: #1F1F1F;">Percent of Renters<br>Spending 50% or More of<br>Their Income on Rent </h4>'],
    catlables = ['100%','90 - 99%','80 - 89%','70 - 79%','60 - 69%', '50 - 59%', '40 - 49%', '30 - 39%', '20 - 29%', '10 - 19%', '1 - 9%', '0'];
    categories = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 1, 0]
    for (var i = 0; i < categories.length; i++) {

            div.innerHTML += 
            labels.push(
              '<div style=" padding-bottom:0.5rem;padding-left: 25%; display: flex; flex-direction:row;">'+
              '<i class="circle" style=" color: white;background-color:' + getColor(categories[i]) + '"></i> ' +
              '<i style="padding-left:0.5rem; color: #1F1F1F; font-weight: 700;">'+
            (catlables[i] ? catlables[i] : '') +
            '</i>'+
            '</div>'
            );

        }
        div.innerHTML = labels.join('<br>');
    return div;
    };