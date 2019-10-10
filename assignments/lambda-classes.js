// CODE here for your Lambda Classes
class Person {
    constructor(attr){
        this.name = attr.name;
        this.location = attr.location;
        this.age = attr.age;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person {
    constructor(attr){
        super(attr);
        this.favLanguage = attr.favLanguage;
        this.specialty = attr.specialty;
        this.catchPhrase = attr.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person {
    constructor(attr){
        super(attr);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;

    }
    listsSubjects() {
        return this.favSubjects.forEach(x => console.log(x))
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallange(subject) {
        return `${this.name} has begun sprint challange on ${subject}`
    }

}

class TL extends Instructor {
    constructor(attr){
        super(attr)
        this.gradClassName = attr.gradClassName;
        this.favInstructor = attr.favInstructor;
        
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel stand times!`
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }

}


const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const adrian = new Student({
    name: "Adrian",
    location: "Arizona",
    age: 26,
    previousBackground: "Picker",
    className: "CIS123",
    favSubjects: "JavaScript",

})

const jeff = new TL({
    name: "Jeffrey",
    location: "Pacific",
    age: "n/a",
    specialty: "Teaching",
    favLanguage: "Unknown",
    catchPhrase: "Hey, all!",
    gradClassName: "Webpt11",
    favInstructor: "Unknown",

})


  console.log(fred.catchPhrase);
  console.log(adrian.PRAssignment("Javascript-III"));
  console.log(adrian.sprintChallange("Advance-CSS"));

  console.log(jeff.grade(adrian,"JavaScript-I"));
  console.log(jeff.standUp("webpt11-jeff"));

  