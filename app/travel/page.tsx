import { Button } from "@/components/Button";
import { Title } from "@/components/Title";
import { Subheading } from "@/components/Subheading";
import { getGlobalData } from "@/util/getGlobalData";
import Image from "next/image";
import { BodyText } from "@/components/BodyText";

const travel = getGlobalData().travel;

export default function Travel() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 lg:p-24">
      <Subheading>Travel</Subheading>
      <Image src={travel.hotelImg} alt="hotel" width={800} height={500} />
      <BodyText className="max-w-auto lg:max-w-3xl my-16">
        {travel.description}
      </BodyText>
      {travel.addresses.map((ad) => (
        <div
          className="flex flex-row justify-center my-16 items-center"
          key={ad.category}
        >
          <div className="flex flex-1 flex-col items-center border-r border-current">
            <BodyText className="mb-4">{ad.category}</BodyText>
            <Title>{ad.name}</Title>
          </div>
          <div className="flex flex-1 flex-col items-center p-4">
            <BodyText className="mb-4">{ad.address}</BodyText>
            <Button>
              <a className="text-white" target="_blank" href={ad.link}>
                <BodyText>View</BodyText>
              </a>
            </Button>
          </div>
        </div>
      ))}
    </main>
  );
}
