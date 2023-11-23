import { useEffect, useState } from "react";
import "./App.css"

 function App() {

 const [ users, setUsers ] = useState([]);
 const [ input, setInput ] = useState("");

 
 useEffect(() => {
   const fetchdata = async () => {
 
       const response = await fetch(
         'https://jsonplaceholder.typicode.com/users');
          const data = await response.json();

          setUsers( data.slice( 0,10) )
      
   }
 
 
   fetchdata();
}, []);
 
 return (
   <div className="App">
     <h1>List of users</h1>
     <div className="search">
      <input type="text" onChange={(e)=>setInput(e.target.value)}value={input}/>
     </div>
     <table>
       <thead>
         <tr>
           <th>Id</th>
           <th>Name</th>
           <th>Username</th>
           <th>E-mail</th>
           <th>Phone</th>
          

         </tr>   
       </thead>   
       <tbody>
         {
          
         users.map( (user,key) =>
        {if(user.name.toLowerCase().includes(input.toLowerCase()) || user.username.toLowerCase().includes(input.toLowerCase()) ||user.email.toLowerCase().includes(input.toLowerCase())){
          return (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>

 </tr>   
          )
        }
        
        
        }
             

             
        
         )
       }
       </tbody>
     </table>
   </div>
 );
}
export default App