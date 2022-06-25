import Modal from "./ModalShopping"
import {useState} from 'react'
import './addShoppingTask.css'
import {db} from './controllers/firebase' // original code'./firebase' file path src\controllers\firebase.js
import {collection, addDoc, Timestamp} from 'firebase/firestore'

function AddShoppingTask({onClose, open}) {

  const [titleShopping, setTitleShopping] = useState('')
  const [descriptionShopping, setDescriptionShopping] = useState('')

  /* function to add new task to firestore */
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'tasks'), {
// *****TODO****        
        titleShopping: titleShopping,
        descriptionShopping: descriptionShopping,
        completedShopping: false,
        created: Timestamp.now()
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }

  return (
    <Modal modalLabel='Add Shopping Task' onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} className='addTaskShopping' name='addTaskShopping'>
        <input 
          type='text' 
          name='title' 
          onChange={(e) => setTitleShopping(e.target.value.toUpperCase())} 
          value={titleShopping}
          placeholder='Enter Shopping title'/>
        <textarea 
          onChange={(e) => setDescriptionShopping(e.target.value)}
          placeholder='Enter task description'
          value={descriptionShopping}></textarea>
        <button type='submit'>Done</button>
      </form> 
    </Modal>
  )
}

export default AddShoppingTask