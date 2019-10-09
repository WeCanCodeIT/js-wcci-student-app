let currentId = 0;

class IdGenerator {
  static generate() {
    return currentId++;
  }
}

module.exports = IdGenerator;
