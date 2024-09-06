import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "RefreeG",
  description: "Building Africa’s number 1 crowdfunding platform :)",
  keywords: "crowdfunding, Africa, fundraising, investment, startup, community",
  author: "RefreeG",
  publisher: "RefreeG",
  robots: "index, follow",
  og: {
    title: "RefreeG - Crowdfunding Platform",
    description: "Join us in building Africa’s number 1 crowdfunding platform.",
    url: "https://www.refreeg.com",
    type: "website",
  },
  twitter: {
    handle: "@RefreeG",
    title: "RefreeG - Crowdfunding Platform",
    description: "Join us in building Africa’s number 1 crowdfunding platform.",
    url: "https://www.x.com/RefreeG",
  },
  instagram: {
    handle: "@we_are_refreegerians",
    title: "RefreeG - Crowdfunding Platform",
    description: "Join us in building Africa’s number 1 crowdfunding platform.",
    url: "https://www.instagram.com/we_are_refreegerians",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Providers>
        {children}
        </Providers>
        </body>
    </html>
  );
}
