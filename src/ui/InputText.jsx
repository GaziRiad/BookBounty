function InputText({ register, id }) {
  return (
    <textarea
      {...register(id)}
      className="w-2/3 h-40 bg-white border border-gray-200 px-4 py-2 text-lg text-zinc-800 font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-[#b66f39]"
    />
  );
}

export default InputText;
