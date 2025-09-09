import { useNavigate, NavLink, Link } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const goToUserPush = () => {
    navigate("/profile/3", { state: { from: "Profile (PUSH)" } });
  };

  const goToUserReplace = () => {
    navigate("/profile/2", { state: { from: "Profile (REPLACE)" }, replace: true });
  };

  return (
    <div>
      <h2>Profile</h2>
      <button onClick={goToUserPush} style={{ marginRight: "10px" }}>
        Go to UserDetails (PUSH)
      </button>
      <button onClick={goToUserReplace}>Go to UserDetails (REPLACE)</button>
      <h3>Example Users</h3>
      <ul>
        <li>
          <Link to="/profile/9" state={{ from: "Profile - Good Example" }}>Glenna Reichert</Link>
        </li>
        <li>
          <Link to="/profile/10" state={{ from: "Profile - Good Example" }}>Clementina DuBuque</Link>
        </li>
        <li>
          <Link to="/profile/4" state={{ from: "Profile - Good Example" }}>Patricia Lebsack</Link>
        </li>
        <li>
          <Link to="/profile/98989898" state={{ from: "Profile - Bad Example" }}>Unknown User</Link>
        </li>
      </ul>
      <p>
        <NavLink to="/settings">Go to Settings</NavLink>
      </p>
    </div>
  );
}