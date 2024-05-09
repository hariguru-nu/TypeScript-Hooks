import React, { useState } from 'react'

type AuthUser = {
    name: string,
    email: string
}

const UseState = () => {
    const [user, setUser] = useState({} as AuthUser);

    const handleLogin = () => {
        setUser({
            name: "Viswas",
            email: "viswas@outlook.com"
        })
    }

    // const handleLogout = () => {
    //     setUser();
    // }

    return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Log out</button> */}
      <h3>The user name is {user?.name}</h3>
      <h3>The user email is {user?.email}</h3>
    </div>
  )
}

export default UseState;
