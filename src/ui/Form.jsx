function Form({ children, onSubmit }) {
  return (
    <form
      className="flex flex-col mb-4 gap-2 xl:mb-12 xl:gap-6"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}

export default Form;
