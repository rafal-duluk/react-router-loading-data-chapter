import "./componentStyle.css";

// type User = {
//   id: number;
//   name: string;
//   email: string;
//   phone: string;
// };

function UserDetails() {
  return (
    <div>
      <h2>User Details</h2>
      <p className="instruction">Odczytaj dane z loadera i zaprezentuj je na stronie</p>
      <p className="instruction">Jeśli zostały przekazane, pobierz i zaprezentuj dane z ze stanu routera</p>
    </div>
  );
}

export default UserDetails;