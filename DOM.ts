let addTaskButton : HTMLElement | null = document.getElementById("addTaskButton")

let taskList : HTMLElement | null = document.getElementById("taskList")

let taskInput :HTMLElement | null = document.getElementById("taskInput")

if (taskInput)
addTaskButton?.addEventListener("click", (event) => {
	let taskDiv : HTMLElement = document.createElement("div")
	let task : HTMLElement = document.createElement("p")
	let deleteTask : HTMLElement = document.createElement("button")

	task.textContent = taskInput?.textContent as string
})