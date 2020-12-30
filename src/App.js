import React, { useState } from "react";
import NavBar from "./components/navbar";
import InfoPanel from "./components/infoPanel";
import NavFooter from "./components/NavFooter";
function App() {
  const screenConfig = useState(0);
  return (
    <div>
      <NavBar />
      <NavFooter screenConfig={screenConfig} />
      <div>
        <InfoPanel currentScreen={screenConfig[0]} />
      </div>
    </div>
  );
}

export default App;
