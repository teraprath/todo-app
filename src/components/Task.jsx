import { EllipsisVerticalIcon } from "@heroicons/react/24/solid"
import { CheckCircleIcon as OpenIcon } from "@heroicons/react/24/outline"
import { CheckCircleIcon as ClosedIcon } from "@heroicons/react/24/solid"

function Task(props) {

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
    <div className="bg-white shadow-md rounded-lg mb-4 p-4 flex justify-between">
      <div className="flex space-x-4">
        <button onClick={toggleTask}>
          {props.task.closed
            ? <ClosedIcon className="text-green-400 hover:text-green-500 size-6 transition-all duration-200" />
            : <OpenIcon className="text-gray-400 hover:text-green-400 size-6 transition-all duration-200" />
          }
        </button>
        <div>
          <p className={props.task.closed ? "line-through" : ""}>{props.task.title}</p>
          <p className="text-gray-400">Task Description</p>
        </div>
      </div>
      <button className="text-gray-400 hover:text-black cursor-pointer transition-all duration-200">
        <EllipsisVerticalIcon className="size-6" />
      </button>
    </div>
  )
}

export default Task
