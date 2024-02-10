import "./App.css";
import UserCard from "./Components/UserCard";
import SpendingsCard from "./Components/SpendingsCard";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <UserCard />
        {/* <SpendingsCard /> */}
        <Dashboard />
      </div>
    </BrowserRouter>
  );
}

export default App;
