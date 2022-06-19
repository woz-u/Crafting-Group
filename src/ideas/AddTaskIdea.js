import Modal from "./ModalIdeas"
import {useState} from 'react'
import './addTaskIdeas.css'
import {db} from './controllers/firebase' // original code'./firebase' file path src\controllers\firebase.js
import {collection, addDoc, Timestamp} from 'firebase/firestore'

function AddTaskIdeas({onClose, open}) {

  const [titleIdeas, setTitle] = useState('')
  const [descriptionIdeas, setDescription] = useState('')

  /* function to add new task to firestore */
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'tasksIdeas'), {
        titleIdeas: titleIdeas,
        descriptionIdeas: descriptionIdeas,
        completed: false,
        created: Timestamp.now()
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }

  return (
    <Modal modalLabel='Add Task Ideas' onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} className='addTaskIdeas' name='addTaskIdeas'>
        <input 
          type='text' 
          name='title' 
          onChange={(e) => setTitle(e.target.value.toUpperCase())} 
          value={titleIdeas}
          placeholder='Enter title Ideas'/>
        <textarea 
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter task Ideas description'
          value={descriptionIdeas}></textarea>
        <button type='submit'>Done</button>
      </form> 
    </Modal>
  )
}

export default AddTaskIdeas