import { useEffect, useState } from "react";
import { BaseProps } from "../types";

const SERVER_URL = "http://localhost:8000/users";
const DELAY = 500;

type User = { id: number; name: string };

//Utility function to fetch a user from the server
function fetchUser(userId: number, options?: object): Promise<User> {
  return fetch(`${SERVER_URL}/${userId}?delay=${DELAY}`, options).then((res) =>
    res.json()
  );
}

export default function FetchDemo1({ title }: BaseProps) {
  const [userId, setUserId] = useState<number>(1);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchNextUser = async () => {
    const nextUserId = user && user.id < 15 ? user.id + 1 : 1;
    setLoading(true);
    const theUser = await fetchUser(nextUserId);
    setLoading(false);
    setUser(theUser);
    setUserId(nextUserId); 
  };

  useEffect(() => {
    fetchUser(userId).then((response) => {
      setUser(response);
      setLoading(false);
    });
  }, [userId]);

  return (
    <>
      <h2>{title}</h2>
      {loading ? "Loading..." : user ? JSON.stringify(user) : "User not found."}
      <br />
      <button onClick={fetchNextUser} disabled={loading}>
        Next User
      </button>
    </>
  );
}
