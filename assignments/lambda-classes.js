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

  giveGrade(student) {
    let isGain = Math.random();
    let newGrade = Math.round(Math.random() * 20);
    if (isGain < 0.7) {
      student.grade = student.grade += newGrade;
      console.log(
        `Well done, ${student.name}! Your grade went up by ${newGrade}`
      );
    } else student.grade = student.grade -= newGrade;
    console.log(
      `Unfortunately your grade went down by ${newGrade}. Keep trying, ${
        student.name
      }!`
    );
  }
}

// STUDENT CLASS
class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
    this.grade = attributes.grade;
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

  graduate() {
    if (this.grade > 70) {
      console.log(
        `Congratulations, ${
          this.name
        }! You're ready to graduate from Lambda School!`
      );
    } else {
      console.log(
        `Unfortunately you're not ready to graduate yet, ${
          this.name
        }. Keep practicing!`
      );
    }
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

const mary = new Person({
  name: "Mary",
  location: "France",
  age: 50,
  gender: "female"
});

mary.speak();

// STUDENT TESTS
const megan = new Student({
  name: "Megan",
  location: "Australia",
  age: 26,
  gender: "female",
  previousBackground: "artist",
  className: "WEB4",
  favSubjects: ["HTML", "CSS", "Javascript", "Python"],
  grade: 50
});

megan.PRAssignment("Javascript");
megan.listsSubjects();
megan.sprintChallenge("node.js");
megan.graduate();

const bob = new Student({
  name: "Bob",
  location: "Germany",
  age: 23,
  gender: "male",
  previousBackground: "engineer",
  className: "WEB3",
  favSubjects: ["Maths", "Physics", "Javascript", "React"],
  grade: 60
});

bob.PRAssignment("CSS");
bob.listsSubjects();
bob.sprintChallenge("React");
bob.graduate();

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
fred.grade(bob, "CSS");
fred.giveGrade(megan);

const steve = new Instructor({
  name: "Steve",
  location: "Manchester",
  age: 35,
  gender: "male",
  favLanguage: "React",
  speciality: "Front-end",
  catchPhrase: `Don't forget the homies`
});

steve.demo("React");
steve.grade(bob, "HTML");
steve.giveGrade(bob);

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
  favInstructor: "Fred"
});

sarah.standUp("WEBEU2 Sarah");
sarah.debugsCode(megan, "HTML");
sarah.giveGrade(bob);

const rachel = new ProjectManager({
  name: "Rachel",
  location: "Denmark",
  age: 28,
  gender: "female",
  favLanguage: "CSS",
  speciality: "Front-end",
  catchPhrase: `Don't forget the homies`,
  gradClassName: "WEBEU1",
  favInstructor: "Steve"
});

rachel.giveGrade(bob);
rachel.giveGrade(bob);
rachel.giveGrade(bob);
rachel.giveGrade(bob);
