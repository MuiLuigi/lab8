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
    },
    addCourse: function(newCourse) {
        this.courses.push(newCourse);
        console.log(`The course ${newCourse} has been added`);
    },
    total: function() {
        console.log(`The length of the courses array is: ${this.courses.length}.`);
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

console.log("First 2 scores:");
console.log(score1, score2);

console.log("----------------------------");

//Part 4: The Spread Operator
let student2 = { ...student };

student2.graduationYear = 2026;

console.log("The cloned object with the new property:");
console.log(student2);

console.log("The original object:");
console.log(student);

let courses2 = ["Database", "Operating Systems"];
let allCourses = [...student.courses, ...courses2];

console.log("Merged Courses:");
console.log(allCourses);

console.log("--------------------");


//Part 5: Object Methods
student.addCourse("Database");
console.log("The updated courses array from the student object:")
console.log(student.courses);
student.total();