'sue strict'

var numbers = [ 5, -12, 22, -24, 123, -2222, 123, 44123, 0, -222, -321, -4124,
		213, 4441, 212467, -21321354, 9213, 81283, -124412, 1 ];

// 1.
console.log('1.a)Sort array from lowest to highest');
numbers.sort(function(a, b) {
	if (a < b)
		return -1
	if (a > b)
		return 1
	return 0
})
console.log(numbers);
console.log('>>>>>>>>>>>>><<<<<<<<<<<<');

console.log('1.b)Sort array from highest to lowest');
numbers.sort(function(a, b) {
	if (a > b)
		return -1
	if (a < b)
		return 1
	return 0
})
console.log(numbers);
console.log('>>>>>>>>>>>>><<<<<<<<<<<<');

// 2.
console.log('2.a) Filter array only by positive values');
function filterByPositive(obj) {
	return obj >= 0;
}

function filterByNegative(obj) {
	return obj < 0;
}

var filteredArray_1 = numbers.filter(filterByPositive);
console.log(filteredArray_1);
console.log('>>>>>>>>>>>>><<<<<<<<<<<<');

console.log('2.b) Filter array only by negative values');
var filteredArray_2 = numbers.filter(filterByNegative);
console.log(filteredArray_2);

// 3.
var Student = [ {
	yearOfStuding : 3,
	facultyName : 'Philisophy'
}, {
	yearOfStuding : 2,
	facultyName : 'Arts'
}, {
	yearOfStuding : 1,
	facultyName : 'Arts'
}, {
	yearOfStuding : 1,
	facultyName : 'Engineering'
}, {
	yearOfStuding : 4,
	facultyName : 'Science'
}, {
	yearOfStuding : 5,
	facultyName : 'Philisophy'
}, {
	yearOfStuding : 5,
	facultyName : 'Science'
}, {
	yearOfStuding : 2,
	facultyName : 'Social'
}, {
	yearOfStuding : 5,
	facultyName : 'Philisophy'
}, {
	yearOfStuding : 2,
	facultyName : 'Social'
} ];

console.log('3.a) Array that includes only "facultyName" objects');
function getFacultyName(obj) {                                
	return obj.facultyName;                                   
}                                                      
                                                       
var facultyNames = Student.map(getFacultyName);               
console.log(facultyNames);


console.log('3.b) The summ number of all yearOfStuding objects');
function sumYearOfStuding(sumOfYears, currentObj) {                  
	return sumOfYears + currentObj.yearOfStuding;                           
}                                                                
                                                                 
var yearsSum = Student.reduce(sumYearOfStuding, 0);            
console.log('Total amount of studying years is: ' + yearsSum);
