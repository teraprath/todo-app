import { UserIcon } from "@heroicons/react/24/solid"

function Header() {
  return (
    <header className="h-20 mb-8 px-6 lg:px-60 2xl:px-120 bg-white flex justify-between items-center shadow-sm">
      <p className="text-gray-900 text-xl font-bold select-none cursor-pointer hover:text-gray-600 transition-all duration-200">todolist</p>
      <UserIcon className="text-gray-900 size-6 select-none cursor-pointer hover:text-gray-600 transition-all duration-200" />
    </header>
  )
}

export default Header
