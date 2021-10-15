import React, { useState } from "react";
import styles from "./User.module.scss";

const User = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__user}>
        {data.map((person) => (
          <a href="">
            <h4>{person.name}</h4>
          </a>
        ))}
      </div>
    </div>
  );
};

export default User;
