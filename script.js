//Part 1: Creating Objects
let student = {
    name: "Tony",
    age: 20,
    enrollement: true,
    courses: [
        "JavaScript Fundamentals",
        "Web Development",
        "Problem Solving & Algorithms"
    ],
    //Method
    message: function() {
        console.log(`${this.name}, who is ${this.age} years old attends at Humber College.`);
    }
};
console.log(student.name);
console.log(student.age);
student.message();

console.log("------------------------");


//Part 2: Working with JSON
let jsonString = JSON.stringify(student);
console.log(jsonString);

let jsonObj = JSON.parse(jsonString);
console.log("New Object:");
console.log(jsonObj);

console.log("Comaparison:", JSON.stringify(student) === JSON.stringify(jsonObj));

console.log("------------------------");


//Part 3: Using Destructuring Assignment
let { name, courses } = student;
console.log("Name:", name);
console.log("Courses:");
console.log(courses);

let scores = [85, 92, 78, 90];
let [score1, score2] = scores;

console.log("Frist 2 scores:");
console.log(score1, score2);