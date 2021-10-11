import React from 'react';

import './styles.scss';

const Home = () => {
 return (
 <div className="home">
   <div className="container">
    <div className="task">
     <h1>Frontend developer test</h1>

    <strong>Estimated time</strong>
    <p>We expect the requirements to take around 1 - 2 hours to complete but feel free to have fun with it!</p>

    <strong>Background info</strong>
    <p>We are using <a href="https://jsonplaceholder.typicode.com/">JSON Placeholder</a> to grab test data for this so it may be worth having a read about what api endpoints are available.</p>
    <p>We are using <a href="https://axios-http.com/">Axios</a> to do the base API request found inside views/Users</p>
    
    <strong>Task</strong>

      <p>Inside views/Users you will find a request to get an array of objects for users. We currently just console log out the data we get back. Use this data to output individual User components in a styled list / grid</p>
      <p>A user component should contain a user's basic details with a link through to their profile. We'll leave this down to your discretion on style.</p>
      <p>As stated above, each user component should link through to a profile page. This profile will also need to be created and hooked up using React Router logic so that they are dynamic routes for each user. This should show additional information for that specific selected user.</p>


    <strong>Requirements</strong>
    <ul>
      <li>Needs to be responsive</li>
      <li>Code should be commented where it makes sense to do so or should include a readMe</li>
      <li>Follow best practices</li>
    </ul>

    <strong>Bonus</strong>
    <ul>
      <li>
        Add back button from user profile
      </li>
      <li>
        Add simple search functionality to list of users
      </li>
      <li>
        Improve the original code / directory structure
      </li>
    </ul>
    </div>
   </div>
 </div>
 );
}

export default Home;