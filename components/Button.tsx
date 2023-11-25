export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="bg-current py-3 px-16 rounded-md">{children}</button>
  );
};
