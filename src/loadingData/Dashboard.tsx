import { Outlet, NavLink } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Dashboard</h1>
      <nav style={{ marginBottom: "1rem" }}>
        <NavLink 
          to="" 
          end 
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
        >
          Welcome
        </NavLink>{" | "}
        <NavLink 
          to="profile" 
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
        >
          Profile
        </NavLink>{" | "}
        <NavLink 
          to="settings" 
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
        >
          Settings
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default Dashboard;