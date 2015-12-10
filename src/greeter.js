class Greeter {
  constructor(name) {
    this.name = name;
  }

  get greet() {
    return "Hello from " + this.name;
  }
}