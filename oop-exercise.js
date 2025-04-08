/* Please read the instructions located in the exercises/2-oop-exercise-readme.md file and complete your code below */
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.grades = [];
  }
  addGrade(grade) {
    if (0 >= grade <= 100) {
      this.grades.push(grade);
    } else {
      console.log("Grade must be between 0 and 100");
    }
  }
  calculateAverageGrade() {
    if (this.grades.length > 0) {
      return this.grades.reduce(
        (acc, val) => acc + val / this.grades.length,
        0
      );
    } else {
      return 0;
    }
  }
  hasPassed(passingGrade) {
    let average = this.calculateAverageGrade();
    if (average >= passingGrade) {
      return true;
    } else {
      return false;
    }
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
}

class Course {
  constructor(title) {
    this.title = title;
    this.students = [];
  }
  enrollStudent(student) {
    this.students.push(student);
  }
  listStudents() {
    console.log(this.students);
  }
  calculateCourseAverage() {
    if (this.students.length === 0) {
      return 0;
    } else {
      let totalGrades = 0;
      let gradeCount = 0;
      for (let student of this.students) {
        totalGrades += student.grades.reduce((acc, val) => acc + val, 0);
        gradeCount += student.grades.length;
      }
      return totalGrades / gradeCount;
    }
  }
}

const student1 = new Student("Jose", 27);
const student2 = new Student("Otto", 27);
const student3 = new Student("Arya", 28);

student1.addGrade(100);
student1.addGrade(90);
student1.addGrade(20);
student2.addGrade(70);
student2.addGrade(80);
student2.addGrade(95);
student3.addGrade(100);
student3.addGrade(98);
student3.addGrade(92);
console.log(student1.calculateAverageGrade());
console.log(student1.hasPassed(70));
console.log(student1.getName());
console.log(student1.getAge());

const mathClass = new Course("Math");
mathClass.enrollStudent(student1);
mathClass.enrollStudent(student2);
mathClass.enrollStudent(student3);
mathClass.listStudents();
console.log(mathClass.calculateCourseAverage());
