import React,{useState} from "react"
import classes from "./AddUsers.module.css";
import Card from "../UI/Card"
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
const AddUser = props =>  {
   const [enteredUserName,setEntertedUserName] = useState(''); 
   const [enteredAge,setEntertedAge] = useState(''); 
   const [error,setError] =  useState();

    const addUserHandler = (event) => {
           event.preventDefault();
           if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values).' 
            });
            return;
           }

           if(+enteredAge < 1){
            setError({
                title: 'Invalid Age',
                message: 'Please enter a valid age (> 0).' 
            });
            return;
           }
           props.onAddUser(enteredUserName,enteredAge);

           console.log(enteredUserName,enteredAge);
           setEntertedAge('');
           setEntertedUserName('');
    }   

    const usernameChangedHandler = (event) =>{
        setEntertedUserName(event.target.value);
    };

    
    const ageChangedHandler = (event) =>{
        setEntertedAge(event.target.value);
    };

    const errorHandler = () => {
        setError(null);
    }

   return (
    <div>
        {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModel>}
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredUserName} onChange={usernameChangedHandler}></input>
        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangedHandler}></input>  
        <Button type="submit">Add User</Button>  
    </form></Card>
    </div>
    )
};


export default AddUser;
