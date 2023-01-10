import React from 'react';
import { useState } from 'react';
// import axios from "axios";
import axios from '../utils/axiosConfig';

function CreatePost() {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    const res = await axios.get('/api/auth/all');
    console.log(res.data);
    setUsers(res.data.allUser);
  };
  return (
    <div>
      <h2>Get all users</h2>
      {users.length > 0 &&
        users.map((user) => <img alt="something" src={user.userPic} />)}
      <button onClick={getAllUsers}>Get all users</button>
    </div>
  );
}

export default CreatePost;
