import Modal from "./Modal"
import './taskItem.css'
// import {HEADER, FOOTER, BREADCRUMB, PAGINATION, SIDENAV, SIGNINOUT} from '../components'

function TaskItem({onClose, open, title, budget, description, supplies}) {
//added budget
  return (
    <Modal modalLabel='Project' onClose={onClose} open={open}>
      <div className='taskItem'>
        <h2>{title}</h2>
        <p>Image on taskItem?view item</p>
        <p>{description}</p>
        <p>${budget}</p>
        <p>{supplies}</p>
      </div>
    </Modal>
  )
}

export default TaskItem