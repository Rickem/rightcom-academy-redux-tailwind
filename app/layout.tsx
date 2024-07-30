import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { store } from "@/lib/store";
import { Provider } from "react-redux";
import Navbar from "./_components/Navbar";
import ReduxWrapper from "@/components/ReduxWrapper";
import { ThemeWrapper } from "@/components/ThemeWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxWrapper>
          <ThemeWrapper>
            <div className="min-h-screen">
              <Navbar />
              <div className="mt-12 p-6">{children}</div>
            </div>
          </ThemeWrapper>
        </ReduxWrapper>
        {/* <Provider store={store}>{children}</Provider> */}
      </body>
    </html>
  );
}
