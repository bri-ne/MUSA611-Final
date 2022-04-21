

const accordionVertfunction = function() {
  /*Set the vars to be used, the last one will be added to item's class list*/
  const headings = document.querySelectorAll(".accordion-vert");
  const triggers = [];//idk if i need this

  headings.forEach((h,i) => {
    /*this fn determines whether the click will close or open the accordion*/
    let btn = h.querySelector("button"); /*this is not defined in css, just added to html*/
    triggers.push(btn);
    let target = h.parentElement.parentElement; /*i think thisis the content insdie the accordion*/
    btn.onclick = () => {
      let expanded = btn.getAttribute("aria-expanded") === "true";
      if (expanded) {
        closeItem(target, btn);
      } else {
        openItem(target, btn);
      }
    };
  });
};

 function closeItem(target, btn) {
  const copyOpenClass = "accordion-vert--open";
   /* this get the side bar shrunk*/
   //let sub = document.querySelector(".content-side-bar-col"); 
   //sub.style.maxWidth = 0;

   /* this is so the button can shrink*/
   let btnContainer = document.querySelector(".buttons-side-bar-col") //this grabs all the sidebar buttons 
   btnContainer.style.position = "absolute"; // this could be 
   btnContainer.style.left = "-55%";
   /* this will allow the btn style to change 
   and meet accesibility requirements, BUT it is only for the collapse and expand button*/
   btn.setAttribute("aria-expanded", false);

   btn.innerHTML.replace("&#8595;", "&#8593;");
   target.style.borderBottom = "transparent";
   target.classList.remove(copyOpenClass);
   target.style.maxWidth = 0;
   

 }
 function openItem(target, btn){
   const copyOpenClass = "accordion-vert--open";
   //let sub = document.querySelector(".content-side-bar-col")
   /* this is so the button can shrink*/
   btn.setAttribute("aria-expanded", true);
   btn.innerHTML.replace("&#8593;", "&#8595;");
   let btnContainer = document.querySelector(".buttons-side-bar-col") //this grabs all the sidebar buttons 

   btnContainer.style.position = "relative";
   btnContainer.style.left = "";
   target.classList.add(copyOpenClass);
   target.style.maxWidth = target.scrollHeight + "px";
   target.style.padding = target.padding;
   target.style.borderBottom = "#ffea4c 0.5rem solid";
   //sub.style.maxWidth = sub.scrollHeight + "px";
 }



accordionVertfunction(); 