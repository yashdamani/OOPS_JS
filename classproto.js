class Teacher {
	constructor(subject) {
		this.subject = subject;
	}
}

class Student extends Teacher {
	constructor(topic) {
		super(topic);
			this.topic = topic;
		
	}
}

var obj1 = new Student("Operating Systems");

console.log(obj1.subject);


