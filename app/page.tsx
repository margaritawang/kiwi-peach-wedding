import Image from "next/image";
import { Heading } from "@/components/Heading";
import { Subheading } from "@/components/Subheading";
import { CountdownTimer } from "@/components/CountdownTimer";
import { Button } from "@/components/Button";
import Link from "next/link";
import { BodyText } from "@/components/BodyText";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 lg:p-24">
      <div className="mb-28 relative w-full">
        <div className="relative w-full flex">
          <div className="relative -top-8 -right-32 hidden lg:block">
            <Image
              src="/home_1.jpg"
              alt="homepage_1"
              width={550}
              height={550}
            />
          </div>
          <div className="lg:absolute lg:right-28 lg:top-12">
            <Image
              src="/home_2.jpg"
              alt="homepage_2"
              width={550}
              height={550}
            />
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-92 md:-top-64 lg:-left-24 w-24 h-24 lg:w-60 lg:h-60">
            <Image src="/snowflake.png" alt="snowflake" fill />
          </div>
          <div className="absolute -right-64 -top-40 hidden lg:block">
            <Image
              src="/snowbird.png"
              alt="snowbird"
              width={800}
              height={500}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center py-10 lg:py-20">
        <Heading>Margarita Amy Wang</Heading>
        <BodyText className="my-8">&</BodyText>
        <Heading>Mats Lunde</Heading>
      </div>
      <div className="flex flex-col items-center py-4 lg:py-8">
        <Subheading>AUGUST 20, 2024</Subheading>
        <BodyText className="mt-8 mb-4">Solastranden Gård</BodyText>
        <BodyText className="mb-12">Stavanger, Norway</BodyText>
        <CountdownTimer targetDate="2024-08-20T15:00:00" />
        <div className="mt-8 lg:mt-16">
          <Button>
            <Link href="/rsvp" className="text-white">
              RSVP
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-center py-8">
        <Subheading>We&apos;re getting married!</Subheading>
        <BodyText className="mt-8">
          We can&apos;t wait to share our special day with you. Celebrate with
          us this summer.
        </BodyText>
      </div>
    </main>
  );
}
