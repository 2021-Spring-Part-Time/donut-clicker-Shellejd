import DonutMaker from "./DonutMaker";

let sprinkleDonutMaker = new DonutMaker(0, 0, 100, 0, 10);

console.log(sprinkleDonutMaker);

let addDonutBtn = (document.getElementById('addDonutBtn'));
let addMultiplierBtn = (document.getElementById('addMultiplierBtn'));
addMultiplierBtn.addEventListener('click', () => {
  sprinkleDonutMaker.addDonut();
  console.log(sprinkleDonutMaker.numDonuts);
  document.getElementById('donutCount').innerHTML = sprinkleDonutMaker.numDonuts;
});

addMultiplierBtn.addEventListener('click', () => {
  conseloe.log(sprinkleDonutMaker.numMultipliers);
  sprinkleDonutMaker.addMultipliers();

  document.getElementById('donutCount').innerHTML = sprinkleDonutMaker.numDonuts;
  document.getElementById('multiplier').innerHTML = sprinkleDonutMaker.numMultipliers;
  document.getElementById('multiplierCost').innerHTML = sprinkleDonutMaker.multiplierCost;
  console.log(sprinkleDonutMaker.numMultipliers);
});

let addAutoClickerBtn = (document.getElementById('addAutoClickerBtn'));
addAutoClickerBtn.addEventListener('click', () => {
  sprinkleDonutMaker.addAutoClicker();
  sprinkleDonutMaker.activateAutoClickers();
  console.log(sprinkleDonutMaker.numAutoClickers);
  document.getElementById('autoClickersCost').innerHTML = sprinkleDonutMaker.autoClickersCost;
  document.getElementById('autoClickers').innerHTML = sprinkleDonutMaker.numAutoClickers;
  document.getElementById('donutCount').innerHTML = sprinkleDonutMaker.numDonuts;
  document.getElementById('multiplierCost').innerHTML = sprinkleDonutMaker.multiplierCost;

});

setInterval(function () {
  sprinkleDonutMaker.activateAutoClickers();
  document.getElementById('donutsCount').innerHTML = sprinkleDonutMaker.numDonuts;
}, 1000);


//});