"use strict"

export default function init(){
  const content = document.querySelector("#content");

  let header = document.createElement("div");
  header.classList.add("header");
  content.appendChild(header);

  let body = document.createElement("div");
  body.classList.add("body");
  content.appendChild(body);

  let innerBox = document.createElement("div");
  innerBox.classList.add("innerBox");
  body.appendChild(innerBox);

  let homeButton = document.createElement("div");
  homeButton.classList.add("button");
  homeButton.innerText = "Home";
  header.appendChild(homeButton);

  let menuButton = document.createElement("div");
  menuButton.classList.add("button");
  menuButton.innerText = "Menu";
  header.appendChild(menuButton);

  let contactButton = document.createElement("div");
  contactButton.classList.add("button");
  contactButton.innerText = "Contact";
  header.appendChild(contactButton);


  return innerBox;
};