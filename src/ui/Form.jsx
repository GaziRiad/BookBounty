function Form({ children, onSubmit }) {
  return (
    <form className="flex flex-col mb-12 gap-6" onSubmit={onSubmit}>
      {children}
    </form>
  );
}

export default Form;
