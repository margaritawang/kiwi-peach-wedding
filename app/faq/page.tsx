import { Subheading } from "@/components/Subheading";
import { Title } from "@/components/Title";
import { getGlobalData } from "@/util/getGlobalData";
import { BodyText } from "@/components/BodyText";

const faq = getGlobalData().faq;

export default function Faq() {
  return (
    <main className="flex flex-col items-center p-8 lg:p-24">
      <Subheading className="mb-8 lg:mb-10 mt-14 lg:mt-0">FAQs</Subheading>
      {faq.map((question, index) => {
        const split = question.a.split(/(http\S*)/);

        return (
          <div
            className="flex flex-col justify-center mb-10 items-center my-4 lg:my-8"
            key={`q-${index}`}
          >
            <Title className="mb-8">{question.q}</Title>
            {split.length > 1 ? (
              split.map((s, idx) => {
                if (/(http\S*)/.test(s)) {
                  return (
                    <a
                      href={s}
                      key={`s-${idx}`}
                      target="_blank"
                      className="decoration-wavy underline text-sm lg:text-base"
                    >
                      {s}
                    </a>
                  );
                } else {
                  return <BodyText key={`s-${idx}`}>{s}</BodyText>;
                }
              })
            ) : (
              <BodyText>{question.a}</BodyText>
            )}
          </div>
        );
      })}
    </main>
  );
}
