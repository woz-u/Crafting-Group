import Modal from "./Modal"
import './all.css'

function TaskItem({onClose, open, title, description}) {

  return (
    <Modal modalLabel='Task Item' onClose={onClose} open={open}>
      <div className='taskItem'>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Modal>
  )
}

export default TaskItem
