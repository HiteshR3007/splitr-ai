import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import {ClerkProvider} from '@clerk/nextjs';
import { Toaster } from "sonner";

const inter = Inter({ subsets:["latin"] });

export const metadata = {
  title: "SPLITR",
  description: "MADE by AI",
};

export default function RootLayout({ children }) {
  return (
      <ClerkProvider 
          publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
        >
    <html lang="en">
      <head>
        <link rel ="icon" href="/logos/logo-s.png" sizes="any" />
      </head>
      <body className={`${inter.className} `}>
          <ConvexClientProvider>
            <Header />
            <main className="min-h-screen">
              {children}
              <Toaster richColors />
            </main> 
          </ConvexClientProvider>
      </body>
    </html>
        </ClerkProvider>
  );
}
