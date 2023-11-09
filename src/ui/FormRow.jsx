function FormRow({ children, type = "" }) {
  if (type === "horizontal")
    return <div className="flex items-center gap-6">{children}</div>;

  return <div className="flex flex-col gap-1 mb-8">{children}</div>;
}

export default FormRow;
