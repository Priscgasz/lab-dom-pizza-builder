// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
  console.log(renderPepperoni(pep))
}

// Iteration 1: set the visibility of `<section class="mushroom">`
function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((oneMushroom) =>{
    if (state.mushroom) {
      oneMushroom.style.visibility = 'visible';  
  } else {
    oneMushroom.style.visibility = 'hidden';
  }
});
console.log(renderMushroom(mushroom))
}

 // Iteration 1: set the visibility of `<section class="green-pepper">`
function renderGreenPeppers() {
  document.querySelectorAll('.greenPeppers').forEach((oneGreenPepper) =>{
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';  
  } else {
    oneGreenPepper.style.visibility = 'hidden';
  }
});
console.log(renderGreenPeppers)
}

  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
const element1 = document.getElementsByClassName(.sauce)
function renderWhiteSauce() {
  element1.classList.toggle("white-sauce")
}                                                                                                      

  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`

  const element2 = document.getElementsByClassName(.crust)
  function renderGlutenFreeCrust() {
  element2.classList.toggle("crust-gluten-free")
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const element3 = document.getElementsByClassName(.crust)
  function renderGlutenFreeCrust() {
  element3.classList.toggle("crust-gluten-free")
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(`.btn.btn-mushrooms`).addEventListener('click', function() {
  state.mushroom = !state.mushroom; 
} )

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(`.btn.btn-greenPeppers`).addEventListener('click', function() {
  state.greenPeppers = !state.greenPeppers; 
} )
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(`.btn.btn-sauce`).addEventListener('click', function(){
  state.sauce = !state.sauce;
} )
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(`.btn.btn-crust`).addEventListener(`Click`, function(){
  state.crust = !=state.crust;
} )

renderEverything();
