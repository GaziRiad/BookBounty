function Label({ id, name }) {
  return (
    <label
      id={id}
      name={name}
      className="text-lg text-stone-600 capitalize mb-1 font-medium"
    >
      {name}
    </label>
  );
}

export default Label;
