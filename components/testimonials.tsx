"use client";

import { useRef } from "react";
import { useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { Quote, Heart, Lightbulb, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function CompanyValues() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: false, amount: 0.3 });
   
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]
   });

   // Smooth spring animations
   const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
   const smoothProgress = useSpring(scrollYProgress, springConfig);

   // Creative transform values with proper reverse animations
   const sectionY = useTransform(smoothProgress, [0, 0.5, 1], [120, 0, -120]);
   const sectionOpacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
   const sectionScale = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9]);

   // Header animations
   const headerY = useTransform(smoothProgress, [0, 0.6], [80, -40]);
   const headerOpacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
   const headerRotate = useTransform(smoothProgress, [0, 1], [0, -3]);

   // Background animations
   const bgScale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.3, 0.7]);
   const bgRotate = useTransform(smoothProgress, [0, 1], [0, 180]);
   const bgOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.3, 0.7, 0.2]);

   // Quote section animations
   const quoteY = useTransform(smoothProgress, [0, 0.8], [60, -30]);
   const quoteOpacity = useTransform(smoothProgress, [0, 0.4, 0.9, 1], [0, 1, 1, 0]);
   const quoteScale = useTransform(smoothProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

   const values = [
      {
         icon: <Heart className="h-8 w-8 text-red-500" />,
         title: "Tận tâm",
         description: "Chúng tôi luôn đặt khách hàng làm trung tâm, lắng nghe và thấu hiểu nhu cầu để đưa ra giải pháp tối ưu nhất.",
         color: "from-red-500/20 to-pink-500/20",
         borderColor: "border-red-500/30",
         shadowColor: "shadow-red-500/20"
      },
      {
         icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
         title: "Sáng tạo",
         description: "Không ngừng đổi mới và sáng tạo trong cách tiếp cận, tìm kiếm những giải pháp độc đáo và hiệu quả.",
         color: "from-yellow-500/20 to-orange-500/20",
         borderColor: "border-yellow-500/30",
         shadowColor: "shadow-yellow-500/20"
      },
      {
         icon: <Target className="h-8 w-8 text-blue-500" />,
         title: "Chính xác",
         description: "Cam kết chất lượng cao trong mọi sản phẩm và dịch vụ, đảm bảo độ chính xác và tin cậy tuyệt đối.",
         color: "from-blue-500/20 to-cyan-500/20",
         borderColor: "border-blue-500/30",
         shadowColor: "shadow-blue-500/20"
      },
      {
         icon: <Users className="h-8 w-8 text-green-500" />,
         title: "Đồng hành",
         description: "Xây dựng mối quan hệ đối tác lâu dài, đồng hành cùng khách hàng trong mọi giai đoạn phát triển.",
         color: "from-green-500/20 to-emerald-500/20",
         borderColor: "border-green-500/30",
         shadowColor: "shadow-green-500/20"
      }
   ];

   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
         },
      },
   };

   const itemVariants = {
      hidden: { 
         opacity: 0, 
         y: 60, 
         scale: 0.8,
         rotateY: -30
      },
      visible: {
         opacity: 1,
         y: 0,
         scale: 1,
         rotateY: 0,
         transition: { 
            duration: 0.8,
            ease: "easeOut",
            type: "spring",
            stiffness: 100
         },
      },
   };

   return (
      <motion.section 
         ref={ref}
         className="w-full py-12 md:py-16 relative overflow-hidden"
         style={{ y: sectionY, opacity: sectionOpacity, scale: sectionScale }}
      >
         <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-background" />
            <motion.div 
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-primary/5 to-blue-400/5 blur-3xl"
               style={{
                  scale: bgScale,
                  rotate: bgRotate,
                  opacity: bgOpacity,
               }}
               initial={{ borderRadius: "50%" }}
               animate={{ borderRadius: "40% 60%" }}
               transition={{ duration: 2 }}
            />

            {values.map((value, index) => (
               <motion.div
                  key={index}
                  className="absolute w-6 h-6 opacity-20"
                  style={{
                     left: `${20 + index * 20}%`,
                     top: `${25 + (index % 2) * 40}%`,
                  }}
                  initial={{ opacity: 0.2, scale: 0.8 }}
                  animate={{ opacity: 0.4, scale: 1.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
               >
                  {value.icon}
               </motion.div>
            ))}

            {/* Static particle system */}
            {[...Array(12)].map((_, i) => (
               <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary/30 rounded-full"
                  style={{
                     left: `${10 + i * 8}%`,
                     top: `${15 + (i % 4) * 20}%`,
                  }}
                  initial={{ opacity: 0.2, scale: 0.5 }}
                  animate={{ opacity: 0.8, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
               />
            ))}
         </div>

         <div className="container px-4 md:px-6">
            {/* Header Section */}
            <motion.div
               className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
               style={{ y: headerY, opacity: headerOpacity, rotateZ: headerRotate }}
            >
               <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8 }}
               >
                  <motion.div 
                     className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
                     initial={{ scale: 0, rotateZ: 180 }}
                     animate={isInView ? { scale: 1, rotateZ: 0 } : { scale: 0, rotateZ: 180 }}
                     transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                     whileHover={{ scale: 1.1, rotateZ: -5 }}
                  >
                     Giá trị cốt lõi
                  </motion.div>
                  
                  <motion.h2 
                     className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl"
                     initial={{ opacity: 0, y: 30, rotateX: -20 }}
                     animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 30, rotateX: -20 }}
                     transition={{ duration: 0.8, delay: 0.4 }}
                  >
                     {"Những giá trị ".split("").map((char, index) => (
                        <motion.span
                           key={index}
                           initial={{ opacity: 0, y: 20 }}
                           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                           transition={{ duration: 0.4, delay: 0.6 + index * 0.03 }}
                           className="inline-block"
                           whileHover={{ scale: 1.1, color: "#3b82f6" }}
                        >
                           {char === " " ? "\u00A0" : char}
                        </motion.span>
                     ))}
                     <motion.span 
                        className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400"
                        initial={{ opacity: 0, scale: 0.8, rotateY: -45 }}
                        animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.8, rotateY: -45 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        whileHover={{ scale: 1.05, rotateY: 5 }}
                     >
                        định hướng
                     </motion.span>
                  </motion.h2>
                  
                  <motion.p 
                     className="max-w-[800px] mx-auto text-muted-foreground md:text-lg"
                     initial={{ opacity: 0, y: 20 }}
                     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                     transition={{ duration: 0.8, delay: 0.8 }}
                  >
                     Các giá trị cốt lõi này định hướng mọi hoạt động của chúng tôi, 
                     từ cách chúng tôi phục vụ khách hàng đến cách chúng tôi phát triển sản phẩm.
                  </motion.p>
               </motion.div>
            </motion.div>

            {/* Values Grid */}
            <motion.div
               className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
               variants={containerVariants}
               initial="hidden"
               animate={isInView ? "visible" : "hidden"}
            >
               {values.map((value, index) => (
                  <motion.div
                     key={index}
                     className="group relative overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm p-8 text-center transition-all cursor-pointer"
                     variants={itemVariants}
                     style={{
                        y: useTransform(smoothProgress, [0, 0.5, 1], [40, 0, -40]),
                     }}
                     whileHover={{ 
                        scale: 1.05,
                        y: -10,
                        rotateY: 5,
                        rotateZ: 1,
                        transition: { 
                           duration: 0.3,
                           type: "spring",
                           stiffness: 300
                        }
                     }}
                     whileTap={{ scale: 0.95 }}
                  >
                     {/* Static background */}
                     <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        initial={{ scale: 0, rotate: 45 }}
                        whileHover={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5 }}
                        animate={{
                           borderRadius: ["20px", "30px 10px", "10px 30px", "20px"],
                        }}
                     />

                     {/* Static border */}
                     <motion.div
                        className={`absolute inset-0 rounded-xl border-2 ${value.borderColor} opacity-0 group-hover:opacity-100`}
                        initial={{ borderRadius: "12px", borderWidth: "2px" }}
                        whileHover={{ borderRadius: "20px", borderWidth: "3px" }}
                        transition={{ duration: 0.3 }}
                     />

                     <div className="relative z-10">
                        {/* Icon with hover animations only */}
                        <motion.div 
                           className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm mx-auto"
                           whileHover={{ 
                              rotate: 360,
                              scale: 1.2,
                              transition: { duration: 0.6 }
                           }}
                           initial={{ scale: 1 }}
                           animate={{ scale: 1.05 }}
                           transition={{ duration: 0.5 }}
                        >
                           <motion.div
                              whileHover={{
                                 filter: "drop-shadow(0 0 12px rgba(59, 130, 246, 0.6))",
                              }}
                           >
                           {value.icon}
                           </motion.div>
                        </motion.div>
                        
                        {/* Title with wave effect */}
                        <motion.h3 
                           className="mb-4 text-xl font-bold"
                           initial={{ opacity: 0 }}
                           animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                           transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        >
                           {value.title.split("").map((char, charIndex) => (
                              <motion.span
                                 key={charIndex}
                                 initial={{ opacity: 0, y: 30 }}
                                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                 transition={{ 
                                    duration: 0.4, 
                                    delay: 0.7 + index * 0.1 + charIndex * 0.05 
                                 }}
                                 className="inline-block"
                                 whileHover={{ 
                                    scale: 1.2, 
                                    y: -5,
                                    transition: { duration: 0.2 }
                                 }}
                              >
                                 {char}
                              </motion.span>
                           ))}
                        </motion.h3>
                        
                        {/* Description with slide effect */}
                        <motion.p 
                           className="text-muted-foreground leading-relaxed"
                           initial={{ opacity: 0, y: 20 }}
                           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                           transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                        >
                           {value.description}
                        </motion.p>
                     </div>

                     {/* Progress indicator */}
                     <motion.div 
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-blue-400"
                        initial={{ width: 0, scaleY: 1 }}
                        whileInView={{ 
                           width: "100%",
                           scaleY: [1, 2, 1],
                        }}
                        transition={{ 
                           width: { duration: 1, delay: index * 0.2 },
                           scaleY: { duration: 0.5, delay: index * 0.2 + 1 }
                        }}
                     />

                     {/* Static particles on hover */}
                     <div className="absolute inset-0 pointer-events-none">
                        {[...Array(4)].map((_, particleIndex) => (
                           <motion.div
                              key={particleIndex}
                              className="absolute w-1 h-1 bg-primary/60 rounded-full"
                              style={{
                                 left: `${25 + particleIndex * 20}%`,
                                 top: `${30 + particleIndex * 15}%`,
                              }}
                              initial={{ opacity: 0, scale: 0 }}
                              whileHover={{
                                 opacity: 1,
                                 scale: 1.5,
                                 y: -30,
                                 x: Math.random() * 20 - 10,
                              }}
                              transition={{
                                 duration: 0.5,
                                 delay: particleIndex * 0.1,
                              }}
                           />
                        ))}
                     </div>
                  </motion.div>
               ))}
            </motion.div>

            {/* Quote Section */}
            <motion.div
               className="mt-20 text-center"
               style={{ y: quoteY, opacity: quoteOpacity, scale: quoteScale }}
            >
               <div className="max-w-4xl mx-auto">
                  <div className="relative">
                     {/* Static quote icon */}
                     <motion.div
                        className="mx-auto mb-6"
                        initial={{ rotate: 0, scale: 1 }}
                        animate={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 1 }}
                     >
                        <Quote className="h-12 w-12 text-primary/20 mx-auto" />
                     </motion.div>
                     
                     {/* Quote text */}
                     <motion.blockquote 
                        className="text-xl md:text-2xl font-medium text-muted-foreground italic mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                     >
                        "Chúng tôi tin rằng thành công của khách hàng chính là thành công của chúng tôi. 
                        Mỗi dự án không chỉ là một hợp đồng, mà là một cơ hội để tạo ra giá trị thực sự."
                     </motion.blockquote>
                     
                     {/* Author section */}
                     <motion.div 
                        className="flex items-center justify-center gap-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.6, delay: 1 }}
                     >
                        <motion.div 
                           className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-blue-400 flex items-center justify-center"
                           whileHover={{ 
                              scale: 1.1,
                              rotate: 360,
                              transition: { duration: 0.5 }
                           }}
                           initial={{ boxShadow: "0 0 0 0 rgba(59, 130, 246, 0.4)" }}
                           animate={{ boxShadow: "0 0 0 10px rgba(59, 130, 246, 0.1)" }}
                           transition={{ duration: 1 }}
                        >
                           <span className="text-white font-bold">GS</span>
                        </motion.div>
                        <div className="text-left">
                           <motion.div 
                              className="font-semibold"
                              whileHover={{ scale: 1.05 }}
                           >
                              Ban lãnh đạo GENSOL
                           </motion.div>
                           <motion.div 
                              className="text-sm text-muted-foreground"
                              whileHover={{ scale: 1.05 }}
                           >
                              Công ty TNHH GENSOL
                           </motion.div>
                        </div>
                     </motion.div>
                  </div>
               </div>
            </motion.div>
         </div>
      </motion.section>
   );
}
