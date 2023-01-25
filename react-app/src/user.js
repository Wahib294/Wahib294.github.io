import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const AsyncAwait = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })));
    };
    getUsers();
  }, []);
  return (
    <div class="names">
      {users.map((user) => {
        return (
          <center>
            <h1>
              {user.name} : {user.rating}
            </h1>
          </center>
        );
      })}
    </div>
  );
};
export default AsyncAwait;

// Get all the users from the database and return them  in div class="names"
