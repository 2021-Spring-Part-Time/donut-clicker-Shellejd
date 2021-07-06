class DonutMaker {
    constructor(numDonuts, NumAutoClickers) {
        this.numDonuts = numDonuts;
        this.numAutoClickers = numAutoClickers;
    }

    addDonut() {

        this.numDonuts++;
    }

}
// revisit this section for feature 3 - cost of ea auto clicker
// will go up with purchase - track auto clicker (maybe loop)
addAutoClicker() {
    if (this.numDonuts >= 100) {
        this.addAutoClicker++;
        thisf.numDonuts -= 100;
    }
}

activateAutoClickers() {
    if (this.numAutoClickers > 0) {
        this.numDonuts += this.numDonuts * 1;

    }
}
}
export default DonutMaker;