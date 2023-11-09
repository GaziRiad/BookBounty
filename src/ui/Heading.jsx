function Heading({ children, type = "h1" }) {
  if (type === "h1")
    return (
      <h1 className="text-zinc-800 font-bold capitalize text-3xl tracking-wide mb-10">
        {children}
      </h1>
    );
}

export default Heading;
