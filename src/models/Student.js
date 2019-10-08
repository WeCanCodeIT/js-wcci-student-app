/**
 * implements: AssignmentReceiver
 */

class Student {
  isEnrolled () {
    return this.enrolled;
  }

  constructor(firstName = "John", lastName = "Doe", imageUrl) {
    this.assignments = [];
    this.enrolled = false;
    this.firstName = firstName;
    this.imageUrl = imageUrl;
    this.lastName = lastName;
  }

  enroll () {
    this.enrolled = true;
  }

  getAssignments () {
    return this.assignments;
  }

  getAssignmentsLength () {
    return this.assignments.length;
  }

  getFullName () {
    return `${this.firstName} ${this.lastName}`;
  }

  getId () {
    return this.id;
  }

  graduate () {
    if (!this.enrolled) {
      throw new Error(
        "Student must be enrolled to be eligible for graduation."
      );
    }
    this.enrolled = false;
  }

  receiveAssignment (assignment) {
    this.assignments.push(assignment);
  }
}

module.exports = Student;
