import { Subheading } from "@/components/Subheading";
import { getGlobalData } from "@/util/getGlobalData";

const hotels = getGlobalData().recommendedHotels;

export default function Hotel() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Subheading>Recommended Hotels</Subheading>
    </main>
  );
}
