import { useState } from "react";
import { User, users as usersFromDB } from "../data/data";
import UserTable from "../components/UserTable"; // Assuming UserTable is the default export of UserTable.tsx
import UserForm from "../components/UserForm";
import { BaseProps } from "../types";

type Props = BaseProps;

export default function StateDemo3({ title }: Props) {
  const [users, setUsers] = useState<User[]>(usersFromDB || []);

  // Function to determine the next user ID
const getNextId = (users: User[]): number => {
  return users.reduce((maxId, user) => Math.max(maxId, user.id ?? 0), 0) + 1;
};

  // Handler for submitting a new user
  const onSubmitUser = (newUser: User) => {
    newUser.id = getNextId(users); // Ensure newUser has an id
    setUsers([...users, newUser]); // Add the newUser to the state
  };

  // Handler for editing a user
  const handleEditUser = (userId: number) => {
    // Here, you would typically set some state related to the user being edited,
    // which could then be used to populate a form or similar.
    console.log("Edit user with id:", userId);
  };

  return (
    <>
      <h2>{title}</h2>
      <UserTable users={users} editUser={handleEditUser} />
      <UserForm title="Add User" onSubmitUser={onSubmitUser} />
    </>
  );
}
