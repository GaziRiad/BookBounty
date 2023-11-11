import { Link } from "react-router-dom";

function Button({
  children,
  type = "primary",
  size = "medium",
  to = "",
  onClick,
  disabled,
}) {
  const base =
    "rounded-lg tracking-wide capitalize font-semibold disabled:cursor-not-allowed transition-all flex items-center gap-1 ";

  const styles = {
    primary: base + "bg-[#b66f39] text-white ",
    secondary:
      base +
      "bg-white text-zinc-900 border border-grey-200 border-2 hover:bg-[#b66f39] hover:text-white ",
  };

  const variations = {
    small: "text-sm px-2 py-1",
    medium: "text-base px-4 py-2",
  };

  if (to)
    return (
      <Link
        className={`${styles[type]} ${variations[size]}`}
        to={to}
        onClick={onClick}
      >
        {children}
      </Link>
    );

  return (
    <button
      className={`${styles[type]} ${variations[size]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
