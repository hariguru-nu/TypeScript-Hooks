import React, {useContext } from 'react';
import { UserContext } from './UserContext';

const User = () => {
    const userContext = useContext(UserContext);

    const handleLogin = () => {
        if(userContext) {
            userContext.setUser({
                name: "Viswas",
                email: "viswas@outlook.com"
            })
        }
    }

    const handleLogout = () => {
        if(userContext) {
            userContext.setUser(null);
        }
    }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <p>The user name is {userContext?.user?.name}</p>
        <p>The user email is {userContext?.user?.email}</p>
    </div>
  )
}

export default User
