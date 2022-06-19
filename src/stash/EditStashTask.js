import ModalStash from "./ModalStash"
import {useState} from 'react'
import './editStashTask.css'
import { doc, updateDoc } from "firebase/firestore";
import {db} from './controllers/firebase' // original code'./firebase' file path src\controllers\firebase.js
// more fields
function EditStashTask({open, onClose, toEditStashTitle, toEditStashDescription, id}) {
//more constants
  const [titleStash, setTitleStash] = useState(toEditStashTitle)
  const [descriptionStash, setDescriptionStash] = useState(toEditStashDescription)

  /* function to update firestore */
  const handleUpdate = async (e) => {
    e.preventDefault()
    const taskDocRef = doc(db, 'tasksStash', id)
    try{
      await updateDoc(taskDocRef, {
   //more here too
        titleStash: titleStash,
        descriptionStash: descriptionStash
      })
      onClose()
    } catch (err) {
      alert(err)
    }
    
  }
//adjust form
  return (
    <ModalStash modalLabel='Edit Stash Task' onClose={onClose} open={open}>
      <form onSubmit={handleUpdate} className='editStashTask'>
        <input type='text' name='titleStash' onChange={(e) => setTitleStash(e.target.value.toUpperCase())} value={titleStash}/>
        <textarea onChange={(e) => setDescriptionStash(e.target.value)} value={descriptionStash}></textarea>
        <button type='submit'>Edit</button>
      </form> 
    </ModalStash>
  )
}

export default EditStashTask