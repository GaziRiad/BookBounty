import { createContext, useContext, useState } from "react";

const PaginationSize = createContext();
function PaginationSizeContext({ children }) {
  const [pageSize, setPageSize] = useState(8);

  return (
    <PaginationSize.Provider value={{ pageSize, setPageSize }}>
      {children}
    </PaginationSize.Provider>
  );
}

export function usePaginationSize() {
  const context = useContext(PaginationSize);
  if (context === undefined)
    throw new Error("PaginationSizeContext used outside Provider.");
  return context;
}

export default PaginationSizeContext;
