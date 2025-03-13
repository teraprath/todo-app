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

  return (
    <section className="px-6 lg:px-60 2xl:px-120 mb-8">

      <form action={addTask} className="flex justify-between mb-4 space-x-4">
        <input name="task-title" type="text" placeholder="e.g. make dishes" required={true} className="p-4 w-2/3 bg-white rounded-lg outline-0 shadow-sm" />
        <button className="w-1/3 bg-green-400 hover:bg-green-500 px-4 py-4 rounded-lg text-white text-sm font-semibold flex justify-center items-center gap-2 cursor-pointer transition-all duration-100 shadow-sm">
          <PlusCircleIcon className="size-6" /> <span className="hidden sm:block">Add Task</span>
        </button>
      </form>

      {props.tasks.length > 0 &&
        props.tasks.map(task => {
          return <Task key={task.id} task={task} setTasks={props.setTasks} />
        })
      }

    </section>
  )
}

export default TaskContainer
