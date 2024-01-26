import { Subheading } from "@/components/Subheading";
import { Title } from "@/components/Title";
import { getGlobalData } from "@/util/getGlobalData";

const faq = getGlobalData().faq;

export default function Faq() {
  return (
    <main className="flex flex-col items-center p-24">
      <Subheading>FAQs</Subheading>
      {faq.map((question, index) => (
        <div
          className="flex flex-col justify-center mb-10 items-center"
          key={`q-${index}`}
        >
          <Title>{question.q}</Title>
          <p className="my-8">{question.a}</p>
        </div>
      ))}
    </main>
  );
}
