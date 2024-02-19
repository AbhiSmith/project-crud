import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link, useParams } from "react-router-dom";
import { useState } from 'react';
import { updateUser } from '../redux/userSlice';
import { useDispatch } from 'react-redux';

const Update = () => {
  const {id} = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.find((user) => user.id == id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Check if existingUser is defined before accessing its properties
  const initialName = existingUser ? existingUser.name : '';
  const initialEmail = existingUser ? existingUser.email : '';

  const [updateName, setName] = useState(initialName);
  const [updateEmail, setEmail] = useState(initialEmail);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(updateName, updateEmail);
    dispatch(updateUser({id: id, name: updateName, email: updateEmail})); 
    navigate('/');

  }
  
  return (
    <div className="container-sm ">
      <h1>Update Record</h1>
      <br />    
      <form onSubmit={handleUpdate}> 
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" name="name" value={updateName} onChange={(e) => setName(e.target.value)}/>      
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" name="email"  value={updateEmail} onChange={(e) => setEmail(e.target.value)}/>      
        </div>
      
        <button type="submit" className="btn btn-primary">Update</button>&nbsp;    
        <Link to='/' type="submit" className="btn btn-secondary">Cancel</Link>
      </form>
    </div>
  );
}

export default Update;
