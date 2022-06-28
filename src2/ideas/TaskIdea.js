import './taskIdeas.css'
import {useState} from 'react'
import TaskItemIdeas from './TaskItemIdeas'
import EditTaskIdeas from './EditTaskIdeas'
import { doc, updateDoc, deleteDoc} from "firebase/firestore";
import {db} from './controllers/firebase' // original code'./firebase' file path src\controllers\firebase.js

function TaskIdeas({id, titleIdeas, descriptionIdeas, completed}) {

  const [checked, setChecked] = useState(completed)
  const [open, setOpen] = useState({edit:false, view:false})

  const handleClose = () => {
    setOpen({edit:false, view:false})
  }

  /* function to update firestore */
  const handleChange = async () => {
    const taskDocRef = doc(db, 'tasksIdeas', id)
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
    const taskDocRef = doc(db, 'tasksIdeas', id)
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
          onClick={() => setChecked(!checked)} ></label>
      </div>
      <div className='task__body'>
        <h2>{title}</h2>
        <p>{description}</p>
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
        <TaskItemIdeas 
          onClose={handleClose} 
          titleIdeas={titleIdeas} 
          descriptionIdeas={descriptionIdeas} 
          open={open.view} />
      }

      {open.edit &&
        <EditTaskIdeas 
          onClose={handleClose} 
          toEditTitleIdeas={titleIdeas} 
          toEditDescriptionIdeas={descriptionIdeas} 
          open={open.edit}
          id={id} />
      }

    </div>
  )
}

export default TaskIdeas