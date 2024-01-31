"use client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { Login } from "@/components/Login";
import { getToken } from "@/util/getToken";

export default function ContainerWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const hasToken = getToken();

  return hasToken ? (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  ) : (
    <Login />
  );
}
