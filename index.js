import DonutMaker from "./DonutMaker.js";

const donutMaker = new DonutMaker(0, 0, 0);

const addBtn = document.querySelector("#AddDonut"),
  donutCount = document.querySelector("#DonutCount");

addBtn.addEventListener('click', () => {
  donutMaker.addDonut();
  donutCount.innerText = donutMaker.numDonuts;

})