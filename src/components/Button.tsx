import React, { useState } from "react";

type ButtonProps = {
  onClick: () => void;
  className?: string;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export function Button({
  children,
  onClick,
  className,
  type,
  disabled,
}: ButtonProps) {
  const [growEffect, setGrowEffect] = useState(false);
  return (
    <button
      className={`rounded bg-_orange-500 py-2 font-bold 
      text-white ${
        disabled ? "cursor-not-allowed opacity-50" : "hover:bg-_orange-600"
      } focus:outline-none focus:ring-2 
      focus:ring-orange-500 focus:ring-opacity-50 ${
        growEffect && "animate-grow"
      } ${className}`}
      type={type ?? "button"}
      onClick={() => {
        if (!disabled) {
          onClick();
          setGrowEffect(true);
        }
      }}
      onAnimationEnd={() => setGrowEffect(false)}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
