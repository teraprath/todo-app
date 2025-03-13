function Badge(props) {

  let style = "text-xs select-none py-1 px-2 rounded-md ";

  switch (props.priority) {
    case "High":
      style = style + "bg-red-400 text-white"
      break
    case "Medium":
      style = style + "bg-orange-400 text-white"
      break
    case "Low":
      style = style + "bg-blue-400 text-white"
      break
    default:
      style = style + "bg-gray-400 text-white"
  }

  return (
    <span className={style}>{props.priority}</span>
  )
}

export default Badge
