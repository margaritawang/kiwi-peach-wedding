import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
  children: React.ReactNode;
  className?: string;
};

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <button className={`bg-current py-3 px-16 rounded-md ${className}`}>
      {children}
    </button>
  );
};
