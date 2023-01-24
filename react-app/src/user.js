import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const AsyncAwait = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  useEffect(() => {
    const getUsers = async () => {
      const response = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((docs) => ({ ...docs.data(), id: docs.id })));
    };
    getUsers();
  }, []);
  return (
    <div class="names">
      {users.map((user) => {
        return (
          <div>
            <h1>{user.name}</h1>
            <h3>{user.rating}</h3>
          </div>
        );
      })}
    </div>
  );
};
export default AsyncAwait;
