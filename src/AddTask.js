import Modal from './Modal';
import * as React from 'react';
import useState from 'react';
import './addTask.css';
import {db} from './firebase';
import {collection, addDoc, Timestamp} from 'firebase/firestore';

function AddTask({onClose, open}) {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('') //adding a new supply item may move to secondary modal
    const [budget, setBudget] = useState('') // <-- added

  /* function to add new task to firestore */
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await addDoc(collection(db, 'tasks'), {
        title: title,
        description: description,
        budget: budget, // <--added this
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
      <Modal modalLabel='Add Craft Project' onClose={onClose} open={open}>
      <form onSubmit={handleSubmit} className='addTask' name='addTask'>
        <input type='text' name='title' onChange={(e) => setTitle(e.target.value.toUpperCase())} 
          value={title} placeholder='Enter title'/>
        <input type='number' name='budget' onChange={(e) => setBudget(e.target.value)} 
          value={budget} placeholder='Enter a project budget amount'/>  
        <textarea 
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter task description'
          value={description}></textarea>
                   
        <button type='submit'>Done</button>
      </form> 
    </Modal>
      )
    };

export default AddTask