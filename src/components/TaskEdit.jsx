'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { PencilSquareIcon } from '@heroicons/react/24/solid'

function TaskEdit(props) {

  function saveTask(data) {

    const priority = data.get("priority");
    const deadline = new Date(data.get("deadline").toString());

    props.setOpen(false)
    props.setTasks(prevTasks => (prevTasks.map(prevTask => (
      prevTask.id === props.task.id
      ? {
        ...prevTask,
        title: data.get("title"),
        priority: priority !== "no-priority" ? priority : "no-priority",
        deadline: !isNaN(deadline) ? deadline : false
      }
      : prevTask
    ))))
  }

  return (
    <Dialog open={props.open} onClose={props.setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-100 data-leave:ease-in"
      />

      <form action={saveTask} className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-start justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-100 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="bg-gray-100 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-gray-200 sm:mx-0 sm:size-10">
                  <PencilSquareIcon aria-hidden="true" className="size-6 text-gray-600" />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                    Edit
                  </DialogTitle>
                  <div className="mt-2 sm:w-102 flex flex-col gap-2">
                    <input
                      className="w-full p-3 bg-white rounded-lg outline-0 shadow-xs"
                      name="title"
                      placeholder="e.g. make dishes"
                      defaultValue={props.task.title}
                      type="text"
                    />
                    <div className="flex gap-2 flex-col sm:flex-row">
                      <input
                        className="w-full sm:w-2/3 p-3 bg-white rounded-lg outline-0 shadow-xs"
                        name="deadline"
                        defaultValue={props.task.deadline.toLocaleString("sv-SE").slice(0, 16)}
                        type="datetime-local"
                      />
                      <select name="priority" defaultValue={props.task.priority} className="w-full sm:w-1/3 p-3 bg-white rounded-lg shadow-xs appearance-none focus:ring-0 focus:outline-none">
                        <option value="no-priority">No priority</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white px-8 py-4 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="submit"
                className="inline-flex w-full justify-center rounded-md bg-green-400 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 sm:ml-3 sm:w-auto transition-all duration-100 cursor-pointer"
              >
                Save
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => props.setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-100 sm:mt-0 sm:w-auto cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </form>
    </Dialog>
  )
}

export default TaskEdit
