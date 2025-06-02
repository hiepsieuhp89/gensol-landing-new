"use client";

import { useRef } from "react";
import { useInView, useScroll, useTransform } from "framer-motion";
import { Quote, Heart, Lightbulb, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function CompanyValues() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.3 });
   
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]
   });

   // Enhanced scroll-based transforms for values section
   const sectionY = useTransform(scrollYProgress, [0, 1], [150, -150]);
   const sectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
   const sectionScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.85]);
   const sectionRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -15]);

   // Values grid animations
   const gridY = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [100, 0, 0, -80]);
   const gridRotateZ = useTransform(scrollYProgress, [0, 0.5, 1], [-3, 0, 4]);

   // Quote section animations
   const quoteY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [200, 0, 0, -100]);
   const quoteScale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.6, 1.1, 1.1, 0.8]);
   const quoteRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 8]);

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
         y: 40, 
         scale: 0.9
      },
      visible: {
         opacity: 1,
         y: 0,
         scale: 1,
         transition: { 
            duration: 0.6,
            ease: "easeOut"
         },
      },
   };

   return (
      <motion.section 
         ref={ref}
         className="w-full py-12 md:pb-16 md:pt-0 relative overflow-hidden"
         style={{ 
            y: sectionY, 
            opacity: sectionOpacity, 
            scale: sectionScale, 
            rotateX: sectionRotateX,
            perspective: 1000 
         }}
      >
         {/* Enhanced Background Elements with scroll effects */}
         <div className="absolute inset-0 -z-10">
            <motion.div 
               className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-background"
               style={{
                  opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.5])
               }}
            />
            <motion.div 
               className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-primary/5 to-blue-400/5 blur-3xl"
               style={{
                  x: useTransform(scrollYProgress, [0, 0.5, 1], [0, -200, 150]),
                  y: useTransform(scrollYProgress, [0, 0.5, 1], [0, 120, -100]),
                  scale: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1.6, 1.4, 0.7]),
                  rotate: useTransform(scrollYProgress, [0, 1], [0, 450])
               }}
            />
         </div>

         <div className="container px-4 md:px-6">
            {/* Header Section */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
               <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6 }}
               >
                  <motion.div 
                     className="inline-block rounded-full bg-[#E2E8F0] dark:bg-[#1E293B] px-4 py-1.5 text-sm font-medium text-primary"
                     initial={{ scale: 0 }}
                     animate={isInView ? { scale: 1 } : { scale: 0 }}
                     transition={{ duration: 0.5, delay: 0.2 }}
                  >
                     Giá trị cốt lõi
                  </motion.div>
                  
                  <motion.h2 
                     className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl"
                     initial={{ opacity: 0, y: 20 }}
                     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                     transition={{ duration: 0.6, delay: 0.3 }}
                  >
                     Những giá trị{" "}
                     <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                        định hướng
                     </span>
                  </motion.h2>
                  
                  <motion.p 
                     className="max-w-[800px] mx-auto text-muted-foreground md:text-lg"
                     initial={{ opacity: 0, y: 20 }}
                     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                     transition={{ duration: 0.6, delay: 0.4 }}
                  >
                     Các giá trị cốt lõi này định hướng mọi hoạt động của chúng tôi, 
                     từ cách chúng tôi phục vụ khách hàng đến cách chúng tôi phát triển sản phẩm.
                  </motion.p>
               </motion.div>
            </div>

            {/* Values Grid with enhanced animations */}
            <motion.div
               className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
               variants={containerVariants}
               initial="hidden"
               animate={isInView ? "visible" : "hidden"}
               style={{ y: gridY, rotateZ: gridRotateZ }}
            >
               {values.map((value, index) => (
                  <motion.div
                     key={index}
                     className="group relative overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm p-8 text-center transition-all cursor-pointer hover:shadow-lg"
                     variants={itemVariants}
                     style={{
                        // Individual card animations
                        x: useTransform(
                           scrollYProgress,
                           [0, 0.3, 0.7, 1],
                           [
                              index % 2 === 0 ? -60 : 60,
                              0,
                              0,
                              index % 2 === 0 ? 40 : -40
                           ]
                        ),
                        rotateY: useTransform(
                           scrollYProgress,
                           [0, 0.4, 0.6, 1],
                           [index % 2 === 0 ? -25 : 25, 0, 0, index % 2 === 0 ? 15 : -15]
                        ),
                        scale: useTransform(
                           scrollYProgress,
                           [0, 0.3, 0.7, 1],
                           [0.7, 1, 1, 0.85]
                        ),
                        transformPerspective: 1000,
                        boxShadow: useTransform(
                           scrollYProgress,
                           [0, 0.4, 0.6, 1],
                           [
                              "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                              "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                              "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                              "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                           ]
                        )
                     }}
                     whileHover={{ 
                        scale: 1.02,
                        y: -5,
                        transition: { duration: 0.2 }
                     }}
                  >
                     {/* Enhanced background with morphing effect */}
                     <motion.div 
                        className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                        style={{
                           opacity: useTransform(
                              scrollYProgress,
                              [0, 0.4, 0.6, 1],
                              [0, 0.15, 0.15, 0]
                           ),
                           scale: useTransform(
                              scrollYProgress,
                              [0, 0.5, 1],
                              [0.8, 1.2, 0.9]
                           )
                        }}
                     />

                     <div className="relative z-10">
                        {/* Icon with complex animations */}
                        <motion.div 
                           className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm mx-auto"
                           style={{
                              scale: useTransform(
                                 scrollYProgress,
                                 [0, 0.3, 0.7, 1],
                                 [0.4, 1.4, 1.4, 0.8]
                              ),
                              rotate: useTransform(
                                 scrollYProgress,
                                 [0, 1],
                                 [0, index % 2 === 0 ? 720 : -720]
                              ),
                              y: useTransform(
                                 scrollYProgress,
                                 [0, 0.5, 1],
                                 [40, 0, -20]
                              )
                           }}
                        >
                           {value.icon}
                        </motion.div>
                        
                        {/* Title with slide and fade */}
                        <motion.h3 
                           className="mb-4 text-xl font-bold"
                           style={{
                              x: useTransform(
                                 scrollYProgress,
                                 [0, 0.3, 0.7, 1],
                                 [index % 2 === 0 ? -40 : 40, 0, 0, index % 2 === 0 ? 20 : -20]
                              ),
                              opacity: useTransform(
                                 scrollYProgress,
                                 [0, 0.2, 0.8, 1],
                                 [0, 1, 1, 0.7]
                              ),
                              scale: useTransform(
                                 scrollYProgress,
                                 [0, 0.4, 0.6, 1],
                                 [0.8, 1.1, 1.1, 0.9]
                              )
                           }}
                        >
                           {value.title}
                        </motion.h3>
                        
                        {/* Description with wave effect */}
                        <motion.p 
                           className="text-muted-foreground leading-relaxed"
                           style={{
                              y: useTransform(
                                 scrollYProgress,
                                 [0, 0.3, 0.7, 1],
                                 [30, 0, 0, -15]
                              ),
                              opacity: useTransform(
                                 scrollYProgress,
                                 [0, 0.25, 0.75, 1],
                                 [0, 1, 1, 0.6]
                              ),
                              scale: useTransform(
                                 scrollYProgress,
                                 [0, 0.4, 0.6, 1],
                                 [0.9, 1, 1, 0.95]
                              )
                           }}
                        >
                           {value.description}
                        </motion.p>
                     </div>

                     {/* Enhanced progress indicator with wave */}
                     <motion.div 
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-blue-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        style={{
                           scaleY: useTransform(
                              scrollYProgress,
                              [0, 0.4, 0.6, 1],
                              [1, 5, 5, 1]
                           ),
                           opacity: useTransform(
                              scrollYProgress,
                              [0, 0.3, 0.7, 1],
                              [0.3, 1, 1, 0.2]
                           )
                        }}
                     />

                     {/* Decorative floating elements */}
                     <motion.div
                        className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary/20"
                        style={{
                           scale: useTransform(
                              scrollYProgress,
                              [0, 0.5, 1],
                              [0, 1.5, 0]
                           ),
                           rotate: useTransform(
                              scrollYProgress,
                              [0, 1],
                              [0, 360]
                           ),
                           opacity: useTransform(
                              scrollYProgress,
                              [0, 0.3, 0.7, 1],
                              [0, 1, 1, 0]
                           )
                        }}
                     />
                  </motion.div>
               ))}
            </motion.div>

            {/* Quote Section with enhanced animations */}
            <motion.div
               className="mt-20 text-center"
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
               transition={{ duration: 0.6, delay: 0.8 }}
               style={{ y: quoteY, scale: quoteScale, rotateZ: quoteRotate }}
            >
               <div className="max-w-4xl mx-auto">
                  <div className="relative">
                     {/* Quote icon with complex animation */}
                     <motion.div
                        style={{
                           scale: useTransform(
                              scrollYProgress,
                              [0, 0.4, 0.6, 1],
                              [0.3, 1.5, 1.5, 0.8]
                           ),
                           rotate: useTransform(
                              scrollYProgress,
                              [0, 1],
                              [0, 180]
                           ),
                           opacity: useTransform(
                              scrollYProgress,
                              [0, 0.3, 0.7, 1],
                              [0, 1, 1, 0.3]
                           )
                        }}
                     >
                        <Quote className="h-12 w-12 text-primary/20 mx-auto mb-6" />
                     </motion.div>
                     
                     {/* Quote text with typewriter reveal effect */}
                     <motion.blockquote 
                        className="text-xl md:text-2xl font-medium text-muted-foreground italic mb-6"
                        style={{
                           clipPath: useTransform(
                              scrollYProgress,
                              [0, 0.4, 0.6, 1],
                              [
                                 "inset(0 100% 0 0)",
                                 "inset(0 0% 0 0)",
                                 "inset(0 0% 0 0)",
                                 "inset(0 0 0 100%)"
                              ]
                           ),
                           scale: useTransform(
                              scrollYProgress,
                              [0, 0.4, 0.6, 1],
                              [0.9, 1.05, 1.05, 0.95]
                           )
                        }}
                     >
                        "Chúng tôi tin rằng thành công của khách hàng chính là thành công của chúng tôi. 
                        Mỗi dự án không chỉ là một hợp đồng, mà là một cơ hội để tạo ra giá trị thực sự."
                     </motion.blockquote>
                     
                     {/* Author section with slide-in effect */}
                     <motion.div 
                        className="flex items-center justify-center gap-2"
                        style={{
                           x: useTransform(
                              scrollYProgress,
                              [0, 0.4, 0.6, 1],
                              [-100, 0, 0, 50]
                           ),
                           opacity: useTransform(
                              scrollYProgress,
                              [0, 0.3, 0.7, 1],
                              [0, 1, 1, 0.8]
                           )
                        }}
                     >
                        <div 
                           className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-blue-400 flex items-center justify-center"
                           // style={{
                           //    scale: useTransform(
                           //       scrollYProgress,
                           //       [0, 0.4, 0.6, 1],
                           //       [0.5, 1.2, 1.2, 0.9]
                           //    ),
                           //    rotate: useTransform(
                           //       scrollYProgress,
                           //       [0, 1],
                           //       [0, 360]
                           //    )
                           // }}
                        >
                           <span className="text-white font-bold">GS</span>
                        </div>
                        <div className="text-left">
                           <div className="font-semibold">Ban lãnh đạo GENSOL</div>
                           <div className="text-sm text-muted-foreground">Công ty TNHH GENSOL</div>
                        </div>
                     </motion.div>
                  </div>
               </div>
            </motion.div>
         </div>
      </motion.section>
   );
}
