function Row({ children, type = "vertical" }) {
  return (
    <div
      className={`flex mb-8 gap-4 ${
        type === "vertical " ? "flex-col" : "flex-row items-center"
      }`}
    >
      {children}
    </div>
  );
}

export default Row;
