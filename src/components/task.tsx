import { title } from "process"
import React, {useState} from "react"

type Priority = "p1" | "p2" | "p3"


type Task = {
  id: number,
  title: string,
  isCompleted: boolean
  priority?: Priority
}


function TaskTodo() {

  const [tasks, setTask] = useState<Task[]>([{
    id:1,
    title: "prash",
    isCompleted: false,
  }])

  const [taskName, setTaskName] = useState("")

  const handleOnchnage: React.ChangeEventHandler<HTMLInputElement> = (e) =>{
    setTaskName(e.target.value)
  }

  const handleAdd = () =>{
    setTask([...tasks, {
      id: Date.now(),
      title: taskName,
      isCompleted: false
    }])

    setTaskName("")
  }

  console.log(tasks)


  return (
    <div>
      <h1>Tasks</h1>
      <label className="sr-only" htmlFor="task-id">Add Task:</label>
      <input type="text" id="task-id" onChange={handleOnchnage}/>
      <button onClick={handleAdd}>Add</button>
      <ul>
        {tasks.map((item)=> <li key = {item.id}>{item.title}</li>)}
      </ul>
    </div>
  );
}

export default TaskTodo;
