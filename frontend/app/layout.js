import localFont from "next/font/local";
import { Atma } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const atma = Atma({
  subsets: ["latin"],
  weight: "700",
});

export const metadata = {
  title: "VIP Draw",
  description: "Drawing game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${atma.variable} 
        antialiased flex justify-center items-center min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
