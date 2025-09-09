import { useLocation, useNavigationType } from "react-router-dom";

export default function HistoryInfo() {
  const location = useLocation();
  const navType = useNavigationType();

  return (
    <div style={{ padding: "10px", background: "#f0f0f0", marginBottom: "10px" }}>
      <strong>Ścieżka:</strong> {location.pathname} <br />
      <strong>Nawigacja:</strong> {navType}
    </div>
  );
}