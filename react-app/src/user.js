import React from "react";

const AsyncAwait = () => {
  const response = fetch(
    "https://chess-70d1d-default-rtdb.asia-southeast1.firebasedatabase.app/user.json"
  );
  const data = response.json();
  return (
    <div>
      {data.length > 0 && (
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default AsyncAwait;
