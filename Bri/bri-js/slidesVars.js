




//==== Function_outlines Vars ===//

const sidebar = document.querySelector(".side-bar");
const slideTitleDiv = document.querySelector('.slide-title');
const slideContentDiv = document.querySelector('.slide-content');

    //for map change and data table change
let checkboxContainer 
let checkies 

/*=== Slides ===*/
const storySlide = {
  title: '<h1> STORY SLIDE TITLE </h1>',
  slide: 'storySlide',
  content: '<p><b>More Test Below:</b><ul><li>one is a test</li><li>two is a test, too</li><li> three is also a test </li></ul></p>',
};

//<input type="checkbox" id="Resources"><h4>Resources</h4>
const filterslide = {
  title: '<h1> FILTER AND LAYERS SLIDE </h1>',
  slide: 'filterSlide',
  content: `<div class="checkies"><p><b>fitlers  Below:</b>
  <h4><input type="checkbox" id="HVI">Overall Heat Vulnerability Index</h4>
  <h5><input type="checkbox" id="SVI">Social Heat Vulnerability Score</h5>
  <h5><input type="checkbox" id="PVI">Physical Heat Vulnerability Score</h5>
  
  <ul>
    <li><input type="checkbox" id="coolingCenters">Cooling Centers</li>
    <li><input type="checkbox" id="pools">Public Pools</li>
    <li><input type="checkbox" id="emergencyP">Emergency Preparedness Centers</li>
    <li><input type="checkbox" id="parks">Parks and Greenspaces</li>
    <li><input type="checkbox" id="hosp">Hospitals</li>
  </ul>
  </p></div>`,
};

const slides = [storySlide, filterslide]

const motive = {
  title: 'Why Are We Doing This?',
  slide: 'motive',
  content: `<p>We\'re doing this not only because it is cool, but also because it is very sick of us to do. 
  okay, I think. </p>`
}

//const motivationText = [motive]

