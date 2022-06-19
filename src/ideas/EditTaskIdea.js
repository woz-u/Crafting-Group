import Modal from "./ModalIdeas"
import {useState} from 'react'
import './editTaskIdeas.css'
import { doc, updateDoc } from "firebase/firestore";
import {db} from './controllers/firebase' // original code'./firebase' file path src\controllers\firebase.js

function EditTaskIdeas({open, onClose, toEditTitle, toEditDescription, id}) {

  const [titleIdeas, setTitle] = useState(toEditTitle)
  const [descriptionIdeas, setDescription] = useState(toEditDescriptionIdeas)

  /* function to update firestore */
  const handleUpdate = async (e) => {
    e.preventDefault()
    const taskDocRef = doc(db, 'tasks', id)
    try{
      await updateDoc(taskDocRef, {
        titleIdeas: titleIdeas,
        descriptionIdeas: descriptionIdeas
      })
      onClose()
    } catch (err) {
      alert(err)
    }
    
  }

  return (
    <ModalIdeas modalLabel='Edit Task Ideas' onClose={onClose} open={open}>
      <form onSubmit={handleUpdate} className='editTaskIdeas'>
        <input type='text' name='titleIdeas' onChange={(e) => setTitle(e.target.value.toUpperCase())} value={titleIdeas}/>
        <textarea onChange={(e) => setDescription(e.target.value)} value={descriptionIdeas}></textarea>
        <button type='submit'>Edit</button>
      </form> 
    </ModalIdeas>
  )
}

export default EditTaskIdeas