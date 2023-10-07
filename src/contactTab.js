"use strict";

export default function contactTab(innerBox){
  let contactHeadline = document.createElement("h2");
  contactHeadline.innerText = "Contact us";
  innerBox.append(contactHeadline);

  let box = document.createElement("div");
  box.classList.add("textBox");
  innerBox.append(box);

  let contactUs = document.createElement("div");
  contactUs.innerText = "Address:";
  box.append(contactUs);

  let name = document.createElement("div");
  name.innerText = "Marios Pizzeria";
  let street = document.createElement("div");
  street.innerText = "Bigsmall Street 243";
  let plz = document.createElement("div");
  plz.innerText = "12345 Berlin";
  box.append(document.createElement("br"));
  box.append(name);
  box.append(street);
  box.append(plz);

  let phoneNumberHeadline = document.createElement("div");
  phoneNumberHeadline.innerText = "Phone Number:";
  let phoneNumber = document.createElement("div");
  phoneNumber.innerText = "03055651234";
  box.append(document.createElement("br"));
  box.append(document.createElement("br"));
  box.append(phoneNumberHeadline);
  box.append(document.createElement("br"));
  box.append(phoneNumber);
};