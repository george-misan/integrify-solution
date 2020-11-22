import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./UserDetail.css";

export default function UserDetail(props) {
  const userId = props.match.params.id;
  const [user, setUser] = useState({});

  useEffect(() => {
    getUserDetail(userId);
  }, []);

  async function getUserDetail(userId) {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const data = await res.json();

      setUser(data);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <>
      <Link to="/">Go Back</Link>
      <div className="wrapperDetails border p-5">
        <ul>
          <li>name: {user.name}</li>
          <li>username: {user.username}</li>
          <li>email: {user.email}</li>
          <li>phone: {user.phone}</li>
          <li>company: {user.company.name}</li>
          <li>website: {user.website}</li>
          <li>
            address:
            <ul>
              <li>street: {user.address.street}</li>
              <li>suite: {user.address.suite}</li>
              <li>city: {user.address.city}</li>
              <li>zipcode: {user.address.zipcode}</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
