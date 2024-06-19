// UserDetailContext.js

import React, { createContext, useState } from 'react';

// Create a context
const UserDetailContext = createContext();

// Create a provider for the context
export const UserDetailProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(/* initial user details */);

  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserDetailContext.Provider>
  );
};

export default UserDetailContext;
