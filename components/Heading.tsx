import { quintessential } from "@/app/fonts";

export const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className={`${quintessential.className} mb-3 text-6xl`}>{children}</h1>
  );
};
