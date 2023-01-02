import React,{useState} from 'react';
import AddUser from './componenets/Users/AddUsers';
import UsersList from './componenets/Users/UserList';
function App() {
  const [usersList,setUsersList] = useState([]);

  const addUserHandler = (uName,uAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList,{name:uName,age:uAge,id:Math.random().toString()}];
    });
  }; 

  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
