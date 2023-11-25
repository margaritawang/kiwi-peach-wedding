import { Button } from "@/components/Button";
import { Subheading } from "@/components/Subheading";
import { getGlobalData } from "@/util/getGlobalData";
import Image from "next/image";

const travel = getGlobalData().travel;

export default function Travel() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src={travel.hotelImg} alt="hotel" width={800} height={500} />
      <p className="max-w-3xl text-center my-16">{travel.description}</p>
      {travel.addresses.map((ad) => (
        <div className="flex flex-row justify-center my-16 items-center">
          <div className="flex flex-1 flex-col items-center text-center border-r border-current">
            <p className="mb-4">{ad.category}</p>
            <Subheading>{ad.name}</Subheading>
          </div>
          <div className="flex flex-1 flex-col items-center p-4">
            <p className="mb-4">{ad.address}</p>
            <Button>
              <a className="text-white" target="_blank" href={ad.link}>
                View
              </a>
            </Button>
          </div>
        </div>
      ))}
    </main>
  );
}
