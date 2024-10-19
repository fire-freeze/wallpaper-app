import React, {createContext, useState } from "react";

interface ContextProps {
  queryState: string;
  updateQueryState: (value: string) => void;
}

interface StateProps {
  children: React.ReactNode;
}

export const queryContext = createContext<ContextProps | undefined>(undefined);

const QueryState: React.FC<StateProps> = ({ children }) => {
  const defaultQuery = "Space";
  const [queryState, setQueryState] = useState<string>(defaultQuery);
  const updateQueryState = (value: string) => setQueryState(value);
  return (
    <queryContext.Provider value={{ queryState, updateQueryState }}>
      {children}
    </queryContext.Provider>
  );
};

export default QueryState;
