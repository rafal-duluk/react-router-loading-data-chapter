export default function Profile() {

  const goToUserPush = () => {
  };

  const goToUserReplace = () => {
  };

  return (
    <div>
      <h2>Profile</h2>
      <p className="instruction">Popraw buttony, aby wykorzystywały typ nawigacji Push / Replace</p>
      <button onClick={goToUserPush} style={{ marginRight: "10px" }}>
        Go to UserDetails (PUSH)
      </button>
      <button onClick={goToUserReplace}>Go to UserDetails (REPLACE)</button>
      <h3>Example Users</h3>
      <ul>
        <p className="instruction">Dodaj linki w liście do UserDetails, wykorzystując dynamiczne ścieżki. Przekaż jakąś infomrację poprzez state w routerze</p>
        <li>
          User with id 9
        </li>
        <li>
          User with id 10
        </li>
        <li>
          User with id 4
        </li>
        <li>
          User with id 9898989
        </li>
      </ul>
      <p>
        <p className="instruction">Wstaw link do strony Settings</p>
      </p>
    </div>
  );
}