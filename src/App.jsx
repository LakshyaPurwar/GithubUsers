import { useState, useEffect } from "react";
import './App.css';
import Card from "./Card/Card";
import Skeletons from "./Skeleton/Skeleton";


function App() {
  const [users , setUsers] = useState([]);
  const [heading , setHeading ] = useState('');
  const [isHeadingLoading , setIsHeadingLoading] = useState(true);
  const[isLoading , setIsLoading] = useState(true);

  const getHeading  = async ()=>{
    
    setTimeout(()=>{
      setHeading("Github  Users Profile");
      setIsHeadingLoading(false);
    },500);
  }

  const getUsers = async ()=>{
    //
    setTimeout( async ()=>{
      const response = await fetch('https://api.github.com/users');
      const data = await response.json();
      setUsers(data);
      console.log(data);
      setIsLoading(false);
    } , 3000);
    
    //If await is not put in the front , then a pending promise is returned
    //When we put await , the promise after being resolved  , the response is returned
    //Then  , the response is in json format
    //We gotta convert it into a javascript object for using
    // This too is an asynchronous function
    


  }
  console.log("components rendered twice , but why");

useEffect(()=>{

    console.log("Use effect was run");
  //Here we would want to make an api call
  //Api call is an asynchronous functionality
  //This can be handled in 2 ways : 
  //1.Using Javascript promises
  //Syntax : fetch('').then(()=>{"This is executed when the promise in pending state is fulfilled"}).then(Similarly , multiple then can be chained to handle subsequent asynchronous calls and promise returns)
  //Finally , a .catch(()=>{}) at the end can be applied to handle a failure
  //This is the more tedious method

  //The other method of handling asynchronous function calls is using async await
  //This helps make the code more readable and prevents callbackk hell
  //const response = await fetch(); , this is the format used , right
  //But , await can only be used withing an asynchronous function
  // async ()=>{} , but  , the function( callback ) we mention inside useEffect cannot be made asynchronous
  //So , what we do
  //Instead of directly doing the fetch thing inside the callback , we call another function to do the word
  //And this function can be made asynchronous

  getUsers();
  getHeading();
} ,[])


  const list = users.map((user)=>{
    return <Card img = {user.avatar_url} name={user.login} userId={user.node_id} first={1} second={2} third={3} key={user.id}/>
  });

  
  
  return <div className="App">
    {isHeadingLoading? <Skeletons type='heading'/>:<div className="heading">{heading}</div>}
    <div className="cards-container">
    {isLoading?<Skeletons type='custom'/>:list}    
    

    </div>
    
  </div>
}

export default App;
