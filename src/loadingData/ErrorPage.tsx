
function ErrorPage() {
  let message;
  //jeśli isRouteErrorResponse zwraca true to pokaż status błędu

  return (
    <div style={{ color: "red", padding: "1rem" }}>
      <h2>Oops! Error loading user.</h2>
      <p className="instruction">Wstaw status błędu, jeśli isRouteErrorResponse zwraca true, a jeśli błąd nie jest wygenerowany przez React Router to wstaw jakiś generyczny komunikat</p>
      <p>{message}</p>
      <p>
        <p className="instruction">Przekieruj do strony głównej</p>
        ← Back to home page
      </p>
    </div>
  );
}

export default ErrorPage;