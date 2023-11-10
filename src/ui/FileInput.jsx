function FileInput({ id, register }) {
  return (
    <input
      type="file"
      className="file-input"
      accept="image/*"
      {...register(id)}
    />
  );
}

export default FileInput;
