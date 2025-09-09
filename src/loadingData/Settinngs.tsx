import { Outlet, NavLink } from "react-router-dom";

function Settings() {
  return (
    <div>
      <h2>Settings</h2>
      <nav style={{ marginBottom: "1rem" }}>
        <NavLink 
          to="account" 
          style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
        >
          Account
        </NavLink>{" | "}
        <NavLink 
          to="user" 
          style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
        >
          User
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default Settings;