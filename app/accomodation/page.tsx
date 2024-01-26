import { getGlobalData } from "@/util/getGlobalData";
import { Subheading } from "@/components/Subheading";
import { Title } from "@/components/Title";
const accomodation = getGlobalData().accomodation;

export default function Hotel() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Subheading>Accomodation</Subheading>
      <p className="max-w-3xl">{accomodation.description}</p>
      <div className="grid lg:grid-cols-2 gap-12 my-12">
        {accomodation.recommendedHotels.map((h) => (
          <div className="flex flex-col bg-sky-100 rounded-xl shadow-lg p-5">
            <div className="mb-5">
              <Title>{h.name}</Title>
            </div>
            <p className="mb-6">{h.address}</p>
            <p>Phone: {h.phone}</p>
            <p className="mb-5">Email: {h.email}</p>
            <p>
              <a
                href={h.website}
                target="_blank"
                className="underline hover:decoration-wavy"
              >
                View website
              </a>
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
