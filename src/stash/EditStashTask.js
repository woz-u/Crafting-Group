import Modal from "./ModalStash"
import {useState} from 'react'
import './editStashTask.css'
import { doc, updateDoc } from "firebase/firestore";
import {db} from './controllers/firebase'

function EditStashTask({open, onClose, toEditStashTitle, toEditStashDescription, id}) {

  const [titleStash, setTitleStash] = useState(toEditStashTitle)
  const [descriptionStash, setDescriptionStash] = useState(toEditStashDescription)

  /* function to update firestore */
  const handleUpdate = async (e) => {
    e.preventDefault()
    const taskDocRef = doc(db, 'tasksStash', id)
    try{
      await updateDoc(taskDocRef, {
        titleStash: titleStash,
        descriptionStash: descriptionStash
      })
      onClose()
    } catch (err) {
      alert(err)
    }
    
  }

  return (
    <Modal modalLabel='Edit Stash Task' onClose={onClose} open={open}>
      <form onSubmit={handleUpdate} className='editStashTask'>
        <input type='text' name='titleStash' onChange={(e) => setTitleStash(e.target.value.toUpperCase())} value={titleStash}/>
        <textarea onChange={(e) => setDescriptionStash(e.target.value)} value={descriptionStash}></textarea>
        <button type='submit'>Edit</button>
      </form> 
    </Modal>
  )
}

export default EditStashTask