import React, { useEffect, useState } from "react";

const AsyncAwait = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://chess-70d1d-default-rtdb.asia-southeast1.firebasedatabase.app/user.json"
    );
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default AsyncAwait;
