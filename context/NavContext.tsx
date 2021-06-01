import { createContext, useState } from "react";

export const NavContext = createContext(null);

export const NavContextProvider = ({ children }) => {
  const [active, setActive] = useState(null);
  return (
    <NavContext.Provider value={[active, setActive]}>
      {children}
    </NavContext.Provider>
  );
};
