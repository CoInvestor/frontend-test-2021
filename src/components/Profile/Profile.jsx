import React from "react";
import { useParams } from "react-router";
import useAxios from "../../useAxios";
import styles from "./Profile.module.scss";

const Profile = () => {
  const { id } = useParams();

  // custom axios hook
  const { data, error, isLoading } = useAxios(
    "https://jsonplaceholder.typicode.com/users/" + id
  );

  console.log(data);
  return (
    <div>
      <p>Profile</p>
    </div>
  );
};

export default Profile;
