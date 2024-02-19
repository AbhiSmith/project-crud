
import { Link, useNavigate } from "react-router-dom"

import { useDispatch, useSelector} from "react-redux"
import { removeUser } from "../redux/userSlice"

const Home = () => {
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const navigat = useNavigate()

   const handledelet = (id) => {
    
    dispatch(removeUser({id:id})) 
       navigat('/')

   }
    
  return (
        <div className="container ">
            <div className="mt-10 ">
                <h1>CRUD Operation using Redux</h1>
                <Link to='/add' className="btn btn-primary">Add+</Link>
            </div>
            <table className="table">
    <thead>
        <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Action</th>
        </tr>
    </thead>
    <tbody>
        {users.map((user, index) => (
            <tr key={index}>
                <th>{user.id}</th>
                <th>{user.name}</th>
                <th>{user.email}</th>
                <th>
                    <Link to={`/update/${user.id}`} className="btn btn-sm btn-secondary">Edit</Link>                     
                    <button onClick={() => handledelet(user.id)} className="btn btn-sm btn-danger m-2">Delete</button>
                </th>
            </tr>
        ))}
            
    </tbody>
        </table>
        </div>
  )
}

export default Home