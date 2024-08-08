const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method to clone the car instance
  cloneCar() {
    const newCar = new this.constructor();
    // Use symbols to copy private attributes
    Object.getOwnPropertyNames(this).forEach(prop => {
      if (this.hasOwnProperty(prop)) {
        newCar[prop] = this[prop];
      }
    });
    return newCar;
  }
}
