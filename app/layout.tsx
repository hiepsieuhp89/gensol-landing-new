import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
               defaultTheme="system"
               enableSystem
               disableTransitionOnChange
            >
               {children}
            </ThemeProvider>
         </body>
      </html>
   );
}

import "./globals.css";
