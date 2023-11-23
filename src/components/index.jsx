import React from 'react'
import { useEffect } from 'react'

function index() {
    const [users, setUsers] = useState([])
useEffect(()=>{
    const fetchdata = async () =>{
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json();
        setUsers(data.slice(0,10))
    }
    fetchdata
},[])


  return (
    <div className="App">
     <h1>List of users</h1>
     <table>
       <thead>
         <tr>
           <th>Id</th>
           <th>Name</th>
           <th>Username</th>
           <th>E-mail</th>
           <th>Phone</th>
           <th>Website</th>

         </tr>   
       </thead>   
       <tbody>
         {
         users.map( (user,key) =>
         <tr key={key}>
             <td className='table-data'>{user.id }</td>
             <td className='table-data'>{user.name }</td>
             <td className='table-data'>{user.username }</td>
             <td className='table-data'>{user.email }</td>
             <td className='table-data'>{user.phone }</td>
             <td className='table-data'>{user.website }</td>
             

             
         </tr>
         )
       }
       </tbody>
     </table>
   </div>
 );
}
  


export default index