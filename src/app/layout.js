import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from '../components/dashboard/sidebar/Sidebar';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "First Dashboard",
  description: "Step by step Progress",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <Sidebar />
          <main className="flex-grow p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
