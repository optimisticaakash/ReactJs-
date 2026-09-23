import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card user="Aakash" age={24} />
      <Card user="Mani" age={23} />
    </div>
  );
};

export default App;
