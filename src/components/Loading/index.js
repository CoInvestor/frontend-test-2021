import React from 'react';
import loadingSpinner from '../../res/loading-spinner.gif';
import './styles.scss';

//'Loading' component
const Loading = () => {
    return (
        <div className='loadingSpinner row'>
            <h1>Loading Data...</h1>
            <img src={loadingSpinner} alt='loading-spinner'/>
        </div>
    )
}

export default Loading;