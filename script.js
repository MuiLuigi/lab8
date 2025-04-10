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


//Part 2: Working with JSON