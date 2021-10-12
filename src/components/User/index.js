import React, { useContext } from 'react';
import { Context } from '../../Context';
import { Link } from 'react-router-dom';
import './styles.scss';

//'User' component
const User = ({ fullData, name, email, phone }) => {
  const { setUserProfileData, formatPhoneNumber } = useContext(Context);

  const userOnClick = () => setUserProfileData(fullData);

  //replace spaces with underscore to prevent '%20' formatting
  const formatUserSlug = (string) => {
    return string.replaceAll(' ', '_');
  }

  return (
    <Link to={`/userProfile/${formatUserSlug(name)}`} exact='true' className='user__link link' onClick={userOnClick}>
      <div className='user col'>
        <h2>{name}</h2>
        <h3>Email: {email}</h3>
        <h3>Phone: {formatPhoneNumber(phone)}</h3>
      </div>
    </Link>
  )
}

export default User;