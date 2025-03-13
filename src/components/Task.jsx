import { CheckCircleIcon as OpenIcon } from "@heroicons/react/24/outline"
import { CheckCircleIcon as ClosedIcon } from "@heroicons/react/24/solid"
import { CalendarIcon } from "@heroicons/react/24/solid"

import TaskMenu from "./TaskMenu"
import Badge from "./Badge"

function Task(props) {

  const deadline = props.task.deadline.toLocaleString(navigator.language, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  function toggleTask() {
    props.setTasks(prevTasks => (
      prevTasks.map(prevTask => (
        {
          ...prevTask,
          closed: props.task.id === prevTask.id ? !props.task.closed : prevTask.closed
        }
      ))
    ))
  }

  return (
    <div className="bg-white shadow-sm rounded-lg mb-4 p-4 flex items-center justify-between">
      <div className="flex space-x-4">
        <button onClick={toggleTask}>
          {props.task.closed
            ? <ClosedIcon className="text-green-400 hover:text-green-500 size-6 cursor-pointer transition-all duration-100" />
            : <OpenIcon className="text-gray-400 hover:text-green-400 size-6 cursor-pointer transition-all duration-100" />
          }
        </button>
        <div>
          <p className={props.task.closed ? "line-through" : "flex items-center gap-2"}>
            {props.task.title}
            {!props.task.closed && props.task.priority !== "no-priority" && <Badge priority={props.task.priority} />}
          </p>
          {!props.task.closed && props.task.deadline ? <p className="text-gray-400 flex items-center gap-1">
            <CalendarIcon className="size-4"/>
            {deadline}
          </p> : null}
        </div>
      </div>
      <TaskMenu task={props.task} setTasks={props.setTasks} />
    </div>
  )
}

export default Task
