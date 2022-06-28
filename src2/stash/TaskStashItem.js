import ModalStash from "./ModalStash"
import './taskStashItem.css'

function TaskItemStash({onClose, open, titleStash, descriptionStash}) {
//add more fields
  return (
    <ModalStash modalLabel='Task Stash Item' onClose={onClose} open={open}>
      <div className='taskStashItem'>
        <h2>{titleStash}</h2>
        <p>{descriptionStash}</p>
      </div>
    </ModalStash>
  )
}

export default TaskItemStash