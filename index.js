import DonutMaker from "./DonutMaker.js";

const sprinkleDonutMaker = new DonutMaker(0, 0, 100, 0, 10);

console.log(sprinkleDonutMaker);

//check this section
let addDonutBtn = (document.getElementById('addDonutBtn'));
addDonutBtn.addEventListener('click', () => {
  sprinkleDonutMaker.addDonut();
  console.log(sprinkleDonutMaker.numDonuts);
  document.getElementById('donutCount').innerHTML = sprinkleDonutMaker.numDonuts;
  document.getElementById('multiplier').innerHTML = sprinkleDonutMaker.numMultipliers;
  document.getElementById('multiplierCost').innerHTML = sprinkleDonutMaker.multiplierCost;
});

let addMultiplierBtn = (document.getElementById('addMultiplierBtn'));
addMultiplierBtn.addEventListener('click', () => {
  sprinkleDonutMaker.addMultiplier();
  console.log(sprinkleDonutMaker.numMultipliers);
  document.getElementById('donutCount').innerHTML = sprinkleDonutMaker.numDonuts;
  document.getElementById('multiplier').innerHTML = sprinkleDonutMaker.numMultipliers;
  document.getElementById('multiplierCost').innerHTML = sprinkleDonutMaker.multiplierCost;
});

let addAutoClickerBtn = (document.getElementById('addAutoClickerBtn'));
addAutoClickerBtn.addEventListener('click', () => {
  sprinkleDonutMaker.addAutoClicker();
  console.log(sprinkleDonutMaker.numAutoClickers);
  document.getElementById('autoClickersCost').innerHTML = sprinkleDonutMaker.autoClickersCost;
  document.getElementById('autoClickers').innerHTML = sprinkleDonutMaker.numAutoClickers;
  document.getElementById('donutCount').innerHTML = sprinkleDonutMaker.numDonuts;
  document.getElementById('multiplierCost').innerHTML = sprinkleDonutMaker.multiplierCost;

});

setInterval(function () {
  sprinkleDonutMaker.activateAutoClickers();
  document.getElementById('donutCount').innerHTML = sprinkleDonutMaker.numDonuts;
}, 1000);