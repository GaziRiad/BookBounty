function Input({ type, value = "", name, min, max = 100000, children }) {
  if (type === "select")
    return (
      <select
        name={name}
        className="bg-white border border-gray-200 px-4 py-2 w-1/4 text-lg text-zinc-800 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#b66f39]"
      >
        {children}
      </select>
    );

  if (type === "checkbox")
    return (
      <input
        type="checkbox"
        name={name}
        className=" accent-[#b66f39] h-5 w-5"
      />
    );

  if (type === "number")
    return (
      <input
        min={min}
        max={max}
        name={name}
        type="number"
        className=" bg-white border border-gray-200 px-4 py-2 text-lg text-zinc-800 font-medium rounded-md w-[250px] focus:outline-none focus:ring-2 focus:ring-[#b66f39]"
      />
    );

  return (
    <input
      type={type}
      name={name}
      className=" bg-white border border-gray-200 px-4 py-2 w-1/2 text-lg text-zinc-800 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#b66f39]"
    ></input>
  );
}

export default Input;
