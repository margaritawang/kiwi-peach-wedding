import { Subheading } from "@/components/Subheading";
import { Button } from "@/components/Button";
import { Title } from "@/components/Title";
import { BodyText } from "@/components/BodyText";

export default function Rsvp() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 lg:p-24">
      <Subheading className="mb-8 lg:mb-10 mt-14 lg:mt-0">RSVP</Subheading>
      <div className="divide-y divide-current bg-sky-100 p-4 lg:p-12 rounded-xl shadow-lg lg:w-1/2">
        <div className="flex flex-col justify-center items-center mb-4 lg:mb-10">
          <Title>Margarita & Mats</Title>
          <BodyText className="mt-4 lg:mt-12 mb-1 lg:mb-2">
            Solastranden Gård
          </BodyText>
          <BodyText className="mb-6">Stavanger, Norway</BodyText>
          <BodyText>August 20, 2024</BodyText>
        </div>
        <div className="flex flex-col justify-center items-center pt-4 lg:pt-10">
          <Button>
            <a
              target="_blank"
              className="text-white"
              href="https://forms.gle/iCRcvh4cX4MG2MXx7"
            >
              RSVP Link
            </a>
          </Button>
          <BodyText className="mt-6 lg:mt-10">
            RSVP to our celebration by April 20, 2024, through this magic
            button. We&apos;re eager to know if you can join us for this joyous
            occasion. Looking forward to celebrating with you!
          </BodyText>
        </div>
      </div>
    </main>
  );
}
