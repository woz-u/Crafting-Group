import React from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'

function ModalExampleMultiple() {
    const [firstOpen, setFirstOpen] = React.useState(false)
    const [secondOpen, setSecondOpen] = React.useState(false)

    return (
        <>
            <Button onClick={() => setFirstOpen(true)}>Open first Modal</Button>

            <Modal
                onClose={() => setFirstOpen(false)}
                onOpen={() => setFirstOpen(true)}
                open={firstOpen}
            >
                <Modal.Header>Projects</Modal.Header>
                <Modal.Content image>
                    <div className='image'>
                        <Icon name='right arrow' />
                    </div>
                    <Modal.Description>
                        <form onSubmit={handleSubmit} className='addTask' name='addTask'>
                            <input type='text' name='title' onChange={(e) => setTitle(e.target.value.toUpperCase())}
                                value={title} placeholder='Enter title' />
                            <input type='number' name='budget' onChange={(e) => setBudget(e.target.value)}
                                value={budget} placeholder='Enter a project budget amount' />
                            <textarea
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder='Enter task description'
                                value={description}></textarea>
                            <button type='submit'>Done</button>
                        </form>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={() => setSecondOpen(true)} primary>
                        Proceed <Icon name='right chevron' />
                    </Button>
                </Modal.Actions>

                <Modal
                    onClose={() => setSecondOpen(false)}
                    open={secondOpen}
                    size='small'
                >
                    <Modal.Header>Stash</Modal.Header>
                    <Modal.Content>
                       
                            <>
                             <div className="container">  
                              <header className="center">
                                    <h1>Stash List</h1>
                                </header>
                            
                            <ul className="center">
                                
                                    <form className="form" >

                                        <input autofocus type="text" placeholder="Add new task..." required />

                                    </form>
                                    <button type="button" id="save" value="save" onclick="saveTask()"> Save and Submit </button>
                            </ul>
                            </div>
                      </>

                </Modal.Content>
                <Modal.Actions>
                    <Button
                        icon='check'
                        content='All Done'
                        onClick={() => setSecondOpen(false)}
                    />
                </Modal.Actions>
            </Modal>
        </Modal>
    </>
  )
}

export default ModalExampleMultiple