import type { Metadata } from "next";
import "./globals.css";
import { libre_baskerville } from "./fonts";

import ContainerWrapper from "./ContainerWrapper";

export const metadata: Metadata = {
  title: `Mats and Margarita's Wedding Website`,
  description:
    "Join us on this enchanting journey to our special day. Your happily ever after begins here, as we share the joy and details of our unique love story. Welcome to our celebration!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${libre_baskerville.className} bg-blue-200`}>
        <ContainerWrapper>{children}</ContainerWrapper>
      </body>
    </html>
  );
}
