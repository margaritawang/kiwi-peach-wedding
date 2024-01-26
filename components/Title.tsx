export const Title = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <h3 className={`text-lg lg:text-xl ${className}`}>{children}</h3>;
};
