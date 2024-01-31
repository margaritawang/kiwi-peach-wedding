"use client";
import { Subheading } from "@/components/Subheading";
import { Title } from "@/components/Title";
import { BodyText } from "@/components/BodyText";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button";
import { useState } from "react";

export function Login() {
  const [pw, setPw] = useState("");
  const [err, setErr] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(pw);
    if (pw === "12345") {
      setErr(false);
      localStorage.setItem("token", "verified");
      router.refresh();
    } else {
      setErr(true);
    }
  };

  return (
    <main className="flex flex-col items-center p-8 lg:p-24">
      <Subheading className="mb-8 lg:mb-10">Welcome!</Subheading>
      <Title className="mb-8 lg:mb-10">Let&apos;s find out who you are.</Title>
      <BodyText>
        Please enter the password you received from your email invite.
      </BodyText>
      <form onSubmit={handleSubmit} className="my-4 lg:my-6 w-full md:w-80">
        <div className="mb-8">
          <input
            type="text"
            name="token"
            value={pw}
            onChange={(event) => {
              setPw(event.target.value);
              setErr(false);
            }}
            className={`w-full py-2 px-3 border-2 rounded-sm outline-none ${
              err ? "border-red-600" : "border-current"
            }`}
          />
        </div>
        <Button type="submit">
          <span className="text-white">Next</span>
        </Button>
      </form>

      {err ? (
        <BodyText className="mt-4 text-red-600 text-xs lg:text-xs">
          The password you entered is incorrect, please check the spelling or
          contact your host.
        </BodyText>
      ) : null}
    </main>
  );
}
