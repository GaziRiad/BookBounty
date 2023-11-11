import { createContext } from "react";

const TableContext = createContext();
function Table({ children }) {
  return (
    <TableContext.Provider value={{}}>
      <div className="max-w-full overflow-x-scroll ">{children}</div>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  return (
    <div className="bg-gray-100 text-zinc-700 font-semibold text-base grid grid-cols-[minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_50px] items-center text-left px-2 py-2 border border-gray-200 rounded-t-lg xl:px-8 w-fit lg:w-full">
      {children}
    </div>
  );
}

function Body({ data, render }) {
  if (!data) return null;
  return <div className="w-fit lg:w-full">{data.map(render)}</div>;
}

function TableRow({ children }) {
  return (
    <div className="bg-white text-zinc-500 border border-gray-100 grid grid-cols-[minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_minmax(120px,_1fr)_50px] items-center px-2 py-2 text-sm xl:px-8 ">
      {children}
    </div>
  );
}

Table.Body = Body;
Table.TableRow = TableRow;
Table.Header = Header;

export default Table;
