export const Title = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <h3 className={`text-base lg:text-xl ${className}`}>{children}</h3>;
};
