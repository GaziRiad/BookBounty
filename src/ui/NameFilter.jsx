import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function NameFilter({ filterField }) {
  const [filteredName, setFilteredName] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <input
      placeholder="Enter name"
      type="text"
      id="admin"
      name="admin"
      value={filteredName}
      onChange={(e) => {
        setFilteredName(e.target.value);
        searchParams.set(filterField, e.target.value);
        setSearchParams(searchParams);
      }}
      className="bg-white border border-gray-200 px-4 py-2 w-3/4 text-zinc-800 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#b66f39] lg:w-1/2"
    ></input>
  );
}

export default NameFilter;
