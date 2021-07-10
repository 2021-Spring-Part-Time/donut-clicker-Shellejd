export default class DonutMaker {
    constructor(numDonuts, numAutoClickers, autoClickersCost, numMultipliers, multiplierCost) {
        this.numDonuts = numDonuts;
        this.numAutoClickers = numAutoClickers;
        this.autoClickersCost = autoClickersCost;
        this.numMultipliers = numMultipliers;
        this.multiplierCost = multiplierCost;
    }

    addDonut() {
        this.numDounts += Math.round(1.2, this.numMultuipliers);
    }


    // revisit this section for feature 3 - cost of ea auto clicker
    // will go up with purchase - track auto clicker (maybe loop)
    addAutoClicker() {
        if (this.numDonuts >= this.autoClickersCost) {
            this.numAutoClickers++;
            this.numDonuts -= this.autoClickersCost;
            this.autoClickersCost = Math.round(this.autoClickersCost * 1.1);
        }

    }

    addMultiplier() {
        if (this.numDonuts = this.multiplierCost) {
            this.numMultuipliers++;
            this.numDonuts -= this.multiplierCost;
            this.multiplierCost = Math.round(this.multiplierCost * 1.1);
        }
    }

    activateAutoClickers() {
        if (this.numAutoClickers > 0) {
            this.numDonuts += this.numAutoClickers;
            // this.numDonuts += this.numDonuts * 1;

        }
    }


}