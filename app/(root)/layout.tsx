import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { BottomBar, LeftSidebar, RightSidebar, TopBar } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Threads",
  description: "A next.js 13 Meta Threads Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <TopBar />
          <main>
            <LeftSidebar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            <RightSidebar />
          </main>
          <BottomBar />
        </body>
      </html>
    </ClerkProvider>
  );
}
