import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../Context';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import arrowLeftIcon from '../../res/arrow-left.svg';
import userPlaceholderImage from '../../res/user-placeholder-image.png';
import './styles.scss';

//'UserProfile' page/view
const UserProfile = () => {
    const { userProfileData, formatPhoneNumber } = useContext(Context);
    const [userImage, setUserImage] = useState(null);

    //fetching sample user images from jsonplaceholder api
    const fetchUserImages = async (userId) => {
        try {   
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos`);
            const data = await response.json();
            setUserImage(data.find(curr => curr.id === userId).thumbnailUrl);
        } catch(error){
            console.log(error);
        }
    }

    //if 'userProfileData' is truthy, fetch their image based on their id
    useEffect(() => {
        if(userProfileData) fetchUserImages(userProfileData.id);
    }, [userProfileData])

    return (
        <div className='page userProfile fw'>
            {
                userProfileData ?
                <div className='userProfile__wrapper col'>
                    <div className='page__section--small col'> 
                        <img src={userImage ? userImage : userPlaceholderImage} alt='user-image' className='userProfile__img'/>
                        <h1>{userProfileData.name}</h1>
                    </div>  

                    <div className='page__section--medium userProfile__grid fw'>
                        <h2>Company: {userProfileData.company.name}</h2>
                        <h2>Catchphrase: <span style={{fontStyle: 'italic'}}>"{userProfileData.company.catchPhrase}"</span></h2>
                        <h2>Address: {userProfileData.address.street}, {userProfileData.address.city}</h2> 
                        <h2>Zip-Code: {userProfileData.address.zipcode}</h2>
                        <h2>Phone: {formatPhoneNumber(userProfileData.phone)}</h2>
                        <h2>Email: {userProfileData.email}</h2>
                        <h2>Website: {userProfileData.website}</h2>
                        <h2>Username: {userProfileData.username}</h2>
                    </div>

                    <Link to='/users' className='userProfile__link link row'>
                        <img src={arrowLeftIcon} alt='arrow-left'/>

                        <h3>Back to Users</h3>
                    </Link>
                </div> :
                <Loading/>
            }
        </div>
    )
}

export default UserProfile;