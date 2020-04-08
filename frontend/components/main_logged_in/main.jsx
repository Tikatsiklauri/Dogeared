import React from 'react';

export default ({currentUser, logout}) => {
    return (
        <div>
            <p>Hello, {currentUser.name}</p>
            <button onClick={logout}>Log Out</button>
        </div>
    )
}