import React, { useState } from "react";
import styles from "./User.module.scss";
import { Link } from "react-router-dom";

const User = ({ data }) => {
  const [inputName, setInputName] = useState("");

  // filters data through user search input and returns desired data
  const filteredSearch = data.filter((person) => {
    return person.name
      .toLowerCase()
      .includes(inputName.toLocaleLowerCase().trim());
  });

  return (
    <div className={styles.container}>
      <div className={styles.container__search}>
        <h3>Search Name</h3>
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
      </div>

      <div className={styles.container__user}>
        {filteredSearch.map((person) => (
          <Link className={styles.button} to={`/${person.id}`}>
            <h4>{person.name}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default User;
