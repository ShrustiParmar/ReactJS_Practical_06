import React, { useEffect, useState } from "react";
import "./UserListCardWrapper.css";
import { UserList } from "../UserList/UserList";
import UserProfileCard from "../UserProfileCard/UserProfileCard";

export const UserListCardWrapper = () => {
  // this hook hold the user details object while hover over respective user
  const [user, setUser] = useState(null);

  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [paginationItems, setPaginationItems] = useState([]);
  const makeHttpRequestWithPage = async (pageNumber) => {
    let response = await fetch(
      `https://reqres.in/api/users?page=${pageNumber}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const userData = await response.json();
    setUsers(userData.data);
    setUserDetails(userData);
  };

  useEffect(() => {
    makeHttpRequestWithPage(1);
  }, []);

  useEffect(() => {
    const pageNumbers = [];
    let totalUsers = userDetails.total;
    let perPageUsers = userDetails.per_page;
    for (let i = 1; i <= Math.ceil(totalUsers / perPageUsers); i++) {
      pageNumbers.push(i);
    }
    const items = pageNumbers.map((number) => {
      return (
        <span
          key={number}
          onClick={() => {
            makeHttpRequestWithPage(number);
          }}
        >
          {number}
        </span>
      );
    });
    setPaginationItems(items);
  }, [userDetails]);

  return (
    <section>
      <div className="container">
        <div className="userListCardWrapper">
          {/* <UserList/> component which contain user list */}
          <UserList
            users={users}
            handleHover={(user) => {
              setUser(user);
            }}
            paginationItems={paginationItems}
          />
          {/* <UserProfileCard /> component which contain user details in card */}
          <UserProfileCard user={user} />
        </div>
      </div>
      <p>Project is running on <b>{process.env.REACT_APP_ENV}</b></p>
    </section>
  );
};
