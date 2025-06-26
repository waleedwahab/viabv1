"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { usePathname } from "next/navigation";
import Navbar from  "../components/viab/navbar/Navbar"
// import Footer from "@/components/Footer";
import "../services/themes/Theme.css";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideLayoutPaths = ["/auth/login","/auth/otp", "/auth/register","/auth/new-password","/auth/forgot-password", "/"];
  const shouldHideLayout = hideLayoutPaths.includes(pathname);

  return (
    <>
    <html lang="en">
 <body suppressHydrationWarning={true} className="antialiased">
      {!shouldHideLayout && <Navbar />}
      {children}
      {/* {!shouldHideLayout && <Footer />} */}
      </body>
      </html>
    </>
  );
}
