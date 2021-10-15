import React, { useState } from "react";
import styles from "./User.module.scss";
import { Link } from "react-router-dom";

const User = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__user}>
        {data.map((person) => (
          <Link className={styles.button} to={`/${person.id}`}>
            <h4>{person.name}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default User;
