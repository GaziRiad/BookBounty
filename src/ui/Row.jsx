function Row({ children, type = "vertical" }) {
  if (type === "horizontal")
    return <div className={`flex items-center gap-4 mb-8 `}>{children}</div>;

  if (type === "vertical")
    return <div className={`flex flex-col gap-2 mb-8 `}>{children}</div>;
}

export default Row;
