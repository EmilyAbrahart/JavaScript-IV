// CODE here for your Lambda Classes

// PERSON CLASS
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }

  speak() {
      console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
  }
}

// INSTRUCTOR CLASS
