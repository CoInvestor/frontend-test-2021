import React from 'react';
import User from '../../components/User';
import useAxios from '../../useAxios';

const Users = () => {
  // custom axios hook
  const {data, error, isLoading} = useAxios('https://jsonplaceholder.typicode.com/users')

  return (
    <div>
     { isLoading && <h1>Loading...</h1>} 
     { error && <div>{error }</div> }
     <User data={data} />
    </div>
  )
}

export default Users;