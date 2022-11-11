import React, { useEffect, useState } from 'react';
import Users from './components/Users';

const App = () => {
 const url = 'https://jsonplaceholder.typicode.com/users';
  // step1 : declare three states here : users, isLoading, error
  const [users, setUsers]= useState()
  const [isLoading, setIsloading]= useState(true)
  const [error, setError] = useState('')

  


  // step2 : use useEffect for fetching the data including updating isLoading and error states
  useEffect(() => {
    fetch(url).then((response)=>{
      return response.json()
    }).then((data) => {
      setUsers(data);
      console.log(data)
      setIsloading(false)
    })
    .catch((error) =>{
      setError(error);
    })
  }, [])

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}
      {/* step3 : pass the users data to Users component  */}
      <Users users={users}/>

    </div>
  );
};

export default App;
