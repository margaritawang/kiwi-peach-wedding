import { Subheading } from "@/components/Subheading";
import { getGlobalData } from "@/util/getGlobalData";
import Image from "next/image";
import { BodyText } from "@/components/BodyText";

const ourStory = getGlobalData().ourStory;

export default function OurStory() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 lg:p-24">
      <Subheading className="mb-8 lg:mb-10 mt-14 lg:mt-0">Our Story</Subheading>
      <Image
        src={ourStory.img}
        alt="our-story"
        width={800}
        height={500}
        quality={30}
      />
      <BodyText className="max-w-auto lg:max-w-3xl my-10 lg:my-16">
        {ourStory.description}
      </BodyText>
    </main>
  );
}
