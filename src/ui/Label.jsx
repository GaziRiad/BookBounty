function Label({ id, name, error }) {
  return (
    <>
      <label id={id} name={name}>
        {name}
      </label>
    </>
  );
}

export default Label;
