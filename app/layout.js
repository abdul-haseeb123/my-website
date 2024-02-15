import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import MyNavbar from "./components/MyNavbar";
import { cn } from "@nextui-org/react";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "College Chemistry",
  description: "Learn college chemistry with ease and fun",
  openGraph: {
    title: "College Chemistry",
    description: "Learn college chemistry with ease and fun",
    type: "website",
    images: ["/college-chemistry-2.jpg", "/college-chemistry.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "dark:bg-gradient-to-tr dark:from-slate-900 dark:via-zinc-900 dark:to-blue-950 min-h-screen ",
          inter.className
        )}
      >
        <Providers>
          <MyNavbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
