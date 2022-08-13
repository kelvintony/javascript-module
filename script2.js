// alert('welcome to javascript class 101');

// window.alert('welcome to javascript class 101');

// console.log('welcome to javascript class 101 part 2');

//Datatypes And Variables
//
// --1--string datatype
let firstName = 'mark dewis';
console.log(firstName);
//
// 
//--2--Number datatype
let mathScore = 86;
console.log(mathScore);
//
//
//---3--Array Datatype
let namesOfIntegralStudents = [ 'victor', 'gogo', 'prince' ];
console.log(namesOfIntegralStudents);
//
//
//---4--Object Datatype
let person = {
	name: 'mark twin',
	DOB: '12th march 1991',
	stateOfOrigin: 'Delta',
	age: 78,
	favouriteFood: [ 'beans', 'soup', 'rice' ]
};
console.log(person);
//
//
//---5--Null & undefined
let surname = null;
let middleName;

console.log(surname);
console.log(middleName);
//
//
//---6--Date DataType

let myDate = new Date();

console.log(myDate);

let fomarttedDate = myDate.getMonth() + 'th Month of year ' + myDate.getFullYear();

console.log(fomarttedDate);

//simply calculator to check the age of a person
let dateOfBirth = 1987;

let calculateAge = myDate.getFullYear() - dateOfBirth;

console.log('your age is: ' + calculateAge);
//
//---7--Boolean Datatye
let signInStatus = false;

console.log(signInStatus);

if (signInStatus) {
	console.log('welcome to your dashboard');
} else {
	console.log('please sign in');
}
//
//
//Complex DataTypes
const uniportStaff = [
	{
		name: 'Adebayo Abiola', 
		DOB: '12th August 1678',
		stateOfOrigin: 'Imo',
		department: 'Mechanical Engr',
		courses: [ 'Eng209.1', 'Meg254.1', 'Meg407.2' ]
	},
	{
		name: 'Dr. Chuka okon',
		DOB: '12th febuary 1871',
		stateOfOrigin: 'Delta',
		department: 'petroleum Engr',
		courses: [ 'PNG509.1', 'PNG354.1', 'PNG407.2' ],
		medicalReport: {
			genotype: 'AA',
			bloodGroup: 0,
			height: '9ft',
			visitedDate: [ '12th jul 2002', '17th august 2010' ],
			eyeDefects: [
				{
					type: 'short sighted',
					treatment: 'potgin bracing'
				},
				{
					type: 'long sighted',
					treatment: 'raque BEX'
				}
			]
		}
	},
	{
		name: 'Prof. yakubu ukwu',
		DOB: '19th August 1678',
		stateOfOrigin: 'Bayelsa',
		department: 'Electrical Engr',
		courses: [ 'EEE409.1', 'EEE554.1', 'EEE307.2' ]
	}
];

console.log(uniportStaff);

console.log(uniportStaff[1].medicalReport.height);
//
//
//---5---Boolean Datatype
let isTheUserSignedIn = false;

if (isTheUserSignedIn) {
	console.log('welcome to your dashboard');
} else {
	console.log('please sign in');
}
//
//
//----6---Date DataType
let myData = new Date();
console.log(myData);
console.log('year ' + myData.getFullYear());
console.log(myData.getHours() + 'am');

//
//
// ---7---Null and Undefined Datatype
let firstName;
let middleName = null;

console.log(firstName);
console.log(middleName);


// ---Comparison OPERATORS
// Greater than, >
// Less Than, <
// Greater than or equal to, >=
// Less Than or equal to, <=
// Equal to, ===
// Not equal to, !==
// Negation, !

let x = 89;
let y = 9;

if (x < y) {
	console.log(`${x} is less than ${y}`);
} else if (x > y) {
	console.log(`${x} is greater than ${y}`);
} else if (x === y) {
	console.log(`${x} is equal to ${y}`);
} else if (x !== y) {
	console.log(`${x} is equal to ${y}`);
} else {
	console.log("don't know what you are trying to do");
}


Logical Operators
    And,  &&
    Or,   \\

let username = 'john';
let password = '123123';

if (username === 'john' && password === '123123') {
	console.log('welcome to your dashboard');
} else {
	console.log('please identify yourself!');
}


// Conditional Statement
// ---1--IF STATEMENT
//  (a). if- statement (b). if-else- statement (c). if-else-if statement

// (a) if statement
let userEmail = 'john@gmail.com';
let userPassword = '123123';

if (userEmail === 'john@gmail.com' && userPassword === '123123') {
	console.log('welcome to your dashboard');
}

// (b).
if (userEmail === 'john@gmail.com' && userPassword === '123123') {
	console.log('welcome to your dashboard');
} else {
	console.log('please identify yourself!');
}
// (c).
if (userEmail === 'john@gmail.com' && userPassword === '123123') {
	console.log('welcome to your dashboard');
} else if (userEmail === 'mark@gmail.com' && userPassword === '123') {
	console.log('welcome to your dashboard');
} else if (userEmail === 'luke@gmail.com' && userPassword === '12311') {
	console.log('welcome to your dashboard');
} else {
	console.log('user email or password is not correct');
}
//
//---2--Switch Statement
//the switch case
//
let favouriteFruit = 'guava';

switch (favouriteFruit) {
	case 'orange':
		console.log('i love orange');
		break;

	case 'apple':
		console.log('i love apple');
		break;
	case 'guava':
		console.log('i love guava');
		break;
	case 'water melon':
		console.log('i love water melon');
		break;

	default:
		break;
}

//
//---3---Tenary Operators As conditional statment
//
//   condition ? if condition is true : if codition is false
let a = 5;
let b = 11;

let output;

a > b ? (output = `${a} is greater than ${b}`) : (output = `${a} is less than ${b}`);

console.log(output);
//
//
//Loop Structures
//
//--1--While Loop Structure

let a = 1; //initialize

while (a < 12) {
	//condition
	console.log(a); //do these
	a++; // increament
}

//
//---2---For Loop Structure
console.log('this is for-loop');

for (let x = 1; x < 12; x++) {
	console.log(x);
}

//
//---3---Do while
console.log('this is do while-loop');
let c = 1;
do {
	console.log(c);
	c++;
} while (c < 20);
//
//
//
console.log('Functions');
//
//Functions
//example 1
function addTwoNumbers(x, y) {
	let sum = x + y;
	return sum;
}

let summedValue = addTwoNumbers(2, 3);
console.log(addTwoNumbers(7, 9) + 11);
console.log('The sum of any two given value is: ' + (summedValue + 11));
//
//example 2
function SquareANumber(x) {
	let result = x * x;
	console.log(result);
}

SquareANumber(7);
//
//example 3. Arrow function

let SquareRootOfANumber = (x) => {
	let value = Math.sqrt(x);
	return value;
};

console.log(SquareRootOfANumber(21));


//
//
//Advance Loops, Arrays And Functions

//function solveThis() {}
//let solveThisTwo=()=>{}

let numbers = [ 3, 79, 11, 23, 4, 5, 2, 8, 21, 9 ];

let users = [
	{
		email: 'john@gmail.com',
		password: '2212'
	},
	{
		email: 'melvin@gmail.com',
		password: '2214'
	},
	{
		email: 'lily@gmail.com',
		password: '2218'
	}
];

// numbers.map(()=>{})
numbers.map((number) => {
	if (number < 10) {
		console.log(number);
	}
});

users.map((user) => {
	console.log(user);
});

//filtering an array
let numbersGreaterThanTen = numbers.filter((number) => {
	return number > 10;
});

console.log(numbersGreaterThanTen);

//filtering out the user with a specific email.
users.map((user) => {
	if (user.email === 'melvin@gmail.com') {
		console.log(user);
	}
});

//
//
//Object Destructuring And Object Spreading.

let uniportStudent = {
	fullName: 'jemmy ken',
	matNo: 'u2019/3025101',
	level: '300',
	medicals: {
		bloodGroup: 'o+',
		genotype: 'As'
	}
};

console.log(uniportStudent.matNo);
console.log(uniportStudent.medicals.bloodGroup);

//object destructuring
let { fullName, matNo, level, medicals: { genotype } } = uniportStudent;

console.log(fullName);
console.log(level);
console.log(genotype);

//object spreading- used in making a copy of an object at the same time modifiy the
//properties

let newStudent = { ...uniportStudent, fullName: 'chukwu mark' };

let number2 = [ ...numbers, 22 ];

console.log(number2);

let uniPortDetails = [
	{
		matNo: 'u2029/3025101',
		fullName: 'ken duke'
	},
	{
		matNo: 'u2030/3025101',
		fullName: 'mark twin'
	}
];

//Assigniment make a copy of this array and add a new object
//
//
//Classes
// what are classes: classes are blue print or prototype through which an object is created.
//A simple class contains member variables, constructors and functions.

class uniportStudent {
	constructor(name, matNo) {
		this.studentName = name;
		this.studentMatNo = matNo;
	}

	describeStudent() {
		console.log(`the name of the students is ${this.studentName} and he's matNo is ${this.studentMatNo}`);
	}

	describeIllness(typeOfIllness) {
		console.log(
			`the name of the students is ${this.studentName} and he's matNo is ${this
				.studentMatNo} we observe from our record that he has ${typeOfIllness}`
		);
	}
}

let student_1 = new uniportStudent('julius wkem', 'u2025/3025101');
student_1.describeStudent();

let student_2 = new uniportStudent('akan billie', 'u2030/3011911');
student_2.describeStudent();

let student_3 = new uniportStudent('mary ethene', 'u2040/33127');
student_3.describeIllness('malaria');

let student_4 = new uniportStudent('mary ethene', 'u2040/33127');
student_4.describeIllness('short sightedness');

//
//Another example of a class with an empty defined constructor
//
class Rectangle {
	constructor() {}

	calculateTheArea(length, breadth) {
		let area = length * breadth;
		console.log(`the area of the rectangle is ${area}`);
	}
}

let solveForTheArea = new Rectangle();
 
solveForTheArea.calculateTheArea(2, 6);

//
//
//
class Circle {
	constructor() {}

	calculateArea(radius) {
		let area = Math.PI * radius * radius;
		return area;
	}

	calculatePerimeterOfCircle(radius) {
		let perimeter = 2 * Math.PI * radius;
		return perimeter;
	}
	calculateDiameterOfCircle(radius) {
		let diameter = 2 * r;
		return diameter;
	}
	calculateLengthOfArc(angle, radius) {
		let length = angle * 2 * Math.PI * radius / 360;
		return length;
	}
	calculateAreaOfSectorOfCircle(angle, radius) {
		let area = angle * Math.PI * radius * radius / 360;
		return area;
	}
}

let number = new Circle();

console.log('the area of the circle is: ' + number.calculateArea(6));


//
//
// making class variables private or public
class Bread {
	#pattern;
	constructor(breadType, breadSize) {
		this.size = breadSize;
		this.type = breadType;
		this.#pattern = 'sliced';
	}
	getSize() {
		return this.size;
	}
	setSize(breadSize) {
		this.size = breadSize;
	}

	bake() {
		console.log(`this is your ${this.#pattern} ${this.type} bread ${this.size} size `);
	}
}

let object = new Bread('sugar', 'small');

object.bake();

object.setSize('big')

object.bake();

//pattern variable has been made private so we can't access it from anywhere 
console.log(object.pattern);

//
//
//class inheritance'
class SpecializedBread extends Bread{
	constructor(breadType,breadSize,breadSauceType){
		super(breadType,breadSize)
		this.sauceType =breadSauceType
	}

	specialBake(){
		console.log(`this is your ${this.sauceType} ${this.type} bread ${this.size} size`);
	}
}

let object2 = new SpecializedBread('wheat', 'big', 'sardine');
object2.specialBake();
object2.bake()

//
//
//WEB STORAGE / API

let uniportStudents = [ 'jude max', 'akan ekog', 'alaye bobby' ];

let integralStudents = {
	fullName: 'jeremiah wizzy',
	course: 'intro to javascript',
	regNo: 'int/2022/001'
};

localStorage.clear();

localStorage.setItem('studentInfo', JSON.stringify(uniportStudents));

localStorage.setItem('integralStudentinfo', JSON.stringify(integralStudents));

let getUniportStudents = JSON.parse(localStorage.getItem('studentInfo'));

let getintegralStudents = JSON.parse(localStorage.getItem('integralStudentinfo'));

console.log(getUniportStudents);
console.log(getintegralStudents);

//
//
//JAVASCRIPT ERROR AND ERROR HANDLING

const makeAnError = () => {
	try {
		const firstName = 'jude wax';
		firstName = 'mark twin';
		console.log(firstName);
	} catch (error) {
		console.log('we found an error: ' + error.message);
	}
};

makeAnError();
console.log('kelly');
//
//
//

let names = [ 'kelvin', , 'ken' ];

console.log(names[0].length);

let newArray = [];

console.log('mapping through the array');
names.map((name) => {
	if (name.length != 0) {
		newArray.push(name);
		console.log(name);
	} 
});
console.log(newArray);
console.log(names);

//
//
// ASYNC - AWAIT- FETCH

// fetch().then().then().catch()

const fetchUserData = async () => {
	await fetch('https://jsonplaceholder.typicode.com/posts')
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			data.slice(0, 3).map((x) => {
				console.log(x);
			});
		})
		.catch((error) => {
			console.log(error);
		});
};

fetchUserData(); 

//
//
// call back function
setTimeout(() => {
	console.log('testing the microphone');
}, 2000);
//
//an example
const testSetTimeOut = () => {
	console.log('Trying to validate user pls wait a minute...');
	setTimeout(() => {
		console.log('testing the microphone');
	}, 2000);
};

testSetTimeOut();

// 
//custom call back
const fetchUserData = async (userData) => {
	await fetch('https://jsonplaceholder.typicode.com/users')
		.then((res) => res.json())
		.then((data) => {
			userData(data);
		})
		.catch((error) => {
			console.log(error);
		});
};

//
//
//custom call back
fetchUserData((user) => {
	console.log(user);
});




















