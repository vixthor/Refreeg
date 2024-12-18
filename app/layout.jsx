import { Montserrat } from "next/font/google";
import GoogleAnalytics from "../components/GoogleAnalytics";
import "./globals.css";
import { Providers } from "./Providers";

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
      <body className={montserrat.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
