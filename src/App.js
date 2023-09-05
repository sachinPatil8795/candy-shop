import React from "react";
import Header from "./components/Layout/Header";
import Candies from "./components/Candies/Candies";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Candies />
      </main>
    </>
  );
};

export default App;
