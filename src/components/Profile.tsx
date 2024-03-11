type ProfileProps = {
  name: string;
  email: string;
  isActive: boolean;
  singleLine: boolean;
};

const Profile = ({ name, email, isActive, singleLine }: ProfileProps) => {
  return (
    <div
      style={{ display: "flex", flexDirection: singleLine ? "row" : "column" }}
    >
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
      <div>
        <p>{isActive ? "Active" : "Not active"}</p>
      </div>
    </div>
  );
};

export default Profile;
