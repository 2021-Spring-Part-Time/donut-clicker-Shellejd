export default class DonutMaker {
    constructor(numDonuts, numAutoClickers, numDonutMultipliers) {
        this.numDonuts = numDonuts;
        this.numAutoClickers = numAutoClickers;
        this.numDonutMultipliers = numDonutMultipliers;
    }

    addDonut() {

        this.numDonuts++;
    }


    // revisit this section for feature 3 - cost of ea auto clicker
    // will go up with purchase - track auto clicker (maybe loop)
    addAutoClicker() {
        if (this.numDonuts >= 100) {
            this.numAutoClickers++;
            this.numDonuts -= 100;
        }
    }

    activateAutoClickers() {
        if (this.numAutoClickers > 0) {
            this.numDonuts += this.numDonuts * 1;

        }
    }
}