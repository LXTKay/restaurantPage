"use strict";

export default function(innerBox){
  let pizzaHeadline = document.createElement("h2");
  pizzaHeadline.innerText = "Pizzas";
  innerBox.append(pizzaHeadline);

  let pizzaMenu = document.createElement("div");
  pizzaMenu.classList.add("gridTable");
  innerBox.append(pizzaMenu);

  let salami = document.createElement("div");
  salami.innerText = "Pizza Salami";
  let salamiPrice = document.createElement("div");
  salamiPrice.innerText = "10€";
  pizzaMenu.append(salami);
  pizzaMenu.append(salamiPrice);
  
  let pepperoni = document.createElement("div");
  pepperoni.innerText = "Pizza Pepperoni";
  let pepperoniPrice = document.createElement("div");
  pepperoniPrice.innerText = "12€";
  pizzaMenu.append(pepperoni);
  pizzaMenu.append(pepperoniPrice);

  let margherita = document.createElement("div");
  margherita.innerText = "Pizza Margherita";
  let margheritaPrice = document.createElement("div");
  margheritaPrice.innerText = "8€";
  pizzaMenu.append(margherita);
  pizzaMenu.append(margheritaPrice);

  let hawaiian = document.createElement("div");
  hawaiian.innerText = "Pizza Hawaiian";
  let hawaiianPrice = document.createElement("div");
  hawaiianPrice.innerText = "11€";
  pizzaMenu.append(hawaiian);
  pizzaMenu.append(hawaiianPrice);

  let vegetarian = document.createElement("div");
  vegetarian.innerText = "Pizza Vegetarian";
  let vegetarianPrice = document.createElement("div");
  vegetarianPrice.innerText = "9€";
  pizzaMenu.append(vegetarian);
  pizzaMenu.append(vegetarianPrice);

  let supreme = document.createElement("div");
  supreme.innerText = "Pizza Supreme";
  let supremePrice = document.createElement("div");
  supremePrice.innerText = "13€";
  pizzaMenu.append(supreme);
  pizzaMenu.append(supremePrice);

  let fourCheese = document.createElement("div");
  fourCheese.innerText = "Pizza Four Cheese";
  let fourCheesePrice = document.createElement("div");
  fourCheesePrice.innerText = "10€";
  pizzaMenu.append(fourCheese);
  pizzaMenu.append(fourCheesePrice);

  let bbqChicken = document.createElement("div");
  bbqChicken.innerText = "Pizza BBQ Chicken";
  let bbqChickenPrice = document.createElement("div");
  bbqChickenPrice.innerText = "14€";
  pizzaMenu.append(bbqChicken);
  pizzaMenu.append(bbqChickenPrice);

  let spinachFeta = document.createElement("div");
  spinachFeta.innerText = "Pizza Spinach and Feta";
  let spinachFetaPrice = document.createElement("div");
  spinachFetaPrice.innerText = "11€";
  pizzaMenu.append(spinachFeta);
  pizzaMenu.append(spinachFetaPrice);

  let mushroom = document.createElement("div");
  mushroom.innerText = "Pizza Mushroom";
  let mushroomPrice = document.createElement("div");
  mushroomPrice.innerText = "10€";
  pizzaMenu.append(mushroom);
  pizzaMenu.append(mushroomPrice);

  let pineapple = document.createElement("div");
  pineapple.innerText = "Pizza Pineapple";
  let pineapplePrice = document.createElement("div");
  pineapplePrice.innerText = "12€";
  pizzaMenu.append(pineapple);
  pizzaMenu.append(pineapplePrice);


  let drinkHeadline = document.createElement("h2");
  drinkHeadline.innerText = "Drinks";
  innerBox.append(drinkHeadline);

  let drinkMenu = document.createElement("div");
  drinkMenu.classList.add("gridTable");
  innerBox.append(drinkMenu);

  let cola = document.createElement("div");
  cola.innerText = "Cola";
  let colaPrice = document.createElement("div");
  colaPrice.innerText = "4€";
  drinkMenu.append(cola);
  drinkMenu.append(colaPrice);

  let lemonade = document.createElement("div");
  lemonade.innerText = "Lemonade";
  let lemonadePrice = document.createElement("div");
  lemonadePrice.innerText = "3€";
  drinkMenu.append(lemonade);
  drinkMenu.append(lemonadePrice);

  let icedTea = document.createElement("div");
  icedTea.innerText = "Iced Tea";
  let icedTeaPrice = document.createElement("div");
  icedTeaPrice.innerText = "5€";
  drinkMenu.append(icedTea);
  drinkMenu.append(icedTeaPrice);

  let orangeJuice = document.createElement("div");
  orangeJuice.innerText = "Orange Juice";
  let orangeJuicePrice = document.createElement("div");
  orangeJuicePrice.innerText = "6€";
  drinkMenu.append(orangeJuice);
  drinkMenu.append(orangeJuicePrice);

  let appleJuice = document.createElement("div");
  appleJuice.innerText = "Apple Juice";
  let appleJuicePrice = document.createElement("div");
  appleJuicePrice.innerText = "4€";
  drinkMenu.append(appleJuice);
  drinkMenu.append(appleJuicePrice);

  let icedCoffee = document.createElement("div");
  icedCoffee.innerText = "Iced Coffee";
  let icedCoffeePrice = document.createElement("div");
  icedCoffeePrice.innerText = "5€";
  drinkMenu.append(icedCoffee);
  drinkMenu.append(icedCoffeePrice);

  let sparklingWater = document.createElement("div");
  sparklingWater.innerText = "Sparkling Water";
  let sparklingWaterPrice = document.createElement("div");
  sparklingWaterPrice.innerText = "2€";
  drinkMenu.append(sparklingWater);
  drinkMenu.append(sparklingWaterPrice);

  let water = document.createElement("div");
  water.innerText = "Water";
  let waterPrice = document.createElement("div");
  waterPrice.innerText = "2€";
  drinkMenu.append(water);
  drinkMenu.append(waterPrice);

  let milkshake = document.createElement("div");
  milkshake.innerText = "Milkshake";
  let milkshakePrice = document.createElement("div");
  milkshakePrice.innerText = "7€";
  drinkMenu.append(milkshake);
  drinkMenu.append(milkshakePrice);
}