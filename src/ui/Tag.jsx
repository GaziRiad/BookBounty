function Tag({ type = true, children }) {
  return (
    <span
      className={`${
        type === true ? "bg-green-500" : "bg-red-400"
      }  text-xs text-white font-semibold tracking-wider uppercase w-fit px-3 py-1 rounded-full`}
    >
      {type ? "Published " : "Unpublished"}
    </span>
  );
}

export default Tag;
