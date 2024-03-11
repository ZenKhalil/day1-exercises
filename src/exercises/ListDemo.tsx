import { useState, useEffect } from "react";
import { User, users as usersFromData } from "../data/data"; // Adjust the relative path as necessary
import UserTable from "../components/UserTable"; // Adjust the relative path as necessary
import { BaseProps } from "../types"; // Adjust the relative path as necessary

type Props = BaseProps;

export default function ListDemo({ title }: Props) {
  // Now 'User' type is known here
  const [users, setUsers] = useState<User[]>([]);

  // Define a placeholder editUser function
  const editUser = (userId: number) => {
    console.log("Edit user with ID:", userId);
    // Implement the logic for editing the user here
  };

  // Fetch users when the component mounts
  useEffect(() => {
    setUsers(usersFromData);
  }, []);

  return (
    <>
      <h2>{title}</h2>
      {/* Render all users in a table */}
      <UserTable users={users} editUser={editUser} />
    </>
  );
}
