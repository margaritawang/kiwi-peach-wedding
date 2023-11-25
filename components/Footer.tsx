import Image from "next/image";

export const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <Image src="/footer.png" alt="footer" width={500} height={362} />

      <p className="my-6">Kiwi + Peach 2024 🥝🍑</p>
    </div>
  );
};
