export class Task {
  constructor(name, dueDate, isImportant) {
    this.name = name
    this.dueDate = dueDate
    this.isImportant = isImportant
  }
  setName(name) {
    this.name = name
  }

  getName() {
    return this.name
  }

  setDate(dueDate) {
    this.dueDate = dueDate
  }

  getDate() {
    return this.dueDate
  }
}
