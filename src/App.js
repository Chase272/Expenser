import logo from "./logo.svg";
import "./App.css";
import UserCard from "./Components/UserCard";
import SpendingsCard from "./Components/SpendingsCard";
import TransactionsGroup from "./Components/TransactionsGroup";

function App() {
  return (
    <div className="App">
      <UserCard />
      <SpendingsCard />
      <TransactionsGroup />
    </div>
  );
}

export default App;
