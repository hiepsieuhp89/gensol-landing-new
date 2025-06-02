"use client";

import { useEffect, useState, useRef  } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import  Counter from "@/components/ui/counter"
import { Clock, Code, Building2, Sparkles, Users, Laptop, Truck, UserCheck } from "lucide-react";
import { motion , useInView, useScroll, useTransform, useSpring} from "framer-motion";
import Scene from "./Scene";

export default function Hero() {
   const [scrollY, setScrollY] = useState(0);
   const ref = useRef(null);
   const isInView = useInView(ref, { once: false, amount: 0.3 });
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"]
   });

   // Smooth spring animations
   const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
   const smoothProgress = useSpring(scrollYProgress, springConfig);

   // Creative transform values with reverse animations
   const heroY = useTransform(smoothProgress, [0, 1], [0, -200]);
   const heroOpacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [1, 0.9, 0.6, 0]);
   const heroScale = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.98, 0.9]);
   
   // Text animations with staggered movement
   const titleY = useTransform(smoothProgress, [0, 0.8], [0, -100]);
   const titleOpacity = useTransform(smoothProgress, [0, 0.6, 1], [1, 0.8, 0]);
   const titleRotate = useTransform(smoothProgress, [0, 1], [0, -2]);
   
   const subtitleY = useTransform(smoothProgress, [0, 0.8], [0, -80]);
   const subtitleOpacity = useTransform(smoothProgress, [0, 0.7, 1], [1, 0.9, 0]);
   
   const descriptionY = useTransform(smoothProgress, [0, 0.8], [0, -60]);
   const descriptionOpacity = useTransform(smoothProgress, [0, 0.8, 1], [1, 1, 0]);
   
   // Button animations
   const buttonsY = useTransform(smoothProgress, [0, 0.8], [0, -40]);
   const buttonsScale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.02, 0.95]);
   
   // Stats animations
   const statsY = useTransform(smoothProgress, [0, 0.8], [0, -20]);
   const statsOpacity = useTransform(smoothProgress, [0, 0.9, 1], [1, 1, 0]);
   
   // Image section with creative movements
   const imageY = useTransform(smoothProgress, [0, 1], [0, -300]);
   const imageScale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.05, 1.2]);
   const imageRotate = useTransform(smoothProgress, [0, 1], [0, 5]);
   
   // Floating elements
   const floatingIcon1Y = useTransform(smoothProgress, [0, 1], [0, -150]);
   const floatingIcon1X = useTransform(smoothProgress, [0, 1], [0, -30]);
   const floatingIcon1Rotate = useTransform(smoothProgress, [0, 1], [0, 180]);
   
   const floatingIcon2Y = useTransform(smoothProgress, [0, 1], [0, -120]);
   const floatingIcon2X = useTransform(smoothProgress, [0, 1], [0, 40]);
   const floatingIcon2Rotate = useTransform(smoothProgress, [0, 1], [0, -180]);

   // Background elements with complex movements
   const orb1X = useTransform(smoothProgress, [0, 1], [0, 150]);
   const orb1Y = useTransform(smoothProgress, [0, 1], [0, -100]);
   const orb1Scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.3, 0.8]);
   const orb1Opacity = useTransform(smoothProgress, [0, 0.5, 1], [0.2, 0.4, 0.1]);
   
   const orb2X = useTransform(smoothProgress, [0, 1], [0, -120]);
   const orb2Y = useTransform(smoothProgress, [0, 1], [0, 80]);
   const orb2Scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.2, 0.9]);
   const orb2Opacity = useTransform(smoothProgress, [0, 0.5, 1], [0.2, 0.3, 0.1]);

   const gridOpacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.7, 0.2]);
   const gridScale = useTransform(smoothProgress, [0, 1], [1, 1.1]);

   useEffect(() => {
      const handleScroll = () => {
         setScrollY(window.scrollY);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   // Typewriter effect for title
   const titleVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1,
         }
      }
   };

   const letterVariants = {
      hidden: { opacity: 0, y: 50, rotateX: -90 },
      visible: {
         opacity: 1,
         y: 0,
         rotateX: 0,
         transition: {
            duration: 0.8,
            ease: "easeOut"
         }
      }
   };

   return (
      <motion.section 
         ref={ref}
         className="relative w-full py-20 lg:pb-0 lg:pt-8 overflow-hidden"
         style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
      >
         {/* Background Elements */}
         <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background to-background/50" />
            
            {/* Animated Gradient Orbs with complex movements */}
            <motion.div
               className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-gradient-to-r from-primary/20 to-blue-400/20 blur-3xl"
               style={{
                  x: orb1X,
                  y: orb1Y,
                  scale: orb1Scale,
                  opacity: orb1Opacity,
               }}
            />
            <motion.div
               className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400/20 to-primary/20 blur-3xl"
               style={{
                  x: orb2X,
                  y: orb2Y,
                  scale: orb2Scale,
                  opacity: orb2Opacity,
               }}
            />

            {/* Grid Pattern with scaling */}
            <motion.div 
               className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"
               style={{
                  opacity: gridOpacity,
                  scale: gridScale,
               }}
            />

            {[...Array(6)].map((_, i) => (
               <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary/30 rounded-full"
                  style={{
                     left: `${20 + i * 15}%`,
                     top: `${30 + i * 10}%`,
                  }}
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: 0.7 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
               />
            ))}
         </div>

         <div className="container px-4 md:px-12 relative ">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
               <motion.div
                  className="flex flex-col justify-start items-start space-y-8 h-full"
                  style={{ y: titleY }}
               >
                  <motion.div 
                     className="!w-fit flex items-center rounded-full border px-3 py-1 text-sm"
                     initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                     animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: -90 }}
                     transition={{ duration: 0.8, delay: 0.1 }}
                     whileHover={{ scale: 1.05, rotateY: 5 }}
                  >
                     <Sparkles className="mr-1 h-3.5 w-3.5 text-primary" />
                     <span>Giải pháp công nghệ toàn diện</span>
                  </motion.div>

                  <div className="space-y-4">
                     <motion.div
                        variants={titleVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        style={{ y: titleY, opacity: titleOpacity, rotateZ: titleRotate }}
                     >
                        <motion.h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/70">
                           {"GENSOL".split("").map((letter, index) => (
                              <motion.span
                                 key={index}
                                 variants={letterVariants}
                                 className="inline-block font-extrabold"
                                 whileHover={{ 
                                    scale: 1.2, 
                                    color: "#3b82f6",
                                    transition: { duration: 0.2 }
                                 }}
                              >
                                 {letter}
                              </motion.span>
                           ))}
                        </motion.h1>
                     </motion.div>
                     
                     <motion.h1 
                        className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
                        style={{ y: subtitleY, opacity: subtitleOpacity }}
                        initial={{ opacity: 0, x: -100, rotateY: -45 }}
                        animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -100, rotateY: -45 }}
                        transition={{ duration: 1, delay: 0.8 }}
                     >
                        <motion.span 
                           className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 text-nowrap"
                           whileHover={{ scale: 1.05 }}
                        >
                           Đồng hành cùng bạn
                        </motion.span>
                     </motion.h1>
                     
                     <motion.p 
                        className="max-w-[600px] text-muted-foreground md:text-xl"
                        style={{ y: descriptionY, opacity: descriptionOpacity }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                     >
                        Đồng hành cùng bạn trong hành trình số hóa – Phát triển giải pháp linh hoạt và bền vững.
                        Giải pháp công nghệ toàn diện, Logistics và Nhân sự theo yêu cầu.
                     </motion.p>
                  </div>

                  <motion.div 
                     className="flex flex-col sm:flex-row gap-4"
                     style={{ y: buttonsY, scale: buttonsScale }}
                     initial={{ opacity: 0, y: 50 }}
                     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                     transition={{ duration: 0.8, delay: 1.5 }}
                  >
                     <motion.div
                        whileHover={{ scale: 1.05, rotateZ: 1 }}
                        whileTap={{ scale: 0.95 }}
                     >
                     <Button
                        size="lg"
                        className="bg-gradient-to-r from-primary to-blue-400 hover:bg-primary/90 transition-all duration-300"
                     >
                        Liên hệ tư vấn
                     </Button>
                     </motion.div>
                     <motion.div
                        whileHover={{ scale: 1.05, rotateZ: -1 }}
                        whileTap={{ scale: 0.95 }}
                     >
                     <Button
                        size="lg"
                        variant="outline"
                        className="group relative overflow-hidden border-primary"
                     >
                        <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-400/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                        <span className="relative">Tìm hiểu thêm</span>
                     </Button>
                     </motion.div>
                  </motion.div>

                  <motion.div 
                     className="flex items-center gap-8"
                     style={{ y: statsY, opacity: statsOpacity }}
                     initial={{ opacity: 0, y: 30 }}
                     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                     transition={{ duration: 0.8, delay: 1.8 }}
                  >
                     {[
                        { icon: Building2, value: 50, suffix: "+", label: "Dự án" },
                        { icon: Laptop, value: 10, suffix: "+", label: "Dịch vụ" },
                        { icon: UserCheck, value: "24/7", suffix: "", label: "Hỗ trợ" }
                     ].map((stat, index) => (
                        <motion.div 
                           key={index}
                           className="flex flex-col items-center"
                           initial={{ opacity: 0, scale: 0 }}
                           animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                           transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
                           whileHover={{ scale: 1.1, y: -5 }}
                        >
                        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                              {typeof stat.value === 'number' && isInView ? (
                                 <Counter to={stat.value} suffix={stat.suffix} />
                              ) : (
                                 stat.value
                              )}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <stat.icon className="h-4 w-4 text-blue-400" />
                              {stat.label}
                        </div>
                           {index < 2 && <div className="h-10 border-r border-border ml-8"></div>}
                        </motion.div>
                     ))}
                  </motion.div>
               </motion.div>

               <motion.div
                  className="relative mx-auto lg:ml-auto h-[600px] w-[700px] cursor-pointer"
                  style={{ y: imageY, scale: imageScale, rotateZ: imageRotate }}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: 45 }}
                  transition={{ duration: 1, delay: 0.5 }}
               >
                  {/* Floating Code Icon */}
                  <motion.div
                     style={{ y: floatingIcon1Y, x: floatingIcon1X, rotateZ: floatingIcon1Rotate }}
                     initial={{ opacity: 0, scale: 0 }}
                     animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                     transition={{ duration: 0.8, delay: 1.5 }}
                     whileHover={{ scale: 1.2, rotateZ: 360 }}
               >
                     <Button 
                     variant="outline"
                        className="absolute -top-6 -left-6 w-12 h-12 rounded-lg bg-background/50 backdrop-blur-sm z-20 border-primary/50"
                     >
                        <Code className="h-8 w-8 text-primary" />
                     </Button>
                  </motion.div>

                  {/* Floating Truck Icon */}
                  <motion.div 
                     className="absolute -bottom-6 -right-6 w-12 h-12 flex items-center justify-center z-20"
                     style={{ y: floatingIcon2Y, x: floatingIcon2X, rotateZ: floatingIcon2Rotate }}
                     initial={{ opacity: 0, scale: 0 }}
                     animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                     transition={{ duration: 0.8, delay: 1.8 }}
                     whileHover={{ scale: 1.2, rotateZ: -360 }}
                  >
                        <Truck className="h-6 w-6 text-blue-400" />
                  </motion.div>

                  {/* Central content area */}
                  <motion.div
                     className="absolute inset-0 rounded-2xl"
                     initial={{ opacity: 0.5 }}
                     animate={{ opacity: 0.7 }}
                     transition={{ duration: 0.5 }}
                  >
                     <Scene />
                  </motion.div>
               </motion.div>
            </div>
         </div>
      </motion.section>
   );
}
