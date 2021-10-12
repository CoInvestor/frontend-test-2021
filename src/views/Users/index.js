import React, { useEffect, useState } from 'react';
import axios from 'axios';
import User from '../../components/User/index';
import Loading from '../../components/Loading/index';
import './styles.scss';

const Users = () => {
  //'userData' will remain constant, whilst 'userDataShown' will be the shown filtered results from a searchbar 'searchQuery'
  const [userData, setUserData] = useState(null);
  const [userDataShown, setUserDataShown] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  //'.includes()' method is case sensitive, so matching strings by converting everything to lowercase
  const formatStringToLowercase = (string) => {
    return string.toLowerCase();
  }

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUserData(response.data);
        setUserDataShown(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  //if 'searchQuery' is not an empty string, show filtered 'userData' for matching part of name, otherwise show original 'userData'
  useEffect(() => {
    searchQuery !== '' ? 
    setUserDataShown(userData.filter(curr => formatStringToLowercase(curr.name).includes(formatStringToLowercase(searchQuery)))) : 
    setUserDataShown(userData);
  }, [searchQuery]);

  return (
    <div className='page'>
      <div className='page__section--small col'>
        <h1>Search for a user</h1>
        <input type='text' placeholder="Search for a User's name..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className='searchbar'/>
      </div>

      <div className='users row'>
        {
          userDataShown ?
          userDataShown.map((curr, index) =>
            <User
              key={index}
              fullData={curr}
              name={curr.name}
              email={curr.email}
              phone={curr.phone}
            />
          ) :
          <Loading/>
        }
      </div>
    </div>
  )
}

export default Users;