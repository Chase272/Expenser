import "./App.css";
import UserCard from "./Components/UserCard";
// import SpendingsCard from "./Components/SpendingsCard";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import Newtheme from "./Theme/NewTheme";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Newtheme}>
        <CssBaseline />
        <div className="App">
          <UserCard />
          {/* <SpendingsCard /> */}
          <Dashboard />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
