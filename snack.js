class Snack {
  constructor(type) {
    this.deliciousLevel = 'extra';
    this.type = type;
    this.amount = 100;
    this.isInLunchBox = false;
    this.healthy = type.includes('Fruit') || false;
  }

  getEaten() {
    this.amount -= 10;
    this.cuttingItClose = (this.amount / 100) <= .2 || false;
  }
}

module.exports = Snack;
