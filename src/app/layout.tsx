import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import FloatingContact from "@/components/FloatingContact";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Huma Electronics | Expert Repair & Service for Your Home Electronics",
  description:
    "Huma Electronics offers specialized repair and maintenance for TVs, audio systems, home appliances, and more. Book a service and get expert technical support at your doorstep.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-body">
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
