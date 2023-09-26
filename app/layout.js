import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hunter Coder",
  description: "A blog for code hunters",
  icons : {
    icon: [
      '/favicon.ico?v=4',
    ],
    shortcut: [
      '/apple-touch-icon.png',
    ],
    apple: [
      '/apple-touch-icon.png?v=4',
    ]
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className={inter.className}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
