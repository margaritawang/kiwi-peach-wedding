import { quintessential } from "@/app/fonts";

export const Subheading = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={`${quintessential.className} text-2xl lg:text-4xl ${className}`}
    >
      {children}
    </h2>
  );
};
