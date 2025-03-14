import { v4 as uuid } from "uuid"
import Task from "./Task"
import { PlusCircleIcon } from "@heroicons/react/24/outline"

function TaskContainer(props) {

  function addTask(data) {

    if (data.get("task-title") != "") {
      props.setTasks(prevTasks => (
        [
          ...prevTasks,
          {
            id: uuid(),
            title: data.get("task-title"),
            priority: "no-priority",
            deadline: false,
            closed: false
          }
        ]
      ))
    }
  }

  const priorityOrder = {
    "High": 3,
    "Medium": 2,
    "Low": 1,
    "no-priority": 0
  }

  return (
    <section className="px-6 lg:px-60 2xl:px-120 mb-8">

      <form action={addTask} className="flex justify-between mb-4 space-x-4">
        <input name="task-title" type="text" placeholder="e.g. make dishes" required={true} className="p-4 w-2/3 bg-white rounded-lg outline-0 shadow-sm" />
        <button className="w-1/3 bg-green-400 hover:bg-green-500 px-4 py-4 rounded-lg text-white text-sm font-semibold flex justify-center items-center gap-2 cursor-pointer transition-all duration-100 shadow-sm">
          <PlusCircleIcon className="size-6" /> <span className="hidden sm:block">Add Task</span>
        </button>
      </form>

      {
        props.tasks
          .slice()
          .sort((a, b) => {

            // Sortieren nach geschlossenen Tasks
            if (a.closed !== b.closed) {
              return a.closed - b.closed
            }

            // Sortieren nach Deadlines
            if (a.deadline === false && b.deadline !== false) return 1
            if (b.deadline === false && a.deadline !== false) return -1
            if (a.deadline !== false && b.deadline !== false) {
              return a.deadline - b.deadline
            }

            // Sortieren nach Priorität
            return priorityOrder[b.priority] - priorityOrder[a.priority]

          })
          .map(task => <Task key={task.id} task={task} setTasks={props.setTasks}/>)
      }

    </section>
  )
}

export default TaskContainer
