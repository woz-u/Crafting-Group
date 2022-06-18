import Modal from "./ModalStash"
import {useState} from 'react'
import './addStashTask.css'
import {db} from './controllers/firebase' // original code'./firebase' file path src\controllers\firebase.js
import {collection, addDoc, Timestamp} from 'firebase/firestore'
// added Stash to all variables & constants
function AddStashTask({onClose, open}) {

  const [titleStash, setTitleStash] = useState('')
  const [descriptionStash, setDescriptionStash] = useState('')

  /* function to add new Stash task to firestore */
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'tasksStash'), {
      
        /* original code  //title: title,
        //description: description,
        //completed: false,*/

        //modify and add to this list of key:values for the different items and categories in the Stash
        titleStash: titleStash,
        descriptionStash: descriptionStash,
        completed: false,
        created: Timestamp.now()
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }
// add fields to the form to match the database key:values
  return (
    <Modal modalLabel='Add Stash' onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} className='addStashTask' name='addStashTask'>
        <input 
          type='text' 
          name='titleStash' 
          onChange={(e) => setTitleStash(e.target.value.toUpperCase())} 
          value={titleStash}
          placeholder='Enter Stash Item'/>
        <textarea 
          onChange={(e) => setDescriptionStash(e.target.value)}
          placeholder='Enter stash description'
          value={descriptionStash}></textarea>
        <button type='submit'>Done</button>
      </form> 
    </Modal>
  )
}

export default AddStashTask