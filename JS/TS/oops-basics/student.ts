class Student {

    rollNo: number
    name: string
    marks: number
    isPresent: boolean

    constructor() {
        this.rollNo = 0
        this.name = ''
        this.marks = 0
        this.isPresent = true
    }

    displayStudent() {
        console.log(s1.rollNo)
        console.log(s1.name)
        console.log(s1.marks)
        console.log(s1.isPresent)
    }

}

var s1: Student = new Student()
s1.displayStudent()