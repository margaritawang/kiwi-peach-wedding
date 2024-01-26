export const BodyText = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <p className={`text-sm lg:text-base ${className}`}>{children}</p>;
};
