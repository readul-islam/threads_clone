import { Inter } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
export const metadata = {
  title: "Threads",
  description: "A Next.js 13 Meta Threads Application",
};

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-2`}>{children}</body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
