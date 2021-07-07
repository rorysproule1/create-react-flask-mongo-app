import React, { useState, useEffect } from "react";
import axios from "axios";

export default function User() {
  const [users, setUsers] = useState();
  const [usersError, setUsersError] = useState();

  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [address, setAddress] = useState();

  useEffect(() => {
    getUsers();
  }, []); // When the component is first rendered, get all the users

  function getUsers() {
    axios
      .get("/api/user")
      .then((response) => {
        setUsers(response.data[0]); // only want the user data (not the response code at [1])
        setUsersError(false);
        console.log(response.data[0]);
      })
      .catch((error) => {
        setUsersError(true);
        console.log(error);
      });
  }

  function deleteUser(userId) {
    axios
      .delete("/api/user/" + userId)
      .then((response) => {
        // update list of users
        getUsers();
      })
      .catch((error) => {
        alert("There was an error when deleting this user");
        console.log(error);
      });
  }

  function createUser() {
    const user_data = {
        name: name,
        age: age,
        address: address,
    }

    axios
      .post("/api/user", user_data, {})
      .then((response) => {
        // update list of users
        getUsers();
      })
      .catch((error) => {
        alert("There was an error when creating this user");
        console.log(error);
      });
  }

  return (
    <React.Fragment>
      <h1>User List:</h1>

      {/* Error message if GET request fails */}
      {usersError && <p>There was an error getting the users.</p>}

      {/* Display users if they exist */}
      {users && users.length > 0 && (
        <>
          {users.map((user) => (
            <div
              style={{
                border: "1px solid",
                padding: "5px",
                marginBottom: "10px",
              }}
            >
              <p>
                User - {user.id} <br />
                {user.name} <br />
                {user.age} <br />
                {user.address} <br />
              </p>
              <button onClick={(e) => deleteUser(user.id)}>Delete</button>
            </div>
          ))}
        </>
      )}

      {/* Message if no existing users */}
      {users && users.length === 0 && (
        <p>There are no exisiting Users. Please add some.</p>
      )}

      <h1>Create User:</h1>
      <label for="name">First name:</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label for="age">Age:</label>
      <input
        type="number"
        id="age"
        name="age"
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <label for="address">Address:</label>
      <input
        type="text"
        id="address"
        name="address"
        onChange={(e) => setAddress(e.target.value)}
      />
      <br />
      <button onClick={(e) => createUser()}>Create User</button>
      <br />
    </React.Fragment>
  );
}
