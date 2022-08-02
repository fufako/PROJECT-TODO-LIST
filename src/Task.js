export class Task {
  constructor(name, details, dueDate, isImportant = false) {
    this.name = name
    this.details = details
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
