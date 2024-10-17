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

form?.addEventListener("submit", e => {
    e.preventDefault() //Prevents the page to reload when sending a form

    if (input?.value == "" || input?.value == null) return //Input? means that if exists, give the value, if doesn't, return undefined

    const newTask: Task = {
        id: uuidV4(),
        title: input.value,
        completed: false,
        createdAt: new Date()
    }

    addListItem(newTask)
})

function addListItem(task: Task) {
    const item = document.createElement("li")
    const label = document.createElement("label")
    const checkbox = document.createElement("input")

    checkbox.type = "checkbox"

    label.append(checkbox, task.title)

    item.append(label)
    list?.append(item)
}