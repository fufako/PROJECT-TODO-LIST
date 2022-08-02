export class Task {
  constructor(name, details, dueDate, id, isImportant = false) {
    this.name = name
    this.details = details
    this.dueDate = dueDate
    this.id = id
    this.isImportant = isImportant
  }
  setName(name) {
    this.name = name
  }

  getName() {
    return this.name
  }

  setDetails() {
    this.details = details
  }

  getDetails() {
    return this.details
  }

  setDate(dueDate) {
    this.dueDate = dueDate
  }

  getDate() {
    return this.dueDate
  }

  setID() {
    this.id = id
  }

  getID() {
    return this.id
  }
}
