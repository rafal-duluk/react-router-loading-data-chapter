import { useLoaderData, useLocation } from "react-router-dom";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

function UserDetails() {
  const user = useLoaderData() as User;
  const location = useLocation();

  return (
    <div>
      <h2>User Details</h2>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      {location.state && (
        <p>
          <em>Dane state: {JSON.stringify(location.state)}</em>
        </p>
      )}
    </div>
  );
}

export default UserDetails;