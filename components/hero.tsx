"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Counter from "@/components/ui/counter"
import { Clock, Code, Building2, Sparkles, Users, Laptop, Truck, UserCheck } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "@/contexts/translation-context";
import Scene from "./Scene";

export default function Hero() {
   const [hasMounted, setHasMounted] = useState(false);
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.3 });
   const { t } = useTranslation();

   useEffect(() => {
      setHasMounted(true);
   }, []);

   return (
      <section
         ref={ref}
         className="relative w-full py-20 lg:pt-8 overflow-visible"
      >
         {/* Simplified Background Elements */}
         <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-background/50" />

            {/* Static gradient orbs */}
            <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-gradient-to-r from-primary/10 to-blue-400/10 blur-3xl" />
            <div className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400/10 to-primary/10 blur-3xl" />

            {/* Static grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
         </div>

         <div className="container px-4 md:px-12 relative z-10">
            <div className="grid gap-4 lg:grid-cols-2 lg:gap-10 items-center relative">
               <div className="flex flex-col justify-start items-start space-y-8 h-full z-10">
                  <div className="!w-fit flex items-center rounded-full border border-[#027C96] px-3 py-1 text-sm">
                     <Sparkles className="mr-1 h-3.5 w-3.5 text-[#027C96]" />
                     <span className="text-[#027C96]">{t("Giải pháp công nghệ toàn diện")}</span>
                  </div>
                  <div className="space-y-3">
                     <Image
                        src={"/images/text-logo.png"}
                        alt="GENSOL text logo"
                        height={96}
                        width={360}
                        className='filter -ml-2'
                        style={{
                           imageRendering: 'crisp-edges',
                        }}
                        quality={100}
                        priority
                        draggable={false}
                        sizes="360px"
                        unoptimized={false}
                     />

                     <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 text-nowrap font-extrabold">
                           {t("Đồng hành cùng bạn")}
                        </span>
                     </h1>

                     <p className="max-w-[650px] dark:text-white/70 text-black/80 md:text-xl text-justify">
                        {t("Đồng hành cùng bạn trong hành trình số hóa – Phát triển giải pháp linh hoạt & bền vững. Giải pháp Công nghệ toàn diện & Nhân sự IT theo yêu cầu.")}
                     </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                     <Button size="lg">
                        {t("Liên hệ tư vấn")}
                     </Button>
                     <Button
                        size="lg"
                        variant="outline"
                        className="border-primary text-primary"
                     >
                        {t("Tìm hiểu thêm")}
                     </Button>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                     {[
                        { icon: Building2, value: 50, suffix: "+", label: t("Dự án") },
                        { icon: Laptop, value: 10, suffix: "+", label: t("Dịch vụ") },
                        { icon: UserCheck, value: "24/7", suffix: "", label: t("Hỗ trợ") }
                     ].map((stat, index) => (
                        <motion.div 
                           key={index} 
                           className="flex flex-col items-center text-center p-4 backdrop-blur-md bg-white/10 border border-primary dark:border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl first:rounded-l-xl last:rounded-r-xl rounded-xl"
                           whileHover={{ y: -5 }}
                        >
                           <div className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 mb-2">
                              {typeof stat.value === 'number' && hasMounted ? (
                                 <Counter to={stat.value} suffix={stat.suffix} />
                              ) : (
                                 typeof stat.value === 'number' ? `${stat.value}${stat.suffix}` : stat.value
                              )}
                           </div>
                           <div className="flex items-center gap-2 text-sm dark:text-white/70 text-black/80">
                              <stat.icon className="h-5 w-5 text-blue-400" />
                              {stat.label}
                           </div>
                        </motion.div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
         <div className="hidden lg:block">
            <Scene />
         </div>
      </section>
   );
}
