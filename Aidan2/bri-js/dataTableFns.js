function getTableData(callback) {
  dlist.features.forEach(ele => dataT.push(ele.properties))
  if (callback){
    callback();
  };
}

function fillTable() {
  let sub = dataT.slice(1,10)
  let table = new Tabulator("#table", {
    //height: "205px", // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    data: sub, //assign data to table
    layout: "fitColumns", //fit columns to width of table (optional)
    autoColumns: true
  });
}



/*==== Initial Data Table Content Function ===*/
function initializeDataTable() {
  const converter = new showdown.Converter({ smartIndentationFix: true });
  let motiveFill = document.querySelector("#table");
  let accordionheading = document.querySelector(".accordion-trigger");
  accordionheading.innerHTML = motive.title;
  motiveFill.innerHTML = converter.makeHtml(motive.content);
}




/*
var myTable = document.querySelector('#table').bootstrapTable({
  url: '../../data/DataForMap/newData/newoverallvulnerability.geojson',
  columns: [{
    field: 'SocVulScore',
    title: 'Item ID'
  }, {
    field: 'PhysVulScore',
    title: 'Item Name'
  }, {
    field: 'PhysVulScoreQuantile',
    title: 'Item Price'
  }, {
    field: 'SocVulScore',
    title: 'Item Price'
  }, {
    field: 'SocVulScoreQuantile',
    title: 'Item Price'
  }, {
    field: 'TotalVulScore',
    title: 'Item Price'
  }, {
    field: 'TotalVulScoreQuantile',
    title: 'Item Price'
  }, {
    field: 'Tract',
    title: 'Item Price'
  }, {
    field: 'Tract_N',
    title: 'Item Price'
  }]
})*/
