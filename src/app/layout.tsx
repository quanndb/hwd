import type { Metadata } from "next";
import {
  Charm,
  Cormorant_Garamond,
  Crimson_Text,
  Livvic,
  Trirong,
} from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const crimson = Crimson_Text({
  subsets: ["latin", "vietnamese"],
  variable: "--font-crimson",
  display: "swap",
  weight: ["400", "600", "700"],
});

export const charm = Charm({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "700"], // chữ mềm, có thể đậm hơn ở tiêu đề
  variable: "--font-charm",
  display: "swap",
});

export const livvic = Livvic({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700"], // 400 cho nội dung, 600-700 cho tiêu đề & số
  variable: "--font-livvic",
  display: "swap",
});

export const trirong = Trirong({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "600", "700"], // 400 cho nội dung, 600-700 cho tiêu đề & số
  variable: "--font-trirong",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chúc Mừng 20/10 - Ngày Phụ Nữ Việt Nam",
  description: "Thiệp chúc mừng ngày Phụ nữ Việt Nam 20/10",
  generator: "quanndb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${crimson.variable} ${charm.variable} ${livvic.variable} ${trirong.variable} antialiased`}
      >
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  );
}
