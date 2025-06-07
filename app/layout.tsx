import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "flag-icons/css/flag-icons.min.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TranslationProvider } from "@/contexts/translation-context";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
   title: "GENSOL - Giải pháp công nghệ toàn diện",
   description: "Đồng hành cùng bạn trong hành trình số hóa – Phát triển giải pháp linh hoạt và bền vững. Công nghệ, Nhân sự, Logistics.",
   keywords: "GENSOL, công nghệ, phần mềm, IT, nhân sự, logistics, tư vấn, Việt Nam",
   authors: [{ name: "GENSOL" }],
   creator: "GENSOL",
   publisher: "GENSOL",
   openGraph: {
      title: "GENSOL - Giải pháp công nghệ toàn diện",
      description: "Đồng hành cùng bạn trong hành trình số hóa – Phát triển giải pháp linh hoạt và bền vững.",
      type: "website",
      locale: "vi_VN",
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="vi" suppressHydrationWarning>
         <body className={inter.className}>
            <ThemeProvider
               attribute="class"
               defaultTheme="dark"
               enableSystem
               disableTransitionOnChange
            >
               <TranslationProvider>
                  {children}
                  <Toaster />
               </TranslationProvider>
            </ThemeProvider>
         </body>
      </html>
   );
}
