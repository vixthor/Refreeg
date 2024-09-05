import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "RefreeG",
  description: "Building Africa’s number 1 crowd funding platform:)",
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
