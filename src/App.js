import React, {useState} from "react";

import NewUser from "./components/User/NewUser";
import UserList from './components/User/UserList'
import './app.css'

function App() {
  const [users, setUsers] = useState([])

  const addUserObject = (user) => {
    setUsers((previousUsersArray) => {
      return [...previousUsersArray, user]
    })
  }
  
  return (
    <div>
      <NewUser addUserObject={addUserObject}/>
      <UserList users={users}/>
    </div>
  );
}

export default App;
