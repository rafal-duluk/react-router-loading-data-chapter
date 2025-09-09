import { createBrowserRouter, RouterProvider } from "react-router-dom";
import type { LoaderFunctionArgs } from "react-router-dom";
import Dashboard from "./loadingData/Dashboard";
// import Welcome from "./loadingData/Welcome";
// import Profile from "./loadingData/Profile";
// import UserDetails from "./loadingData/UserDetails";
// import Settings from "./loadingData/Settinngs";
// import AccountSettings from "./loadingData/AccountSettings";
// import UserSettings from "./loadingData/UserSettings";
import ErrorPage from "./loadingData/ErrorPage";
import HistoryInfo from "./loadingData/HistoryInfo";

// Loader do pobierania danych użytkownika
async function userLoader({ params }: LoaderFunctionArgs) {
  const { id } = params;
  if (!id) {
    throw new Response("User ID is required", { status: 400 });
  }

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    throw new Response("User not found", { status: res.status });
  }
  return res.json();
}

// Uzupełnij router o dodatkowe trasy w tablicy children
// komponent Welcom powinien być stroną domyślną
// dopisz ścieżke "profile" dla Profile oraz powiązane z nią trasy dynamiczne do komponentu UserDetails (wykorzystaj w nich loader i obsługę błędu poprzez ErrorPage)
// dopisz ścieżkę 'settings' dla Settings z podtrasami w ramach outletu do AccountSettings i UserSettings
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <HistoryInfo />
        <Dashboard />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;