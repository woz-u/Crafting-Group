//to be used as a task list, shopping list, project list and stash list for the CRUD portion. Each list has it's own copy of this task list template and is configured for it's section. Each has it's own modal for entry of information. Each area has a named page that will read and display a paged variation of the data in either a card format or a table/list. Each area also has an item page for single item views as well.

import Modal from "./Modal"
import {useState} from 'react'
import './addTask.css'
import {db} from './firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'

function AddTask({onClose, open}) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  /* function to add new task to firestore */
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'tasks'), {
        title: title,
        description: description,
        completed: false,
        created: Timestamp.now()
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }

  return (
    <Modal modalLable='Add Task' onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} className='addTask' name='addTask'>
        <input 
          type='text' 
          name='title' 
          onChange={(e) => setTitle(e.target.value.toUpperCase())} 
          value={title}
          placeholder='Enter title'/>
        <textarea 
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter task description'
          value={description}></textarea>
        <button type='submit'>Done</button>
      </form> 
    </Modal>
  )
}

export default AddTask