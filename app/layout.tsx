import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavbarLG, NavbarMobile } from "./_components/HomePage/Navbar";
import { Footer, FooterPhone } from "./_components/Footer";

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

export const metadata: Metadata = {
  title: "nXtribe - Making Way Of Success",
  description:
    "Empowering People, Amplifying Reach, Unlocking Potential, and Delivering Infinite Solutions.",
  icons: {
    icon: "/images/main-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <header className="w-full sticky top-0 z-50">
            <NavbarLG />
            <NavbarMobile />
          </header>
          <main>{children}</main>
          <footer>
            <Footer />
            <FooterPhone />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
