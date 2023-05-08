import { useEffect, useState } from "react";
import axios from "axios";

export const Header = () => {
  return (
    <div>
      <h1>Doggr</h1>
      <h3>Where your pets find love(tm)</h3>
      <br />
    </div>
  );
};

export const Button = () => {
  const [clicks, setClicks] = useState(0);
  const [users, setUsers] = useState();

  useEffect(() => {
    const getUsers = async () => {
      const usersRes = await axios.get("http://localhost:8080/users");
      setUsers(usersRes.data);
    };

    getUsers();
  }, [clicks]);

  return (
    <button
      onClick={() => {
        console.log("clicked");
        setClicks(clicks + 1);
      }}
    >
      Clicks: {clicks}
    </button>
  );
};
