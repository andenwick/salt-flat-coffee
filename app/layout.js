import { Source_Serif_4, Inter } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Salt Flat Coffee | Premium Small Batch Artisan Roast",
  description:
    "Premium small batch artisanal roast coffee from Tooele, Utah. Crafted with passion, roasted with care.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sourceSerif.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
