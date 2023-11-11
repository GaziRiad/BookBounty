function Heading({ children, type = "h1" }) {
  if (type === "h1")
    return (
      <h1 className="text-zinc-800 font-bold capitalize text-xl tracking-wide mb-3 xl:mb-10 xl:text-3xl">
        {children}
      </h1>
    );
}

export default Heading;
