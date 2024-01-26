import { Subheading } from "@/components/Subheading";
import { Button } from "@/components/Button";
import { Title } from "@/components/Title";

export default function Rsvp() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Subheading>RSVP</Subheading>
      <div className="divide-y divide-current bg-sky-100 p-12 rounded-xl shadow-lg">
        <div className="flex flex-col justify-center items-center mb-10">
          <Title>Margarita & Mats</Title>
          <p className="mt-12 mb-2">Solastranden Gård</p>
          <p className="mb-6">Stavanger, Norway</p>
          <p>August 20, 2024</p>
        </div>
        <div className="flex flex-col justify-center items-center pt-10">
          <Button>
            <a
              target="_blank"
              className="text-white"
              href="https://forms.gle/iCRcvh4cX4MG2MXx7"
            >
              RSVP Link
            </a>
          </Button>
          <p className="mt-10">
            RSVP to our celebration by April 20, 2024, through this magic
            button. We&apos;re eager to know if you can join us for this joyous
            occasion. Looking forward to celebrating with you!
          </p>
        </div>
      </div>
    </main>
  );
}
