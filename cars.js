// task 1

const Car = function (make, model, colour, image, egistrationnumber, price) {
  this.make = make;
  this.model = model;
  this.colour = colour;
  this.image = image;
  this.egistrationnumber = egistrationnumber;
  this.price = price;
  this.editPrice = function (newPrice) {
    this.price = newPrice;
  };
  this.showAll = function () {
    console.log(
      `car detiles is: ${this.make}  ${this.model}  ${this.colour}  ${this.image}   ${this.egistrationnumber} ${this.price}`
    );
  };
};
const car1 = new Car("mazda", "MAZDA2", "black", "imge", 2594, 100000);
const car2 = new Car("mazda", "MAZDA3", "white", "imge", 58994, 150000);
const car3 = new Car("Toyota", "Avalon", "blue", "imge", 5594, 30000);
const car4 = new Car("Toyota", "Corolla Hatchback", "red", "imge", 3594, 20000);
const car5 = new Car("GMC", "Mercedes-Benz 600", "black", "imge", 2584, 60000);

class cars {
  constructor(make, model, colour, image, egistrationnumber, price) {
    this.make = make;
    this.model = model;
    this.colour = colour;
    this.image = image;
    this.egistrationnumber = egistrationnumber;
    this.price = price;
  }

  editPrice(newPrice) {
    this.price = newPrice;
  }
  showAll() {
    console.log(
      `car detiles is: ${this.make}  ${this.model}  ${this.colour}  ${this.image}   ${this.egistrationnumber} ${this.price}`
    );
  }
}

const car11 = new Car("mazda", "MAZDA2", "black", "imge", 3494, 100000);