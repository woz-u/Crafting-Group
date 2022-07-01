import Modal from "./Modal"
import {useState} from 'react'
import './addTask.css'
import {db} from './firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'
// import header from '../components/header'

function AddTask({onClose, open}) {

  const [title, setTitle] = useState('')
  const [budget, setBudget] = useState('') // <-- added
  const [supply, setSupply] = useState('') // <-- added
  const [item, setAddSupply] = useState('') //adding a new supply item may move to secondary modal
  const [description, setDescription] = useState('') //adding a new supply item may move to secondary modal

  /* function to add new task to firestore */
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'tasks'), {
        title: title,
        description: description,
        budget: budget, // <--added this
        supply: supply, // <-- added
        completed: false,
        created: Timestamp.now()
      })
      onClose()
    } catch (err) {
      alert(err)
    }
  }
//added budget
  return (
    <Modal modalLabel='Add Project' onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} className='addTask' name='addTask'>
        <input type='text' name='title' onChange={(e) => setTitle(e.target.value.toUpperCase())} 
          value={title} placeholder='Enter title'/>
        <input type='number' name='budget' onChange={(e) => setBudget(e.target.value)} 
          value={budget} placeholder='Enter a project budget amount'/>  
        <textarea 
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter task description'
          value={description}></textarea>
          <label>Supply List</label>
          **want a repeating single box to enter each item into the project & have an updating list (will likely go on a secondary modal as a simple task list for now use Stacie's work on this). Adding the potential for uploading a pic.(possibly on a third modal in the future.) (addTask shows on modal)
          <button 
          onClick={() => setAddSupply(true)}>
          Add Supply item + (move to new modal)
        </button>
          <input type='text' name='supply' onChange={(e) => setSupply(e.target.value)} 
          value={supply} placeholder='Enter Supplies Needed'/>     
          
          <button type='submit'>Done</button>Change to next and link to second modal for supply list which links to second set of docs specifically for the stash area for later.
      </form> 
    </Modal>
  )
}

export default AddTask