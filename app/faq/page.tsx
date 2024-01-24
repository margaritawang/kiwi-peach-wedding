import { Button } from "@/components/Button";
import { Subheading } from "@/components/Subheading";
import { getGlobalData } from "@/util/getGlobalData";

const faq = getGlobalData().faq;

export default function Faq() {
  return (
    <main className="flex flex-col items-center p-24">
      {faq.map((question, index) => (
        <div
          className="flex flex-col justify-center mb-10 items-center"
          key={`q-${index}`}
        >
          <Subheading>{question.q}</Subheading>
          <p className="my-8">{question.a}</p>
        </div>
      ))}
    </main>
  );
}
