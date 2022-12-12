import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser, updateUsername } from './features/Users';

export default function App() {

  const dispatch = useDispatch();
  const userList = useSelector(state => state.users.value)

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  return (
    <div className='App'>
      {" "}
      <div className='addUser'>
        <input
          type='text'
          placeholder='Name...'
          onChange={(event) => {setName(event.target.value)}}
        />
        <input
          type='text'
          placeholder='Username...'
          onChange={(event) => {setUsername(event.target.value)}}
        />
        <button
          onClick={() => {dispatch(addUser({
            id: userList[userList.length - 1].id + 1,
            name,
            username,
          }))}}
        >
          {" "}
          Add user
        </button>
      </div>
      <div className='displayUsers'>
        {userList.map((user) => {
          return (
            <div key={user.id}>
              <p>{user.name}</p>
              <p>{user.username}</p>
              <input
                type='text'
                placeholder='New username...'
                onChange={(event) => {setNewUsername(event.target.value)}}
              />
              <button
                onClick={() => {dispatch(updateUsername({ id: user.id, username: newUsername }))}}
              >
                {" "}
                Update username
              </button>
              <button
                onClick={() => {dispatch(deleteUser({ id: user.id }))}}
              >
                Delete user
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
