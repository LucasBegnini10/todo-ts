import React from "react";

import MyStack from "./src/routes/stack";

import GlobalContext from "./src/context/GlobalContext";


const App = () => {
  return (
    <GlobalContext>
      <MyStack />
    </GlobalContext>
  )
}

export default App;
