function Input({
  type = "text",
  id,
  value = "",
  register,
  validation = {},
  onChange,
  style,
  placeholder = "",
  children,
}) {
  if (type === "select" && register)
    return (
      <select
        {...register(id, validation)}
        name={id}
        id={id}
        className="bg-white border border-gray-200 px-4 py-2 w-1/2 text-zinc-800 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#b66f39] lg:w-1/4"
      >
        {children}
      </select>
    );

  if (type === "checkbox")
    return (
      <input
        onChange={onChange}
        value={value}
        id={id}
        type="checkbox"
        name={id}
        className=" accent-[#b66f39] h-5 w-5"
      />
    );

  if (type === "number")
    return (
      <input
        {...register(id, validation)}
        id={id}
        name={id}
        type="number"
        defaultValue={0}
        className={`bg-white border border-gray-200 px-4 py-2 text-zinc-800 font-medium rounded-md w-1/2 focus:outline-none focus:ring-2 focus:ring-[#b66f39] lg:w-[250px] ${style}`}
      />
    );

  return (
    <input
      {...register(id, validation)}
      id={id}
      type={type}
      name={id}
      className=" bg-white border border-gray-200 px-4 py-2 w-3/4 text-zinc-800 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#b66f39] lg:w-1/2"
    ></input>
  );
}

export default Input;
