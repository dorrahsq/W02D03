// Create a file cars.js. Within cars.js:
// o Create 5 car objects using a constructor function.
// o Each car object should have the following properties: make, model, colour, image, registration number, price.
// o Each car object should also include a editPrice(newPrice) method. this method should change the price of the car
// o Each car object should also include a showAll() method. this method should display all the details about the specific car object.

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

car5.showAll(); 