import './taskManagerIdeas.css'
import Task from './TaskIdeas'
import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from './controllers/firebase' // original code'./firebase' file path src\controllers\firebase.js
import AddTask from './AddTaskIdeas'

function TaskManagerIdeas() {

  const [openAddModal, setOpenAddModal] = useState(false)
  const [tasksIdeas, setTasks] = useState([])

  /* function to get all tasks from firestore in realtime */ 
  useEffect(() => {
    const taskColRef = query(collection(db, 'tasksIdeas'), orderBy('created', 'descIdeas'))
    onSnapshot(taskColRef, (snapshot) => {
      setTasks(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  },[])

  return (
    <div className='taskManagerIdeas'>
      <header>Task Manager Ideas</header>
      <div className='taskManager__container'>
        <button 
          onClick={() => setOpenAddModal(true)}>
          Add task Ideas +
        </button>
        <div className='taskManager__tasks'>

          {tasks.map((task) => (
            <Task
              id={task.id}
              key={task.id}
              completed={task.data.completed}
              titleIdeas={taskIdeas.data.title} 
              descriptionIdeas={taskIdeas.data.description}
            />
          ))}

        </div>
      </div>

      {openAddModal &&
        <AddTaskIdeas onClose={() => setOpenAddModal(false)} open={openAddModal}/>
      }

    </div>
  )
}

export default TaskManagerIdeas