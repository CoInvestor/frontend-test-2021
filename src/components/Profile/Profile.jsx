import React from "react";
import { useParams } from "react-router";
import useAxios from "../../useAxios";
import { useHistory } from "react-router";
import styles from "./Profile.module.scss";

const Profile = () => {
  const { id } = useParams();
  const history = useHistory();

  // custom axios hook
  const { data, error, isLoading } = useAxios(
    "https://jsonplaceholder.typicode.com/users/" + id
  );

  return (
    <div className={styles.profile}>
      {error && <p>{error}</p>}
      {isLoading && <p>{isLoading}</p>}
      <h1>{data.name}'s Profile</h1>
      <div>
        <h4>userName:</h4>
        <p>{data.username}</p>
      </div>
      <div>
        <h4>Phone Number:</h4>
        <p>{data.phone}</p>
      </div>
      <div>
        <h4>Adress:</h4>
        {data.address && (
          <p>
            {data.address.suite}, {data.address.street}, {data.address.city}
          </p>
        )}
      </div>
      <div>
        <h4>Company:</h4>
        {data.company && <p>{data.company.name}</p>}
      </div>
      <button onClick={history.goBack}>Go Back</button>
    </div>
  );
};

export default Profile;
