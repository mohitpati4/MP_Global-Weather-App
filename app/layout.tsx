import type { Metadata } from "next"; import type { ReactNode } from "react"; import "./globals.css";
export const metadata: Metadata = { title: "Atmos — Global Weather", description: "A clear, detailed 10-day weather forecast for cities around the world." };
export default function RootLayout({children}:{children:ReactNode}) { return <html lang="en"><body>{children}</body></html>; }