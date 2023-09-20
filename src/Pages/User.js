import React from 'react';
import {useParams} from "react-router-dom";

const User = () => {

    const { username } = useParams();

  return (
    <div>
        <h1>{username}</h1>
    </div>
  )
}

export default User;