import { Link } from "react-router-dom";

function Button({ children, type = "primary", to = "", onClick, disabled }) {
  const base =
    "text-lg rounded-lg tracking-wide capitalize font-semibold px-4 py-2 disabled:cursor-not-allowed transition-all ";

  const styles = {
    primary: base + "bg-[#b66f39] text-white",
    secondary:
      base +
      "bg-white text-zinc-900 border border-grey-200 border-2 hover:bg-[#b66f39] hover:text-white",
  };

  if (to)
    return (
      <Link className={`${base} ${styles[type]}`} to={to} onClick={onClick}>
        {children}
      </Link>
    );

  return (
    <button className={`${base} ${styles[type]}`} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
