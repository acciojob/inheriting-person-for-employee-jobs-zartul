// complete this js code
const Person = class {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	greet() {
		console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
	}
}
	
	class Employee extends Person {
	constructor(name, age, jobTitle) {
		super(name, age);
		this.jobTitle = jobTitle;
	}
	jobGreet() {
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
	}
}
	
	
window.Person = Person;
window.Employee = Employee;
	
	
const person = new Person("Alice", 25);
person.greet();
	
const employee = new Employee("Bob", 30, "Manager");
employee.jobGreet();

