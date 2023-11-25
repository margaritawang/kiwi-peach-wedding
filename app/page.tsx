import Image from "next/image";
import { Heading } from "../components/Heading";
import { Subheading } from "../components/Subheading";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-28 relative w-full">
        <div className="relative w-full flex">
          <div className="relative -top-8 -right-32">
            <Image
              src="/home_1.jpg"
              alt="homepage_1"
              width={550}
              height={550}
            />
          </div>
          <div className="absolute right-28 top-12">
            <Image
              src="/home_2.jpg"
              alt="homepage_2"
              width={550}
              height={550}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-20">
        <Heading>Mats Lunde</Heading>
        <p className="my-8">&</p>
        <Heading>Margarita Amy Wang</Heading>
      </div>
      <div className="flex flex-col items-center py-8">
        <Subheading>AUGUST 19-21, 2024</Subheading>
        <p>Bergen, Norway</p>
      </div>
      <div className="flex flex-col items-center py-8">
        <Subheading>We're getting married!</Subheading>
        <p>We met on Hinge</p>
      </div>
    </main>
  );
}
