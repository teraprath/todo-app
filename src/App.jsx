import { useState } from "react"

import Footer from "./components/Footer"
import Header from "./components/Header"
import TaskContainer from "./components/TaskContainer"


function App() {

  const [tasks, setTasks] = useState([])

  return (
    <>
      <Header />
      <TaskContainer tasks={tasks} setTasks={setTasks} />
      <Footer />
    </>
  )
}

export default App
