"use client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Login } from "@/components/Login";
import { useEffect, useState } from "react";

export default function ContainerWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    setHasToken(!!localStorage.getItem("token"));
  });

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
