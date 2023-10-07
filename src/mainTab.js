"use strict";

import pizzaImageImport from "./img/download.jpeg";

export default function mainTab(innerBox){
  const headline = document.createElement("h1");
  headline.innerText = "Marios Pizza";
  innerBox.append(headline);

  const pizzaImg = new Image();
  pizzaImg.src = pizzaImageImport;
  pizzaImg.classList.add("pizzaImage");
  innerBox.append(pizzaImg);

  const descriptionBox = document.createElement("div");
  descriptionBox.classList.add("textBox");
  innerBox.append(descriptionBox)
  const headlineDescription = document.createElement("h2");
  headlineDescription.innerText = "Goldilocks";
  descriptionBox.append(headlineDescription);
  const contentDescription = document.createElement("div");
  contentDescription.innerText = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
  descriptionBox.append(contentDescription);

  const hourBox = document.createElement("div");
  hourBox.classList.add("textBox");
  innerBox.append(hourBox);
  const headlineHours = document.createElement("h2");
  headlineHours.innerText = "Hours:";
  hourBox.append(headlineHours);
  const monday = document.createElement("div");
  monday.innerText = "Monday: 6am - 6pm";
  hourBox.append(monday);
  const tuesday = document.createElement("div");
  tuesday.innerText = "Tuesday: 6am - 6pm";
  hourBox.append(tuesday);
  const wednsday = document.createElement("div");
  wednsday.innerText = "Wednesday: 6am - 6pm";
  hourBox.append(wednsday);
  const thursday = document.createElement("div");
  thursday.innerText = "Thursday: 6am - 10pm";
  hourBox.append(thursday);
  const friday = document.createElement("div");
  friday.innerText = "Friday: 6am - 10pm";
  hourBox.append(friday);
  const saturday = document.createElement("div");
  saturday.innerText = "Saturday: 8am - 10pm";
  hourBox.append(saturday);
  const sunday = document.createElement("div");
  sunday.innerText = "Sunday: 8am - 8pm";
  hourBox.append(sunday);

  const locationBox = document.createElement("div");
  locationBox.classList.add("textBox");
  innerBox.append(locationBox)
  const locationHeadline = document.createElement("h2");
  locationHeadline.innerText = "Location";
  locationBox.append(locationHeadline);
  const locationDescription = document.createElement("div");
  locationDescription.innerText = "123 Forest Drive, Forestville, Maine";
  locationBox.append(locationDescription);
};