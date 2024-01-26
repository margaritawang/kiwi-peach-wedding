import { Subheading } from "@/components/Subheading";
import { Title } from "@/components/Title";
import { getGlobalData } from "@/util/getGlobalData";
import { BodyText } from "@/components/BodyText";

const faq = getGlobalData().faq;

export default function Faq() {
  return (
    <main className="flex flex-col items-center p-8 lg:p-24">
      <Subheading className="mb-6 lg:mb-10">FAQs</Subheading>
      {faq.map((question, index) => (
        <div
          className="flex flex-col justify-center mb-10 items-center"
          key={`q-${index}`}
        >
          <Title>{question.q}</Title>
          <BodyText className="my-4 lg:my-8">{question.a}</BodyText>
        </div>
      ))}
    </main>
  );
}
