import { HeartIcon } from "@heroicons/react/24/solid"

function Footer() {
  return (
    <footer className="h-20 w-full bg-white shadow-md flex items-center justify-center space-x-1 text-xs font-medium text-gray-400">
      <p>Made with</p>
      <HeartIcon className="size-6 text-red-400" />
      <p>by <a href="https://teraprath.dev" target="_blank" className="underline">teraprath</a></p>
    </footer>
  )
}

export default Footer
