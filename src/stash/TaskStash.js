import './taskStash.css'
import {useState} from 'react'
import TaskItem from './TaskStashItem'
import EditTask from './EditStashTask'
import { doc, updateDoc, deleteDoc} from "firebase/firestore";
import {db} from './controllers/firebase' // original code'./firebase' file path src\controllers\firebase.js

function TaskStash({id, titleStash, descriptionStash, completedStash}) {

  const [checked, setCheckedStash] = useState(completedStash)
  const [open, setOpen] = useState({edit:false, view:false})

  const handleClose = () => {
    setOpen({edit:false, view:false})
  }

  /* function to update firestore */
  const handleChange = async () => {
    const taskDocRef = doc(db, 'tasks', id)
    try{
      await updateDoc(taskDocRef, {
        completed: checked
      })
    } catch (err) {
      alert(err)
    }
  }

  /* function to delete a document from firstore */ 
  const handleDelete = async () => {
    const taskDocRef = doc(db, 'tasks', id)
    try{
      await deleteDoc(taskDocRef)
    } catch (err) {
      alert(err)
    }
  }

  return (
    <div className={`task ${checked && 'task--borderColor'}`}>
      <div>
        <input 
          id={`checkbox-${id}`} 
          className='checkbox-custom'
          name="checkbox" 
          checked={checked}
          onChange={handleChange}
          type="checkbox" />
        <label 
          htmlFor={`checkbox-${id}`} 
          className="checkbox-custom-label" 
          onClick={() => setCheckedStash(!checked)} ></label>
      </div>
      <div className='task__body'>
        <h2>{titleStash}</h2>
        <p>{descriptionStash}</p>
        <div className='task__buttons'>
          <div className='task__deleteNedit'>
            <button 
              className='task__editButton' 
              onClick={() => setOpen({...open, edit : true})}>
              Edit
            </button>
            <button className='task__deleteButton' onClick={handleDelete}>Delete</button>
          </div>
          <button 
            onClick={() => setOpen({...open, view: true})}>
            View
          </button>
        </div>
      </div>

      {open.view &&
        <TaskItem 
          onClose={handleClose} 
          title={titleStash} 
          description={descriptionStash} 
          open={open.view} />
      }

      {open.edit &&
        <EditTask 
          onClose={handleClose} 
          toEditTitle={titleStash} 
          toEditDescription={descriptionStash} 
          open={open.edit}
          id={id} />
      }

    </div>
  )
}

export default TaskStash