import { quintessential } from "@/app/fonts";

export const Heading = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={`${quintessential.className} mb-3 text-3xl lg:text-6xl ${className}`}
    >
      {children}
    </h1>
  );
};
