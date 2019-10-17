// CODE here for your Lambda Classes
class Person {
    constructor(personAttributes){
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location;
    } 
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}
class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty;
        this.favLanguage = instructorAttributes.favLanguage;
        this.catchPhrase = instructorAttributes.catchPhrase;
    }   
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${this.name} receives a prefect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects() {
        this.favSubjects.map(item => console.log(item));
    }
    PRAssignment(subject) {
        return `${this.name} has submitted PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun spring challenge on ${subject}`;
    }
}
class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp (channel) {
        return `${this.name} announces to ${this.channel}, @channel standy times!`;
    }
    debugsCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const robert = new Instructor({
    name: "Robert",
    location: "Boston",
    age: 29,
    favLanguage: "HTML",
    specialty: "Front-end",
    catchPhrase: `Hey, how are ya?`
});

 const martin = new Instructor({
    name: "Martin",
    location: "Detroit",
    age: 42,
    favLanguage: "Python",
    specialty: "Fullstack",
    catchPhrase: `Okey dokey then`
});

 const jane = new Student({
    name: "Jane",
    location: "New York",
    age: 24,
    previousBackground: "Consulting",
    className: "Labs25",
    favSubjects: ["HTML", "CSS"]
});

 const alexandria = new Student({
    name: "Alexandria",
    location: "Pittsburgh",
    age: 23,
    previousBackground: "Hostess",
    className: "CS155",
    favSubjects: ["HTML", "Python"]
});

 const jimmy = new ProjectManager({
    name: "Jimmy",
    location: "Cleveland",
    age: 49,
    gradClassName: "CS3",
    favInstructor: "Martin"
});

 const betsy = new ProjectManager({
    name: "Betsy",
    location: "State College",
    age: 32,
    gradClassName: "CS5",
    favInstructor: "Martin"
});


console.log(betsy.speak());
console.log(betsy.debugsCode(alexandria, "CSS"));
console.log(jimmy.standUp("web25_jor"));
console.log(alexandria.sprintChallenge("Javascript"));
console.log(robert.demo("React"));
console.log(robert.grade(alexandria, "CSS"));
console.log(jimmy.speak());
console.log(jane.PRAssignment("Responsive Design"));
console.log(martin.catchPhrase);