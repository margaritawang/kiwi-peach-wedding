import { Subheading } from "@/components/Subheading";
import { Button } from "@/components/Button";

export default function Rsvp() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="divide-y bg-white p-12 rounded-xl shadow-lg">
        <div className="flex flex-col justify-center items-center mb-10">
          <Subheading>Margarita & Mats</Subheading>
          <p className="mt-12 mb-2">Solstrand Hotel & Bad</p>
          <p className="mb-6">Bergen, Norway</p>
          <p>August 19-21, 2024</p>
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
            Please let us know by March 30, 2024, we hope to celebrate with you!
          </p>
        </div>
      </div>
    </main>
  );
}
