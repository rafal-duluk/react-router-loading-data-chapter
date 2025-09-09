import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  let message = "Something went wrong!";
  if (isRouteErrorResponse(error)) {
    message = `Error ${error.status}: ${error.statusText}`;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div style={{ color: "red", padding: "1rem" }}>
      <h2>Oops! Error loading user.</h2>
      <p>{message}</p>
      <p>
        <Link to="/profile">← Back to profiles</Link>
      </p>
    </div>
  );
}

export default ErrorPage;