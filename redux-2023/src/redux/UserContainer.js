import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./customer/customerActions";
function UserContainer(props) {
  useEffect(() => {
    props.fetchUsers();
  }, []);
  return props.userData.loading ? (
    <h2>loading...</h2>
  ) : props.userData.error ? (
    <h2>{props.userData.error}</h2>
  ) : (
    <div>
      <h2>Users</h2>
      <div>
        {props.userData &&
          props.userData.users &&
          props.userData.users.map((user) => (
            <div>
              <h3 key={user._id}>
                Name: {user.firstName} {user.lastName}
              </h3>
              <p key={user._id}>Email: {user.email}</p>
              <p key={user._id}>Salary: {user.salary}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.customer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
