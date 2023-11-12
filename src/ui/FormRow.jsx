function FormRow({ children, label, error, type = "" }) {
  if (type === "horizontal")
    return (
      <div className="flex items-center gap-4">
        <label
          className={`text-stone-600 capitalize mb-1 font-medium`}
          htmlFor={children.props.id}
        >
          {label}
        </label>
        {children}
      </div>
    );

  return (
    <div className="flex flex-col gap-0">
      <label
        className="text-stone-600 capitalize mb-1 font-medium"
        htmlFor={children.props.id}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export default FormRow;
