import './taskManager.css'
import Task from './Task'
import React, {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from './firebase'
import AddTask from './AddTask'
// import {header, footer} from '../components'
// import signinout from '../components'

function TaskManager() {
  
  const [openAddModal, setOpenAddModal] = useState(false)
  const [tasks, setTasks] = useState([])

  /* function to get all tasks from firestore in realtime */ 
  useEffect(() => {
    const taskColRef = query(collection(db, 'tasks'), orderBy('created', 'desc'))
    onSnapshot(taskColRef, (snapshot) => {
      setTasks(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  },[])
// controls the list page or dashboard
// after opening header tag is all the code for the header nav would like to replace it with a simple call to a header file
// need both header and footer to be horizontal
// home goes to a brief home page
// login goes to a pop up 
// need register page for name, google creds so goes into database
// replace orders with an about page
  return (
    <div className='taskManager'>
        <header>Craft Project
        <div className="px-3 py-2 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
              <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
            </a>

            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <a href="#" className="nav-link text-secondary">
                  <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-white">
                  <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-white">
                  <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                  Orders
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-white">
                  <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-white">
                  <svg className="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                  Customers
                </a>
              </li>
            </ul>
          </div>
        </div>
        </div>
        <div className="px-3 py-2 border-bottom mb-3">
        <div className="container d-flex flex-wrap justify-content-center">
          <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-light text-dark me-2">Login</button>
            <button onclick = "googleSignin()">Google Signin</button>
            <button onclick = "googleSignout()">Google Signout</button>
            <button type="button" class="btn btn-primary">Sign-up</button>
          </div>
        </div>
        </div>
        </header>
        <div className='taskManager__container'>
          <button 
            onClick={() => setOpenAddModal(true)}>
            Add Project +
          </button>
          <div className='taskManager__tasks'>

            {tasks.map((task) => (
              <Task
                id={task.id}
                key={task.id}
                completed={task.data.completed}
                title={task.data.title} 
                budget={task.data.budget} // <--added this one
                description={task.data.description}

              />
            ))}

          </div>
        </div>

      {openAddModal &&
        <AddTask onClose={() => setOpenAddModal(false)} open={openAddModal}/>
      }

    <footer class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
      </ul>
      <p class="text-center text-muted">© 2022 Company, Inc</p>
    </footer>
    </div>
  )
}
 
  
export default TaskManager