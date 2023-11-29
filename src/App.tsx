import React from "react";
import "./App.css";
import NavigationDrawer from "./components/NavigationDrawer/NavigationDrawer";

import { createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./app/store";
const theme = createTheme({
  typography: {
    fontFamily: ["chno pixel pro"].join(","),
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <NavigationDrawer />
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
