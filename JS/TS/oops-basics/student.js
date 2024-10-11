var Student = /** @class */ (function () {
    function Student() {
        this.rollNo = 0;
        this.name = '';
        this.marks = 0;
        this.isPresent = true;
    }
    Student.prototype.displayStudent = function () {
        console.log(s1.rollNo);
        console.log(s1.name);
        console.log(s1.marks);
        console.log(s1.isPresent);
    };
    return Student;
}());
var s1 = new Student();
s1.displayStudent();
