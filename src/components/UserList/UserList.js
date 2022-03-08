import React from "react";
import "./UserList.css";
import * as Icon from "react-feather";
import { Pagination } from "../Pagination/Pagination";

export const UserList = (props) => {
  return (
    <>
      <table>
        {/* headings of userlist */}
        <thead>
          <tr className="headRow">
            <th className="col-1">Name</th>
            <th>Status</th>
            <th>Access</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* showing UsersList */}
          {props.users.map((user, index) => {
            return (
              <>
                {/* first row for owner */}
                {index === 0 && (
                  <tr key={index}>
                    <td className="userDetailsWrapper">
                      <img
                        className="profileImg"
                        src={user.avatar}
                        alt="owner_avatar"
                      />
                      <span className="userName">
                        {user.first_name + " " + user.last_name}
                      </span>
                      <span className="userEmail">{user.email}</span>
                    </td>
                    <td style={{ color: "#04AA6D", fontWeight: "700" }}>
                      Active
                    </td>
                    <td>Owner</td>
                    <td>
                      <Icon.Lock
                        size={18}
                        style={{ color: "rgba(0, 0, 0, 0.6)" }}
                      />
                    </td>
                  </tr>
                )}
                {/* other users row */}
                {index !== 0 && (
                  <tr
                    key={index}
                    onMouseEnter={() => {
                      props.handleHover(user);
                    }}
                    onMouseLeave={() => {
                      props.handleHover(null);
                    }}
                  >
                    <td className="userDetailsWrapper">
                      <img
                        className="profileImg"
                        src={user.avatar}
                        alt="owner_avatar"
                      />
                      <span className="userName">
                        {user.first_name + " " + user.last_name}
                      </span>
                      <span className="userEmail">{user.email}</span>
                    </td>
                    <td className="">
                      <select className="selectMenu">
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </td>
                    <td className="">
                      <select className="selectMenu">
                        <option value="Manager">Manager</option>
                        <option value="Read">Read</option>
                      </select>
                    </td>
                    <td className="">
                      <Icon.Trash2
                        size={18}
                        style={{ color: "rgba(0, 0, 0, 0.6)" }}
                      />
                    </td>
                  </tr>
                )}
              </>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4} className="paginationWrapper">
              <Pagination paginationItems={props.paginationItems} />
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
