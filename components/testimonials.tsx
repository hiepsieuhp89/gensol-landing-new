"use client"

import { useRef } from "react"
import { useInView, useScroll, useTransform } from "framer-motion"
import { Quote, Heart, Lightbulb, Target, Users, Sparkles, Star } from "lucide-react"
import { motion } from "framer-motion"

export default function CompanyValues() {
   const ref = useRef(null)
   const isInView = useInView(ref, { once: true, amount: 0.3 })

   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"],
   })

   // Enhanced scroll-based transforms for values section
   const sectionY = useTransform(scrollYProgress, [0, 1], [120, -120])
   const sectionScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0.9])
   const sectionRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -10])

   // Values grid animations
   const gridY = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [80, 0, 0, -60])
   const gridRotateZ = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 3])

   // Quote section animations
   const quoteY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [150, 0, 0, -80])
   const quoteScale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.7, 1.05, 1.05, 0.85])
   const quoteRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-8, 0, 6])

   const values = [
      {
         icon: <Heart className="h-10 w-10 text-white" />,
         title: "Tận tâm",
         description:
            "Chúng tôi luôn đặt khách hàng làm trung tâm, lắng nghe và thấu hiểu nhu cầu để đưa ra giải pháp tối ưu nhất.",
         gradient: "from-rose-400 via-pink-500 to-red-500",
         bgGradient: "from-rose-50/80 via-pink-50/60 to-red-50/80",
         darkBgGradient: "from-rose-900/20 via-pink-900/15 to-red-900/20",
         borderGradient: "from-rose-200/60 via-pink-300/60 to-red-200/60",
         darkBorderGradient: "from-rose-700/40 via-pink-700/40 to-red-700/40",
      },
      {
         icon: <Lightbulb className="h-10 w-10 text-white" />,
         title: "Sáng tạo",
         description: "Không ngừng đổi mới và sáng tạo trong cách tiếp cận, tìm kiếm những giải pháp độc đáo và hiệu quả.",
         gradient: "from-amber-400 via-yellow-500 to-orange-500",
         bgGradient: "from-amber-50/80 via-yellow-50/60 to-orange-50/80",
         darkBgGradient: "from-amber-900/20 via-yellow-900/15 to-orange-900/20",
         borderGradient: "from-amber-200/60 via-yellow-300/60 to-orange-200/60",
         darkBorderGradient: "from-amber-700/40 via-yellow-700/40 to-orange-700/40",
      },
      {
         icon: <Target className="h-10 w-10 text-white" />,
         title: "Chính xác",
         description: "Cam kết chất lượng cao trong mọi sản phẩm và dịch vụ, đảm bảo độ chính xác và tin cậy tuyệt đối.",
         gradient: "from-blue-400 via-cyan-500 to-teal-500",
         bgGradient: "from-blue-50/80 via-cyan-50/60 to-teal-50/80",
         darkBgGradient: "from-blue-900/20 via-cyan-900/15 to-teal-900/20",
         borderGradient: "from-blue-200/60 via-cyan-300/60 to-teal-200/60",
         darkBorderGradient: "from-blue-700/40 via-cyan-700/40 to-teal-700/40",
      },
      {
         icon: <Users className="h-10 w-10 text-white" />,
         title: "Đồng hành",
         description: "Xây dựng mối quan hệ đối tác lâu dài, đồng hành cùng khách hàng trong mọi giai đoạn phát triển.",
         gradient: "from-emerald-400 via-green-500 to-teal-500",
         bgGradient: "from-emerald-50/80 via-green-50/60 to-teal-50/80",
         darkBgGradient: "from-emerald-900/20 via-green-900/15 to-teal-900/20",
         borderGradient: "from-emerald-200/60 via-green-300/60 to-teal-200/60",
         darkBorderGradient: "from-emerald-700/40 via-green-700/40 to-teal-700/40",
      },
   ]

   // Updated variants to use transform instead of opacity
   const containerVariants = {
      hidden: {
         y: 60,
         scale: 0.9,
      },
      visible: {
         y: 0,
         scale: 1,
         transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
            duration: 0.8,
            ease: "easeOut",
         },
      },
   }

   const itemVariants = {
      hidden: {
         y: 100,
         scale: 0.7,
         rotateY: 60,
      },
      visible: {
         y: 0,
         scale: 1,
         rotateY: 0,
         transition: {
            duration: 0.7,
            ease: "easeOut",
         },
      },
   }

   const cardTransforms = (index: number) => {
      const x = useTransform(
         scrollYProgress,
         [0, 0.3, 0.7, 1],
         [index % 2 === 0 ? -80 : 80, 0, 0, index % 2 === 0 ? 50 : -50],
      )
      const rotateY = useTransform(
         scrollYProgress,
         [0, 0.4, 0.6, 1],
         [index % 2 === 0 ? -30 : 30, 0, 0, index % 2 === 0 ? 20 : -20],
      )
      const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.8])
      return {
         x,
         rotateY,
         scale,
         transformPerspective: 1200,
      }
   }

   return (
      <motion.section
         ref={ref}
         className="w-full py-16 md:py-24 relative overflow-hidden"
         style={{
            y: sectionY,
            scale: sectionScale,
            rotateX: sectionRotateX,
            perspective: 1200,
         }}
      >
         {/* Enhanced Background Elements */}
         <div className="absolute inset-0 -z-10">
            {/* Main gradient background */}
            <motion.div
               className="absolute inset-0 bg-gradient-to-br from-slate-50/90 via-white/95 to-blue-50/90 dark:from-slate-900/90 dark:via-slate-800/95 dark:to-blue-900/90"
               style={{
                  scale: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.9]),
               }}
            />

            {/* Animated gradient orbs */}
            <motion.div
               className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-200/30 via-pink-200/20 to-blue-200/30 dark:from-purple-800/20 dark:via-pink-800/15 dark:to-blue-800/20 blur-3xl"
               style={{
                  x: useTransform(scrollYProgress, [0, 0.5, 1], [0, -150, 100]),
                  y: useTransform(scrollYProgress, [0, 0.5, 1], [0, 100, -80]),
                  scale: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1.4, 1.2, 0.8]),
                  rotate: useTransform(scrollYProgress, [0, 1], [0, 360]),
               }}
            />

            <motion.div
               className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-cyan-200/30 via-teal-200/20 to-emerald-200/30 dark:from-cyan-800/20 dark:via-teal-800/15 dark:to-emerald-800/20 blur-3xl"
               style={{
                  x: useTransform(scrollYProgress, [0, 0.5, 1], [0, 120, -90]),
                  y: useTransform(scrollYProgress, [0, 0.5, 1], [0, -90, 70]),
                  scale: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1.3, 1.1, 0.7]),
                  rotate: useTransform(scrollYProgress, [0, 1], [0, -270]),
               }}
            />

            {/* Floating decorative elements */}
            <motion.div
               className="absolute top-[15%] right-[20%] text-purple-300/40 dark:text-purple-600/30"
               style={{
                  rotate: useTransform(scrollYProgress, [0, 1], [0, 180]),
                  scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.3, 0.9]),
               }}
            >
               <Sparkles size={40} />
            </motion.div>

            <motion.div
               className="absolute bottom-[20%] left-[15%] text-cyan-300/40 dark:text-cyan-600/30"
               style={{
                  rotate: useTransform(scrollYProgress, [0, 1], [0, -200]),
                  scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1.2, 0.8]),
               }}
            >
               <Star size={35} />
            </motion.div>
         </div>

         <div className="container px-4 md:px-6">
            {/* Header Section */}
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-20">
               <motion.div
                  className="space-y-6"
                  initial={{ y: 80, scale: 0.7 }}
                  animate={isInView ? { y: 0, scale: 1 } : { y: 80, scale: 0.7 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
               >
                  <motion.div
                     className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-blue-900/30 backdrop-blur-sm border border-purple-200/50 dark:border-purple-700/30 px-6 py-2 text-sm font-semibold text-purple-700 dark:text-purple-300"
                     initial={{ scale: 0, rotateX: 90 }}
                     animate={isInView ? { scale: 1, rotateX: 0 } : { scale: 0, rotateX: 90 }}
                     transition={{ duration: 0.6, delay: 0.3 }}
                  >
                     <Sparkles className="h-4 w-4" />
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
                     className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300 text-lg md:text-xl leading-relaxed"
                     initial={{ y: 40, scale: 0.9 }}
                     animate={isInView ? { y: 0, scale: 1 } : { y: 40, scale: 0.9 }}
                     transition={{ duration: 0.8, delay: 0.5 }}
                  >
                     Các giá trị cốt lõi này định hướng mọi hoạt động của chúng tôi, từ cách chúng tôi phục vụ khách hàng đến
                     cách chúng tôi phát triển sản phẩm và dịch vụ.
                  </motion.p>
               </motion.div>
            </div>

            {/* Values Grid */}
            <motion.div
               className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto"
               variants={containerVariants}
               initial="hidden"
               animate={isInView ? "visible" : "hidden"}
               style={{ y: gridY, rotateZ: gridRotateZ }}
            >
               {values.map((value, index) => (
                  <motion.div
                     key={index}
                     className="group relative"
                     variants={itemVariants}
                     style={cardTransforms(index)}
                     whileHover={{
                        scale: 1.05,
                        y: -15,
                        rotateY: 5,
                        transition: { duration: 0.3, ease: "easeOut" },
                     }}
                  >
                     <div className="relative h-full overflow-hidden rounded-3xl">
                        {/* Enhanced glassmorphism background */}
                        <div
                           className={`absolute inset-0 bg-gradient-to-br ${value.bgGradient} dark:${value.darkBgGradient} backdrop-blur-xl`}
                        />

                        {/* Gradient border */}
                        <div
                           className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${value.borderGradient} dark:${value.darkBorderGradient} p-[2px]`}
                        >
                           <div className="h-full w-full rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 p-8 h-full flex flex-col items-center text-center">
                           {/* Icon with enhanced styling */}
                           <motion.div
                              className={`mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${value.gradient} backdrop-blur-sm`}
                              style={{
                                 scale: useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.7, 1.1, 1.1, 0.9]),
                              }}
                              whileHover={{
                                 scale: 1.1,
                                 rotate: 5,
                                 transition: { duration: 0.2 },
                              }}
                           >
                              {value.icon}
                           </motion.div>

                           {/* Title */}
                           <motion.h3
                              className="mb-4 text-2xl font-bold text-slate-800 dark:text-white"
                              style={{
                                 x: useTransform(
                                    scrollYProgress,
                                    [0, 0.3, 0.7, 1],
                                    [index % 2 === 0 ? -50 : 50, 0, 0, index % 2 === 0 ? 25 : -25],
                                 ),
                                 scale: useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.8, 1.05, 1.05, 0.95]),
                              }}
                           >
                              {value.title}
                           </motion.h3>

                           {/* Description */}
                           <motion.p
                              className="text-slate-600 dark:text-slate-300 leading-relaxed flex-1"
                              style={{
                                 y: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [40, 0, 0, -20]),
                                 scale: useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.9, 1, 1, 0.95]),
                              }}
                           >
                              {value.description}
                           </motion.p>

                           {/* Enhanced progress indicator */}
                           <motion.div className="mt-6 w-full h-1 bg-slate-200/50 dark:bg-slate-700/50 rounded-full overflow-hidden">
                              <motion.div
                                 className={`h-full bg-gradient-to-r ${value.gradient} rounded-full`}
                                 initial={{ width: 0 }}
                                 whileInView={{ width: "100%" }}
                                 transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
                                 style={{
                                    scaleY: useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [1, 3, 3, 1]),
                                 }}
                              />
                           </motion.div>
                        </div>

                        {/* Floating decorative elements */}
                        <motion.div
                           className={`absolute top-4 right-4 w-4 h-4 rounded-full bg-gradient-to-r ${value.gradient} opacity-60`}
                           style={{
                              scale: useTransform(scrollYProgress, [0, 0.5, 1], [0, 1.5, 0]),
                              rotate: useTransform(scrollYProgress, [0, 1], [0, 360]),
                           }}
                        />
                        <motion.div
                           className={`absolute top-8 right-8 w-2 h-2 rounded-full bg-gradient-to-r ${value.gradient} opacity-40`}
                           style={{
                              scale: useTransform(scrollYProgress, [0, 0.5, 1], [0, 2, 0]),
                              rotate: useTransform(scrollYProgress, [0, 1], [0, -360]),
                           }}
                        />

                        {/* Hover glow effect */}
                        <div
                           className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
                        />
                     </div>
                  </motion.div>
               ))}
            </motion.div>

            {/* Enhanced Quote Section */}
            <motion.div
               className="mt-24 text-center"
               initial={{ y: 100, scale: 0.8 }}
               animate={isInView ? { y: 0, scale: 1 } : { y: 100, scale: 0.8 }}
               transition={{ duration: 0.8, delay: 1 }}
               style={{ y: quoteY, scale: quoteScale, rotateZ: quoteRotate }}
            >
               <div className="max-w-5xl mx-auto">
                  <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/80 via-slate-50/90 to-blue-50/80 dark:from-slate-800/80 dark:via-slate-900/90 dark:to-blue-900/80 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/30 p-12">
                     {/* Quote icon */}
                     <motion.div
                        className="mb-8"
                        style={{
                           scale: useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.5, 1.2, 1.2, 0.9]),
                           rotate: useTransform(scrollYProgress, [0, 1], [0, 180]),
                        }}
                     >
                        <Quote className="h-16 w-16 text-purple-400/60 dark:text-purple-500/40 mx-auto" />
                     </motion.div>

                     {/* Quote text */}
                     <motion.blockquote
                        className="text-2xl md:text-3xl font-medium text-slate-700 dark:text-slate-200 italic mb-8 leading-relaxed"
                        style={{
                           clipPath: useTransform(
                              scrollYProgress,
                              [0, 0.4, 0.6, 1],
                              ["inset(0 100% 0 0)", "inset(0 0% 0 0)", "inset(0 0% 0 0)", "inset(0 0 0 100%)"],
                           ),
                           scale: useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.9, 1.02, 1.02, 0.98]),
                        }}
                     >
                        "Chúng tôi tin rằng thành công của khách hàng chính là thành công của chúng tôi. Mỗi dự án không chỉ là
                        một hợp đồng, mà là một cơ hội để tạo ra giá trị thực sự và xây dựng tương lai tốt đẹp hơn."
                     </motion.blockquote>

                     {/* Author section */}
                     <motion.div
                        className="flex items-center justify-center gap-4"
                        style={{
                           x: useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [-120, 0, 0, 60]),
                        }}
                     >
                        <motion.div
                           className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center"
                           style={{
                              scale: useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.6, 1.1, 1.1, 0.95]),
                              rotate: useTransform(scrollYProgress, [0, 1], [0, 360]),
                           }}
                        >
                           <span className="text-white font-bold text-xl">GS</span>
                        </motion.div>
                        <div className="text-left">
                           <div className="font-bold text-lg text-slate-800 dark:text-white">Ban lãnh đạo GENSOL</div>
                           <div className="text-slate-600 dark:text-slate-400">Công ty TNHH GENSOL</div>
                        </div>
                     </motion.div>
                  </div>
               </div>
            </motion.div>
         </div>
      </motion.section>
   )
}
