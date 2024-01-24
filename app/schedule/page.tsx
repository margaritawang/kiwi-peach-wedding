import { Subheading } from "@/components/Subheading";
import { getGlobalData } from "@/util/getGlobalData";

const schedule = getGlobalData().schedule;

export default function Schedule() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center mb-20">
        <Subheading>Details coming soon!</Subheading>
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
