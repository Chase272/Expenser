import "./App.css";
import UserCard from "./Components/UserCard";
// import SpendingsCard from "./Components/SpendingsCard";
import Dashboard from "./Components/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import Newtheme from "./Theme/NewTheme";
import { CssBaseline } from "@mui/material";

import { Provider } from "react-redux";
import store from "./redux/store";
import SignUpPage from "./Pages/SignInPage";
import MainPage from "./Components/MainPage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={Newtheme}>
          <CssBaseline />
          <div className="App">
            <Routes>
              <Route index path="/" element={<SignUpPage />} />
              <Route path="/dashboard/*" element={<MainPage />} />
            </Routes>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
