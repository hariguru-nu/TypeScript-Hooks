import React, { useState } from 'react';
import UseState from "./State/UseState";
import UseReducer from './State/UseReducer';
import { UserContextProvider } from './context/UserContext';
import User from './context/User';
import UseRefDom from './ref/UseRefDom';
import UseRefMutable from './ref/UseRefMutable';
import UseEffect from './effect/UseEffect';
import Application from './cutomhook/Application';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <h3>Thanks for {isLoggedIn ? "Login" : "Logging out"}</h3>
      <h1>UseState Example</h1>
      <UseState />
      <h1>UseReducer Example</h1>
      <UseReducer />
      <h1>UseContext Example</h1>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <h1>UseRef DOM Example</h1>
      <UseRefDom />
      <h1>UseRef Mutable Example</h1>
      <UseRefMutable />
      <h1>UseEffect Example</h1>
      <UseEffect />
      <h1>Custom Hook</h1>
      <Application />
    </div>
  );
}

export default App;
