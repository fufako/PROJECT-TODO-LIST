export class Task {
  constructor(
    name,
    details,
    dueDate,
    id,
    projectName,
    isDone = false,
    isImportant = false
  ) {
    this.name = name
    this.details = details
    this.dueDate = dueDate
    this.id = id
    this.projectName = projectName
    this.isDone = isDone
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
  setIsImportant() {
    this.isImportant = isImportant
  }
  getIsImportant() {
    return this.isImportant
  }
}
