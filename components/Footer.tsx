import Image from "next/image";
import { BodyText } from "@/components/BodyText";

export const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <Image src="/footer.png" alt="footer" width={500} height={362} />

      <BodyText className="my-8">Kiwi + Peach 2024 🥝 🍑</BodyText>
    </div>
  );
};
