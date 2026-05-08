import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Portfolio",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}