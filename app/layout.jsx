import { Montserrat } from "next/font/google";
import GoogleAnalytics from "../components/GoogleAnalytics";
import "./globals.css";
import { Providers } from "./Providers";
import Header from "../components/shared/Header";
import Footer from "./(root)/(home)/components/Footer";
import AdSense from "../components/AdSense";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "RefreeG",
  description: "Building Africa’s number 1 crowdfunding platform :)",
  keywords:
    "crowdfunding, Africa, fundraising, investment, startup, community,refreeg, refreegerians,RefreeG",
  author: "RefreeG",
  publisher: "RefreeG",
  robots: "index, follow",
  icon: "/logo.png",
  og: {
    title: "RefreeG - Crowdfunding Platform",
    description: "Join us in building Africa’s number 1 crowdfunding platform.",
    url: "https://www.refreeg.com",
    type: "website",
    image: "/logo.png",
  },
  twitter: {
    handle: "@RefreeG",
    title: "RefreeG - Crowdfunding Platform",
    description: "Join us in building Africa’s number 1 crowdfunding platform.",
    url: "https://www.x.com/RefreeG",
    image: "/logo.png",
  },
  instagram: {
    handle: "@we_are_refreegerians",
    title: "RefreeG - Crowdfunding Platform",
    description: "Join us in building Africa’s number 1 crowdfunding platform.",
    url: "https://www.instagram.com/we_are_refreegerians",
    image: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <head>
        <AdSense pId="6133323682562865" />
      </head>
      <body className={`${montserrat.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
