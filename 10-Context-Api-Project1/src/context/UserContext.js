import React from 'react'

const UserContext = React.createContext();

export default UserContext

// now this UserContext And for Every Context there exists a Provider.js file also,
/*
<UserContext>
    <App/>
    <Header />
    <Sidebar />
</UserContext> 

All those components those who want to access data/States from UserContext are wrapped within <UserContext> ... </UserContext>
*/