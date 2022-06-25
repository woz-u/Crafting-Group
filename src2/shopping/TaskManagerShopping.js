import './taskShoppingManager.css'
import Task from './ShoppingTask'
import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from './controllers/firebase' // original code'./firebase' file path src\controllers\firebase.js
import AddTask from './AddShoppingTask'

function TaskManagerShopping() {

  const [openAddModal, setOpenAddModal] = useState(false)
  const [tasksShopping, setTasksShopping] = useState([])

  /* function to get all tasks from firestore in realtime */ 
  useEffect(() => {
    const taskColRef = query(collection(db, 'tasks'), orderBy('created', 'desc'))
    onSnapshot(taskColRef, (snapshot) => {
      setTasksShopping(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  },[])

  return (
    <div className='taskManagerShopping'>
      <header>Task Manager</header>
      <div className='taskManagerShopping__container'>
        <button 
          onClick={() => setOpenAddModal(true)}>
          Add task +
        </button>
        <div className='taskManagerShopping__tasks'>

          {tasksShopping.map((taskShopping) => (
            <Task
              idShopping={taskShopping.id}
              keyShopping={taskShopping.id}
              completedShopping={taskShopping.data.completed}
              titleShopping={taskShopping.data.title} 
              descriptionShopping={taskShopping.data.description}
            />
          ))}

        </div>
      </div>

      {openAddModal &&
        <AddTask onClose={() => setOpenAddModal(false)} open={openAddModal}/>
      }

    </div>
  )
}

export default TaskManagerShopping