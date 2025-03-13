import { useState } from 'react'

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import { BackspaceIcon } from "@heroicons/react/20/solid";

import TaskEdit from "./TaskEdit";

function TaskMenu(props) {

  const [open, setOpen] = useState(false)

  function editTask() {
    setOpen(prevOpen => !prevOpen)
  }

  function deleteTask() {
    props.setTasks((prevTasks) =>
      prevTasks.filter((prevTask) => prevTask.id !== props.task.id)
    );
  }

  return (
    <>
      <Menu as="div" className="relative inline-block">
        <div>
          <MenuButton className="text-gray-400 hover:text-black cursor-pointer transition-all duration-100">
            <EllipsisVerticalIcon className="size-6" />
          </MenuButton>
        </div>

        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              <a
                onClick={editTask}
                className="flex items-center gap-2 cursor-pointer px-4 py-2 text-sm font-semibold text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden transition-all duration-100"
              >
                <PencilSquareIcon className="size-4" />
                Edit
              </a>
            </MenuItem>
            <MenuItem>
              <a
                onClick={deleteTask}
                className="flex items-center gap-2 cursor-pointer px-4 py-2 text-sm font-semibold text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden transition-all duration-100"
              >
                <BackspaceIcon className="size-4" />
                Delete
              </a>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
      <TaskEdit task={props.task} setTasks={props.setTasks} open={open} setOpen={setOpen} />
    </>
  );
}

export default TaskMenu;
