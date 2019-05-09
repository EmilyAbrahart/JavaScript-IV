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
class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.speciality = attributes.speciality;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }

  demo(subject) {
    console.log(`Today we are learning about ${subject}.`);
  }

  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}!`);
  }
}

// STUDENT CLASS
class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
  }

  listsSubjects() {
    this.favSubjects.forEach(element => console.log(`${element}`));
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun a sprint challenge on ${subject}!`);
  }
}

// PROJECT MANAGER CLASS
class ProjectManager extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

// TESTS =======================================================================
//PERSON TESTS
const george = new Person({
  name: "George",
  location: "Spain",
  age: 25,
  gender: "male"
});

george.speak();

// STUDENT TESTS
const megan = new Student({
  name: "Megan",
  location: "Australia",
  age: 26,
  gender: "female",
  previousBackground: "artist",
  className: "WEB4",
  favSubjects: ["HTML", "CSS", "Javascript", "Python"]
});

megan.PRAssignment('Javascript');
megan.listsSubjects();
megan.sprintChallenge("node.js");

// INSTRUCTOR TESTS
const fred = new Instructor({
    name: "Fred",
    location: "Bedrock",
    age: 37,
    gender: "male",
    favLanguage: "JavaScript",
    speciality: "Front-end",
    catchPhrase: `Don't forget the homies`
  });
  
  fred.demo("Javascript");
  fred.grade(megan, "CSS");

  // PROJECT MANAGER TESTS
  const sarah = new ProjectManager({
    name: "Sarah",
    location: "London",
    age: 32,
    gender: "female",
    favLanguage: "Ruby",
    speciality: "Front-end",
    catchPhrase: `Don't forget the homies`,
    gradClassName: "WEBEU1",
    favInstructor: "Fred",
  });

  sarah.standUp('WEBEU2 Sarah');
  sarah.debugsCode(megan, "HTML");