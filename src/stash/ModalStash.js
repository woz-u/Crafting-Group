import './modalStash.css'
//leave this one alone
function ModalStash({open, modalStashLabel, children, custom_Stashmodal, onClose}) {

  const handleClose = (e) => {
    if(e.target.className === 'modalStashContainer'){
      onClose()
    }
    return null
  }

  if(open) {
    return (
      <div className='modalStashContainer' onClick={handleClose}>
        <div className= {`modal ${custom_Stashmodal}`}>
          <div className='modal__head'>
            <h2>{modalStashLabel}</h2>
            <span className='modal__close' onClick={onClose}>x</span>
          </div>
          {children}
        </div>
      </div>
    )
  }
  return null
}

export default ModalStash