import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"


import { addUser } from "../redux/userSlice"


const Add = () => {
   const [name, setName] = useState('')
   const [email, setEmail] = useState('')

   const users = useSelector((state) => state.users)

   const navigate = useNavigate()

   const dispatch = useDispatch()


   const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addUser({id: users[users.length - 1].id + 1, name, email}))   
    navigate('/')   
    
   }


  return (
    <div className="container-sm ">
    <h1>Add Record</h1>
    <br />
    <form onSubmit={handleSubmit}>
    
    <div className="mb-3">
    <label className="form-label">Name</label>
    <input type="text" className="form-control" name="name"  onChange={(e) => setName(e.target.value)}/>
    
  </div>
  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control" name="email"  onChange={(e) => setEmail(e.target.value)}/>
    
  </div>
  
  
  <button type="submit" className="btn btn-primary">Add</button>
  &nbsp; 
  <Link to="/" type="submit" className="btn btn-secondary">Cancle</Link>
</form></div>
  )
}

export default Add