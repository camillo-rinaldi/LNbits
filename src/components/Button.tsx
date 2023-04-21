import React, { useState } from "react";

type ButtonProps = {
  onClick: () => void;
  className?: string;
  children?: React.ReactNode;
};

export function Button({ children, onClick, className }: ButtonProps) {
  const [growEffect, setGrowEffect] = useState(false);
  return (
    <button
      className={`rounded bg-orange-500 px-4 py-2 font-bold 
      text-white hover:bg-orange-600 focus:outline-none focus:ring-2 
      focus:ring-orange-500 focus:ring-opacity-50 ${
        growEffect && "animate-grow"
      } ${className}`}
      onClick={() => {
        onClick();
        setGrowEffect(true);
      }}
      onAnimationEnd={() => setGrowEffect(false)}
    >
      {children}
    </button>
  );
}
