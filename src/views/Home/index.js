import React from 'react';

import './styles.scss';

const Home = () => {
 return (
 <div className="home">
   <div className="container">
    <div className="task">
     <h1>Zak's Frontend developer test</h1>

    <strong>Estimated time</strong>
    <p>The test took me about 1 hour (plus 15 minutes of procrasination)</p>
    <p>I didn't know what to do with this page so i decided to put extra information on how i found the test</p>

    <strong>Background info</strong>
    <p>I created a custom fetch/axios hook called useAxios.js in src folder so i can reuse the fetch code without having to type the same block of code again</p>
    
    
    <strong>Task</strong>
      <p>Page is fully responsive. </p>
      <p>A Search is added so the user can filter through the data via searches</p>


    <strong>Requirements</strong>
    <ul>
      <li>Needs to be responsive ✓</li>
      <li>Code should be commented where it makes sense to do so or should include a readMe ✓</li>
      <li>Follow best practices ✓</li>
    </ul>

    <strong>Bonus</strong>
    <ul>
      <li>
        Add back button from user profile ✓
      </li>
      <li>
        Add simple search functionality to list of users ✓
      </li>
      <li>
        Improve the original code / directory structure (subject to interpretation but i think ✓)
      </li>
    </ul>
    </div>
   </div>
 </div>
 );
}

export default Home;