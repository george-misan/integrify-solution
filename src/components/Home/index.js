import React, { useEffect, useState } from "react";
import "./style.css";

import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Card() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      setUsers(data);
    } catch (err) {
      console.error(err);
    }
  }

  function getFirstChar(text) {
    return text.substring(0, 1);
  }

  return (
    <div className="wrapper App flex">
      {users.map((user, index) => (
        <div className="p-4 rounded-md shadow border w-1-4" key={user.id}>
          <div className="flexHere bg-gray h-25 w-25 rounded-full mb-20">
            <span className="font-semibold text-2xl">
              {getFirstChar(user.name)}
            </span>
          </div>
          <div className="mb-20">
            <h2 className="font-semibold">{user.name}</h2>
            <p className="font-light italic">@{user.username}</p>
            <a href={user.website}>http://{user.website}</a>
          </div>
          <Link className="btn" to={"/users/" + user.id}>
            MORE DETAILS
          </Link>
        </div>
      ))}
    </div>
  );
}
