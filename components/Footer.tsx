import Image from "next/image";
import { BodyText } from "@/components/BodyText";

export const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <div className="h-40 w-56 lg:w-128 lg:h-96 relative">
        <Image src="/footer.png" alt="footer" fill />
      </div>
      <BodyText className="my-8">Kiwi + Peach 2024 🥝 🍑</BodyText>
    </div>
  );
};
