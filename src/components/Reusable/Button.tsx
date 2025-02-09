import { ButtonHTMLAttributes, ReactNode } from "react";

// Define the ButtonProps interface for prop types
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "link";
  rounded?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  rounded,
  isLoading,
  disabled,
  className = "",
  ...rest
}) => {
  // Base button styles
  let buttonClasses = `flex items-center border rounded-md text-button-text ${
    isLoading ? "rounded-full p-2" : "px-3 py-1.5"
  } `;

  // Apply variant styles
  if (!disabled) {
    if (variant === "primary")
      buttonClasses +=
        " border-button-border-primary bg-button-primary hover:bg-button-hover-primary";
    if (variant === "secondary")
      buttonClasses +=
        " border-button-border-secondary bg-button-secondary hover:bg-button-hover-secondary";
    if (variant === "success") buttonClasses += " border-green-500 bg-green-500 ";
    if (variant === "warning") buttonClasses += " border-yellow-400 bg-yellow-400 ";
    if (variant === "danger") buttonClasses += " border-red-500 bg-red-500 ";
    if (variant === "link") buttonClasses += " border-none bg-transparent text-link underline";
  }

  // Disabled styles
  if (disabled) {
    buttonClasses += " opacity-50 cursor-not-allowed ";
    if (variant !== "link") {
      buttonClasses += " bg-gray-300 text-gray-500 border-gray-300 ";
    } else {
      buttonClasses += " text-gray-400";
    }
  }

  // Additional styles
  if (rounded) buttonClasses += " rounded-full ";
  if (className) buttonClasses += ` ${className} `;

  return (
    <button
      {...rest}
      className={buttonClasses.trim()}
      disabled={isLoading || disabled}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
