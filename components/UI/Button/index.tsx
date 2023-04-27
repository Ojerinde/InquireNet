import React from "react";

interface Props {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<Props> = ({
  onClick,
  className,
  disabled,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} button`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;
