import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import User from '../../Components/User/User';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../Slices/userSlice';

const Users = () => {
  const users = useSelector((state)=>state.userInfo.users);

  const dispatch = useDispatch()

  const deleteUser = (id) => {
 //removeuser action fn dispatch
 dispatch(removeUser(id));
  };

  return (
    <div className="users">
      <h1 className="users_title">Users</h1>
      <div className="users_container">
        {
          users.length === 0 ? (
            <div className="users_empty">
              <h1>No found. please add some.</h1>
              <h3>
                <Link to="/">Add Users</Link>
              </h3>
            </div>
          ) : (
            users.map((user)=>{
              return (
                <User 
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  jobRole={user.jobRole}
                  age={user.age}
                  contact={user.contact}
                  email={user.email}
                  deleteUser={() => deleteUser(user.id)}
                />
              )
            })
          ) 
        }
      </div>
    </div>
  )
}

export default Users;