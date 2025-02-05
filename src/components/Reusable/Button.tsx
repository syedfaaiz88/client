import { ButtonHTMLAttributes, ReactNode } from "react";

// Define the ButtonProps interface for prop types
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  rounded?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
}

// Utility function to ensure only one variant is selected
const checkVariationValue = ({
  primary,
  secondary,
  success,
  warning,
  danger,
}: Partial<ButtonProps>) => {
  const count =
    Number(!!primary) +
    Number(!!secondary) +
    Number(!!warning) +
    Number(!!success) +
    Number(!!danger);

  if (count > 1) {
    throw new Error(
      "Only one of primary, secondary, success, warning, or danger can be true"
    );
  }
};

const Button: React.FC<ButtonProps> = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  rounded,
  isLoading,
  disabled,
  className = "",
  ...rest
}) => {
  // Ensure only one variant is selected
  checkVariationValue({ primary, secondary, success, warning, danger });

  // Base button styles
  let buttonClasses = `flex items-center border rounded-md text-button-text ${
    isLoading ? "rounded-full p-2" : "px-3 py-1.5"
  } `;

  // Apply variant styles
  if (!disabled) {
    if (primary)
      buttonClasses +=
        " border-button-border-primary bg-button-primary hover:bg-button-hover-primary";
    if (secondary)
      buttonClasses +=
        " border-button-border-secondary bg-button-secondary hover:bg-button-hover-secondary";
    if (success) buttonClasses += " border-green-500 bg-green-500 ";
    if (warning) buttonClasses += " border-yellow-400 bg-yellow-400 ";
    if (danger) buttonClasses += " border-red-500 bg-red-500 ";
  }

  // Disabled styles
  if (disabled) {
    buttonClasses += " opacity-50 cursor-not-allowed ";
    buttonClasses += " bg-gray-300 text-gray-500 border-gray-300 ";
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
