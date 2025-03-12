import { UserIcon } from "@heroicons/react/24/solid"

function Header() {
  return (
    <header className="h-20 mb-8 px-6 lg:px-60 2xl:px-120 bg-white flex justify-between items-center shadow-md">
      <p className="text-xl font-semibold">TODO</p>
      <UserIcon className="size-8 text-white bg-gray-300 rounded-full" />
    </header>
  )
}

export default Header
