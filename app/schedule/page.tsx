import { Subheading } from "@/components/Subheading";
import { getGlobalData } from "@/util/getGlobalData";
import { BodyText } from "@/components/BodyText";

const schedule = getGlobalData().schedule;

export default function Schedule() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 lg:p-24">
      <Subheading>Schedule</Subheading>
      <div className="flex flex-col items-center mb-20">
        <BodyText>Details coming soon!</BodyText>
      </div>
      {/* {schedule.map((day) => (
        <div className="flex flex-col items-center mb-20" key={day.date}>
          <Subheading>{day.date}</Subheading>
          {day.events.map((e) => (
            <div className="flex flex-col items-center my-10" key={e.title}>
              <h3 className="font-bold text-2xl mb-2">{e.title}</h3>
              <p className="mb-6">{e.time}</p>
              <p>{e.description}</p>
            </div>
          ))}
        </div>
      ))} */}
    </main>
  );
}
