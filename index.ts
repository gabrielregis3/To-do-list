import { v4 as uuidV4 } from "uuid"

type Task = { 
    id: string, 
    title: string, 
    completed: boolean, 
    createdAt: Date
}

const list = document.querySelector<HTMLUListElement>("#list")
const form = document.querySelector<HTMLFormElement>("#new-task-form")
const input = document.querySelector<HTMLInputElement>("#new-task-title")

const tasks: Task[] = []

form?.addEventListener("submit", e => {
    e.preventDefault() //Prevents the page to reload when sending a form

    if (input?.value == "" || input?.value == null) return //Input? means that if exists, give the value, if doesn't, return undefined

    const newTask: Task = {
        id: uuidV4(),
        title: input.value,
        completed: false,
        createdAt: new Date()
    }
    tasks.push(newTask)

    addListItem(newTask)
    input.value = ""
})

function addListItem(task: Task) {
    const item = document.createElement("li")
    const label = document.createElement("label")
    const checkbox = document.createElement("input")
    
    checkbox.addEventListener("change", () => {
        task.completed = checkbox.checked
        saveTasks()
    })
    checkbox.type = "checkbox"
    checkbox.checked = task.completed
    label.append(checkbox, task.title)

    item.append(label)
    list?.append(item)
}

function saveTasks() {
    localStorage.setItem("TASKS", JSON.stringify(tasks))
}
