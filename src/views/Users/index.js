import React, { useEffect, useState } from 'react';

import axios from 'axios';

//import User from '../../components/User';

const Users = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // grab this data / loop through and output individual User component for each object
        console.log(response.data);
      })
      .catch(err => {
        // Do something
      })
  }, []);

  return isLoading && (
     <h1>Loading...</h1>
  )
}

export default Users;