
class LunchBox {
  constructor(lunchboxDetails) {
    this.owner = lunchboxDetails.owner;
    this.material = lunchboxDetails.madeOf;
    this.shape = lunchboxDetails.shape;
    this.color = lunchboxDetails.color;
    this.handle = true;
    this.snacks = [];
  }

  acquireSnack(fruitSnack) {
    this.snacks.push(fruitSnack);
    fruitSnack.isInLunchBox = true;
  }

  findHealthySnacks() {
    var healthySnacksList = [];
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].healthy) {
        healthySnacksList.push(this.snacks[i])
      }
    }
    return healthySnacksList;
  }
}

module.exports = LunchBox;
