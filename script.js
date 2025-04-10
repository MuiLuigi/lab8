//Part 1: Creating Objects
let person2 = {
    name: "Tony",
    age: 20,
    enrollement: true,
    address: {
        city: "Chicago",
        street: "1060 W Addison St"
    },
    //Method
    message: function(name, age) {
        console.log(`${this.name}, who is ${this.age} attends at Humber College.`);
    }
};