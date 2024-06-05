let addTaskButton = document.getElementById("addTaskButton")

let taskList = document.getElementById("taskList")

let taskInput = document.getElementById("taskInput") as HTMLInputElement

if (taskInput.value !== "") {
	addTaskButton?.addEventListener("click", (event) => {
		let taskDiv : HTMLElement = document.createElement("div")
		let task : HTMLElement = document.createElement("li")
		let deleteTask : HTMLElement = document.createElement("button")
		let doneTask : HTMLElement = document.createElement("button")
		
		task.textContent = taskInput.value
		taskInput.value = ""

		doneTask.textContent = "Done"
		doneTask.addEventListener("click", (event) => {
			task.classList.toggle("completed")
		})

		deleteTask.textContent = "Supprimer"
		deleteTask.addEventListener("click", (event) => {
			taskDiv.remove()
		})

		taskDiv.appendChild(task)
		taskDiv.appendChild(deleteTask)
		taskDiv.appendChild(doneTask)

		taskList?.appendChild(taskDiv)
	})
}
