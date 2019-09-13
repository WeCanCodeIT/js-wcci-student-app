class Assignment {
  constructor(title, description) {
    if (this.constructor === Assignment) {
      throw new Error("Assignment is abstract!");
    }
    this.title = title;
    this.description = description;
  }
}

module.exports = Assignment;
