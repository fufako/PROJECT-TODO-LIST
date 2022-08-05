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
}
