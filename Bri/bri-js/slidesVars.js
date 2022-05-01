




//==== Function_outlines Vars ===//

const sidebar = document.querySelector(".side-bar");
const slideTitleDiv = document.querySelector('.slide-title');
const slideContentDiv = document.querySelector('.slide-content');

    //for map change and data table change
let checkboxContainer 
let checkies 
let allButResources
/*=== Slides ===*/
const storySlide = {
  title: '<h1> STORY SLIDE TITLE </h1>',
  slide: 'storySlide',
  content: '<p><b>More Test Below:</b><ul><li>one is a test</li><li>two is a test, too</li><li> three is also a test </li></ul></p>',
};

//<input type="checkbox" id="Resources"><h4>Resources</h4>
const filterslide = {
  title: '<h1> Map Layers </h1>',
  slide: 'filterSlide',
  content: `<div class="checkies">
  <h2><input type="checkbox" id="HVI" class="largerCheck"> &nbspOverall Heat Vulnerability Index</h2>
  <ul>
  <li><input type="checkbox" id="SVI" class="mediumCheck"> &nbspSocial Heat Vulnerability Score</li>
  <li><input type="checkbox" id="PVI" class="mediumCheck"> &nbspPhysical Heat Vulnerability Score</li>
  </ul>
  <h2><input type="checkbox" id="Resources" class="largerCheck"> &nbspAll Resources</h2>
  <ul>
    <li><input type="checkbox" id="coolingCenters" class="mediumCheck"> &nbspCooling Centers</li>
    <li><input type="checkbox" id="pools" class="mediumCheck"> &nbspPublic Pools</li>
    <li><input type="checkbox" id="emergencyP" class="mediumCheck"> &nbspEmergency Preparedness Centers</li>
    <li><input type="checkbox" id="parks" class="mediumCheck"> &nbspParks and Greenspaces</li>
    <li><input type="checkbox" id="hosp" class="mediumCheck"> &nbspHospitals</li>
  </ul>
 </div>`,
};

const slides = [storySlide, filterslide]

const motive = {
  title: 'Why Are We Doing This?',
  slide: 'motive',
  content: `<p>We\'re doing this not only because it is cool, but also because it is very sick of us to do. 
  okay, I think. </p>`
}

//const motivationText = [motive]

