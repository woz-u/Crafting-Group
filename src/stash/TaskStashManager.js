import './taskStashManager.css'
import TaskStash from './TaskStash'
import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from './controllers/firebase' // original code'./firebase' file path src\controllers\firebase.js
import AddTaskStash from './AddStashTask'

function TaskStashManager() {

  const [openAddStashModal, setOpenAddStashModal] = useState(false)
  const [tasksStash, setTasksStash] = useState([])

  /* function to get all tasks from firestore in realtime */ 
  useEffect(() => {
    const taskColRef = query(collection(db, 'tasksStash'), orderBy('createdStash', 'descStash'))
    onSnapshot(taskColRef, (snapshot) => {
      setTasksStash(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  },[])

  return (
    <div className='taskStashManager'>
      <header>Task Stash Manager</header>
      <div className='taskStashManager__container'>
        <button 
          onClick={() => setOpenAddStashModal(true)}>
          Add task +
        </button>
        <div className='taskManagerStash__tasks'>

          {tasksStash.map((taskStash) => (
            <TaskStash
              id={taskStash.id}
              key={taskStash.id}
              completed={taskStash.data.completed}
              title={taskStash.data.title} 
              description={taskStash.data.description}
            />
          ))}

        </div>
      </div>

      {openAddStashModal &&
        <AddTaskStash onClose={() => setOpenAddStashModal(false)} open={openAddStashModal}/>
      }

    </div>
  )
}

export default TaskStashManager