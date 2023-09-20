import React, { useContext, useEffect, useState } from 'react';
import { v4 as uuid } from "uuid"; 
import "./Home.css";
import { useDispatch } from 'react-redux';
import { addUser } from '../../Slices/userSlice';

const Home = () => {

  const dispatch = useDispatch();
  
  const [userInfo, setUserInfo] = useState({
    id:"",
    name:"",
    email:"",
    contact:"",
    age:"",
    jobRole:"",
  });

  useEffect(()=>{
    setUserInfo((currInfo)=>{
      return {
        ...currInfo,
        id: uuid(),
      };
    });
  }, []);

  const handleChange = (event) => {
    const {name, value} = event.target;
    setUserInfo((currInfo) => {
      return {
        ...currInfo,
        [name]: value,
      };
    });
  };

  const add = () => {
    if(
      userInfo.name === "" || 
      userInfo.email === "" ||
      userInfo.contact === "" ||
      userInfo.age === "" ||
      userInfo.jobRole === ""
      ) {
        alert("Please enter all datails");
        return;
      }
      // add user action fn dispatch
      dispatch(addUser(userInfo));
    setUserInfo({
      id: uuid(),
      name: "",
      email: "",
      contact: "",
      age: "",
      jobRole: "", 
    })
  };

  return (
    <div className="home">
      <div className="home_container">
        <div className="home_formContainer">
          <h1 className="home_title">Add User Information</h1>
          <input 
            type="text" 
            placeholder="Enter users Id" 
            disabled 
            value={userInfo.id}
          />
          <br/>
          <input
            type="text"
            name="name"
            placeholder="Enter user's name"
            value={userInfo.name}
            onChange={handleChange}
          />
          <br/>
          <input
            type="email"
            name="email"
            placeholder="Enter user's email"
            value={userInfo.email}
            onChange={handleChange}
          />
          <br/>
          <input
            type="number"
            name="contact"
            placeholder="Enter user's contact no"
            value={userInfo.contact}
            onChange={handleChange}
          />
          <br/>
          <input
            type="number"
            name="age"
            placeholder="Enter user's age"
            value={userInfo.age}
            onChange={handleChange}
          />
          <br/>
          <input
            name="jobRole"
            placeholder="Enter user's role"
            value={userInfo.jobRole}
            onChange={handleChange}
          />
          <br/>
          <button className="btn" onClick={add}>Add User</button>
        </div>
      </div>
    </div>
  )
}

export default Home;