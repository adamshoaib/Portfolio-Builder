import React, { useState } from "react";
import Home from "./pages/Home";

function App() {
  const [mode, setMode] = useState("dark");

  const themeChanged = (data) => {
    setMode(data ? "dark" : "light");
  };
  return (
    <div className="App dark-mode" dark-theme={mode}>
      <div className="app-root-container">
        <Home themeChanged={(data) => themeChanged(data)} />
      </div>
    </div>
  );
}

export default App;
