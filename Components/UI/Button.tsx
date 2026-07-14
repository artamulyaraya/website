type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const primary = {
    background: "#c9a227",
    color: "#111",
    border: "none",
  };

  const secondary = {
    background: "transparent",
    color: "#fff",
    border: "1px solid #c9a227",
  };

  return (
    <button
      style={{
        ...(variant === "primary" ? primary : secondary),

        padding: "18px 46px",
        borderRadius: "8px",
        fontWeight: "bold",
        cursor: "pointer",
        transition: ".25s",
      }}
    >
      {children}
    </button>
  );
}