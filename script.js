// complete this js code
function Person(name, age) {
	this.name=name;
	this.age=age;
	greet(){
		console.log("Hello, my name is ${this.name}, I am ${this.age} years old.");
	}
}

function Employee(name, age, jobTitle) {
	Person.call(this,name,age);
	this.jobTitle=jobTitle;
	jobGreet(){
		console.log("Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.")
	}
}
Employee=Object.create(Person);
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
