// 2 add items modal page
import Modal from "./Modal"
import {useState} from 'react'
import './all.css'
import {db} from './firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'
//import the functions needed
function AddTask({onClose, open}) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  /* function to add new task to firestore */
//change the key:values

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
//change add task and form ensure the handleSubmit is part of the form tag
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