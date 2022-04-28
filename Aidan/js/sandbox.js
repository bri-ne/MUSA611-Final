(function () {
  /*Set the vars to be used, the last one will be added to item's class list*/
  const headings = document.querySelectorAll(".accordion-vert");
  const triggers = [];
  const copyOpenClass = "accordion-vert--open";

  headings.forEach((h,i) => {
    /*this fn determines whether the click will close or open the accordion*/
    let btn = h.querySelector("button"); /*this is not defined in css, just added to html*/
    triggers.push(btn);
    let target = h.nextElementSibling; /*i think thisis the content insdie the accordion*/
    btn.onclick = () => {
      let expanded = btn.getAttribute("aria-expanded") === "true";
      if 
      if (expanded) {
        closeItem(target, btn);
      } else {
        openItem(target, btn);
      }
    };

  })
})