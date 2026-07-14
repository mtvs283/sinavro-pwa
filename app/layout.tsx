import type { Metadata, Viewport } from "next";
import { ServiceWorkerRegistration } from "@/components/ServiceWorkerRegistration";
import "./globals.css";

export const metadata: Metadata = {
  title: "시나브로",
  description: "단어 퍼즐게임",
  applicationName: "시나브로",
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#10241c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <ServiceWorkerRegistration />
        {children}
      </body>
    </html>
  );
}
