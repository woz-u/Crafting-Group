import Modal from './Modal';
import {db} from './firebase';
import * as React from 'react';
import useState from 'react';
import './editTask.css';
import { doc, updateDoc } from "firebase/firestore";;

function EditTask({open, onClose, toEditTitle, toEditDescription, id}) {

  const [title, setTitle] = useState(toEditTitle)
  const [description, setDescription] = useState(toEditDescription)

  /* function to update firestore */
  const handleUpdate = async (e) => {
    e.preventDefault()
    const taskDocRef = doc(db, 'tasks', id)
    try{
      await updateDoc(taskDocRef, {
        title: title,
        // budget: budget, // <-- added
        description: description
      })
      onClose()
    } catch (err) {
      alert(err)
    }
    
  }
// added budget
  return (
    <Modal modalLabel='Edit Project' onClose={onClose} open={open}>
      <form onSubmit={handleUpdate} name='editTask'>
        <input type='text' name='title' onChange={(e) => setTitle(e.target.value.toUpperCase())} value={title}/>
        {/* <input type='number' name='budget' onChange={(e) => setBudget(e.target.value)} value={budget}/> */}
        <textarea onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
        <button type='submit'>Edit</button>
      </form> 
    </Modal>
  )
}

export default EditTask