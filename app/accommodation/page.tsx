import { getGlobalData } from "@/util/getGlobalData";
import { Subheading } from "@/components/Subheading";
import { Title } from "@/components/Title";
import { BodyText } from "@/components/BodyText";

const accommodation = getGlobalData().accommodation;

export default function Accommodation() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 lg:p-24">
      <Subheading className="mb-8 lg:mb-10 mt-14 lg:mt-0">
        Accommodation
      </Subheading>
      <BodyText className="max-w-auto lg:max-w-3xl">
        {accommodation.description}
      </BodyText>
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 my-12">
        {accommodation.recommendedHotels.map((h, idx) => (
          <div
            className="flex flex-col bg-sky-100 rounded-xl shadow-lg p-3 lg:p-5"
            key={`hotel-${idx + 1}`}
          >
            <div className="mb-2 lg:mb-5">
              <Title>{h.name}</Title>
            </div>
            <BodyText className="mb-3 lg:mb-6">{h.address}</BodyText>
            <BodyText>Phone: {h.phone}</BodyText>
            <BodyText className="mb-2 lg:mb-5">Email: {h.email}</BodyText>
            {h.discount ? (
              <BodyText className="mb-2 lg:mb-5">
                Discount: {h.discount}
              </BodyText>
            ) : null}
            <BodyText>
              <a
                href={h.website}
                target="_blank"
                className="underline hover:decoration-wavy"
              >
                View website
              </a>
            </BodyText>
          </div>
        ))}
      </div>
    </main>
  );
}
