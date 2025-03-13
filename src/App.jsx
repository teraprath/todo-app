import useLocalStorageState from "./hooks/useLocalStorageState"

import Footer from "./components/Footer"
import Header from "./components/Header"
import TaskContainer from "./components/TaskContainer"


function App() {

  // ✅ Reviver-Funktion: Wandelt gespeicherte `Date`-Strings in echte `Date`-Objekte um
  const dateReviver = (key, value) => {
    return typeof value === "string" && value.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)
      ? new Date(value)
      : value;
  };

  const [tasks, setTasks] = useLocalStorageState("tasks", [], dateReviver);

  return (
    <>
      <Header />
      <TaskContainer tasks={tasks} setTasks={setTasks} />
      <Footer />
    </>
  )
}

export default App
