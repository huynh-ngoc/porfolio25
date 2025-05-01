import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import AOSInitializer from "@/components/AOSInitializer"; // ✅

export const metadata = {
  title: "Ngoc Huynh Portfolio",
  description: "Created with Next.js App Router",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">
        <AOSInitializer /> {/* 👈 Mounts on client only */}
        <Navbar />
        <main>{children}</main>
        <footer className="text-center py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Ngoc Huynh. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
