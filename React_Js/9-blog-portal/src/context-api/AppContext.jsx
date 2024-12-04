import { createContext, useContext, useState } from "react";

const ContextApi = createContext();

const AppContext = ({ children }) => {
    const [shariq, setShariq] = useState(null);
    return <ContextApi.Provider value={{ shariq, setShariq }}>{children}</ContextApi.Provider>;
};

export default AppContext;

export const useAppContext = () => {
    const context = useContext(ContextApi);
    if (!context) throw new Error("falied to access context");
    return context;
};
