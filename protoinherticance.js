

function Teacher() {
	this.subject = 'Computer Science';
	this.teacherName = "THS";
}


function Student() {
	this.studentName = "Prashanth"; 
	
}

Student.prototype = new Teacher(); //Student inherits the properties from Teacher

var object1 = new Student();

console.log(object1.subject);
console.log(object1.teacherName);
console.log(object1.studentName);
