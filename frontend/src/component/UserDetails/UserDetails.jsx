import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../User/User";

const URL = "http://localhost:5000/users";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const UserDetails = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchHandler().then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Display User Details</h1>

      <div>
        {users &&
          users.map((user, i) => (
            <div key={i}>
              <User user={user} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserDetails;
