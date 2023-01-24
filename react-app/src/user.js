import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const AsyncAwait = () => {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  useEffect(() => {
    const getUsers = async () => {
      const response = await getDocs(usersCollectionRef);
      console.log(response);
    };
    getUsers();
  }, []);
  return <p>K</p>;
};
export default AsyncAwait;
