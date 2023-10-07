"use strict";

import init from "./init.js";
import "./style.css";
import mainTab from "./mainTab.js";
import menuTab from "./menuTab.js";
import contactTab from "./contactTab.js";

const innerBox = init();
mainTab(innerBox);

function switchTab(e){
  let t = e.target.innerText;
  if(t.includes('Home\nMenu\nContact')) return;
  innerBox.innerHTML = "";
  if(t == "Home") mainTab(innerBox);
  if(t == "Menu") menuTab(innerBox)
  if(t == "Contact") contactTab(innerBox)
};
document.querySelector(".header").addEventListener("click", switchTab);
