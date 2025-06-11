"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Quote, Heart, Lightbulb, Target, Users, Sparkles, Star, Sparkle } from "lucide-react"
import { motion } from "framer-motion"
import { useTranslation } from "@/contexts/translation-context"
import Image from "next/image"

export default function CompanyValues() {
   const ref = useRef(null)
   const isInView = useInView(ref, { once: true, amount: 0.3 })
   const { t } = useTranslation()

   const values = [
      {
         icon: <Heart className="h-10 w-10 text-white" />,
         title: t("Tận tâm"),
         description:
            t("Chúng tôi luôn đặt khách hàng làm trung tâm, lắng nghe & thấu hiểu nhu cầu để đưa ra giải pháp tối ưu nhất."),
         gradient: "from-rose-400 via-pink-500 to-red-500",
         bgGradient: "from-rose-50/80 via-pink-50/60 to-red-50/80",
         darkBgGradient: "from-rose-900/20 via-pink-900/15 to-red-900/20",
         borderGradient: "from-rose-200/60 via-pink-300/60 to-red-200/60",
         darkBorderGradient: "from-rose-700/40 via-pink-700/40 to-red-700/40",
      },
      {
         icon: <Lightbulb className="h-10 w-10 text-white" />,
         title: t("Sáng tạo"),
         description: t("Không ngừng đổi mới & sáng tạo trong cách tiếp cận, tìm kiếm những giải pháp độc đáo & hiệu quả."),
         gradient: "from-amber-400 via-yellow-500 to-orange-500",
         bgGradient: "from-amber-50/80 via-yellow-50/60 to-orange-50/80",
         darkBgGradient: "from-amber-900/20 via-yellow-900/15 to-orange-900/20",
         borderGradient: "from-amber-200/60 via-yellow-300/60 to-orange-200/60",
         darkBorderGradient: "from-amber-700/40 via-yellow-700/40 to-orange-700/40",
      },
      {
         icon: <Target className="h-10 w-10 text-white" />,
         title: t("Chính xác"),
         description: t("Cam kết chất lượng cao trong mọi sản phẩm & dịch vụ, đảm bảo độ chính xác & tin cậy tuyệt đối."),
         gradient: "from-blue-400 via-cyan-500 to-teal-500",
         bgGradient: "from-blue-50/80 via-cyan-50/60 to-teal-50/80",
         darkBgGradient: "from-blue-900/20 via-cyan-900/15 to-teal-900/20",
         borderGradient: "from-blue-200/60 via-cyan-300/60 to-teal-200/60",
         darkBorderGradient: "from-blue-700/40 via-cyan-700/40 to-teal-700/40",
      },
      {
         icon: <Users className="h-10 w-10 text-white" />,
         title: t("Đồng hành"),
         description: t("Xây dựng mối quan hệ đối tác lâu dài, đồng hành cùng khách hàng trong mọi giai đoạn phát triển."),
         gradient: "from-emerald-400 via-green-500 to-teal-500",
         bgGradient: "from-emerald-50/80 via-green-50/60 to-teal-50/80",
         darkBgGradient: "from-emerald-900/20 via-green-900/15 to-teal-900/20",
         borderGradient: "from-emerald-200/60 via-green-300/60 to-teal-200/60",
         darkBorderGradient: "from-emerald-700/40 via-green-700/40 to-teal-700/40",
      },
   ]

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

   return (
      <motion.section
         ref={ref}
         className="w-full py-16 md:py-20 relative overflow-hidden"
      >
         <div className="absolute inset-0 -z-10">
            <motion.div
               className="absolute inset-0"
            />
            <motion.div
               className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-200/30 via-pink-200/20 to-blue-200/30 dark:from-purple-800/20 dark:via-pink-800/15 dark:to-blue-800/20 blur-3xl"
            />
            <motion.div
               className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-cyan-200/30 via-teal-200/20 to-emerald-200/30 dark:from-cyan-800/20 dark:via-teal-800/15 dark:to-emerald-800/20 blur-3xl"
            />
            <motion.div className="absolute top-[15%] right-[20%] text-purple-300/40 dark:text-purple-600/30">
               <Sparkles size={40} />
            </motion.div>
            <motion.div className="absolute bottom-[20%] left-[15%] text-cyan-300/40 dark:text-cyan-600/30">
               <Star size={35} />
            </motion.div>
         </div>

         <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-20">
               <motion.div className="space-y-4">
                  <motion.div
                     className="rounded-full bg-gradient-to-r from-primary to-blue-400 text-white px-4 py-1.5 text-sm font-medium text-primary flex items-center w-fit gap-1 mx-auto mb-4 border border-[#8FC3FF]"
                  >
                     <Sparkle className="h-4 w-4 text-white" />
                     {t("Giá trị cốt lõi")}
                  </motion.div>
                  <motion.h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                     {t("Những giá trị")}{" "}
                     <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                        {t("định hướng")}
                     </span>
                  </motion.h2>
                  <motion.p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300 text-lg md:text-xl leading-relaxed">
                     {t("Các giá trị cốt lõi này định hướng mọi hoạt động của chúng tôi, từ cách chúng tôi phục vụ khách hàng đến cách chúng tôi phát triển sản phẩm & dịch vụ.")}
                  </motion.p>
               </motion.div>
            </div>

            <motion.div
               className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto"
               variants={containerVariants}
               initial="hidden"
               animate={isInView ? "visible" : "hidden"}
            >
               {values.map((value, index) => (
                  <motion.div
                     key={index}
                     className="group relative"
                     variants={itemVariants}
                     whileHover={{
                        scale: 1.05,
                        y: -15,
                        rotateY: 5,
                        transition: { duration: 0.3, ease: "easeOut" },
                     }}
                  >
                     <div className="relative h-full overflow-hidden rounded-3xl">
                        <div
                           className={`absolute inset-0 bg-gradient-to-br ${value.bgGradient} dark:${value.darkBgGradient} backdrop-blur-xl`}
                        />
                        <div
                           className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${value.borderGradient} dark:${value.darkBorderGradient} p-[2px]`}
                        >
                           <div className="h-full w-full rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl" />
                        </div>
                        <div className="relative z-10 p-8 h-full flex flex-col items-center text-center">
                           <motion.div
                              className={`mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${value.gradient} backdrop-blur-sm`}
                              whileHover={{
                                 scale: 1.1,
                                 rotate: 5,
                                 transition: { duration: 0.2 },
                              }}
                           >
                              {value.icon}
                           </motion.div>
                           <motion.h3 className="mb-4 text-2xl font-bold text-slate-800 dark:text-white">
                              {value.title}
                           </motion.h3>
                           <motion.p className="text-slate-600 dark:text-slate-300 leading-relaxed flex-1">
                              {value.description}
                           </motion.p>
                           <motion.div className="mt-6 w-full h-1 bg-slate-200/50 dark:bg-slate-700/50 rounded-full overflow-hidden">
                              <motion.div
                                 className={`h-full bg-gradient-to-r ${value.gradient} rounded-full`}
                                 initial={{ width: 0 }}
                                 whileInView={{ width: "100%" }}
                                 transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
                              />
                           </motion.div>
                        </div>
                        <motion.div
                           className={`absolute top-4 right-4 w-4 h-4 rounded-full bg-gradient-to-r ${value.gradient} opacity-60`}
                        />
                        <motion.div
                           className={`absolute top-8 right-8 w-2 h-2 rounded-full bg-gradient-to-r ${value.gradient} opacity-40`}
                        />
                        <div
                           className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
                        />
                     </div>
                  </motion.div>
               ))}
            </motion.div>

            <motion.div className="mt-24 text-center">
               <div className="max-w-5xl mx-auto">
                  <div 
                  style={{
                     backgroundImage: "url('/images/simple-shiny.svg')",
                     backgroundSize: "cover",
                     backgroundPosition: "center",
                     backgroundRepeat: "no-repeat"
                  }}
                  className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/80 via-slate-50/90 to-blue-50/80 dark:from-slate-800/80 dark:via-slate-900/90 dark:to-blue-900/80 backdrop-blur-xl border dark:border-slate-700/30 p-12 border-[#8FC3FF50]">
                     <motion.blockquote
                        className="text-2xl md:text-3xl font-normal dark:text-black/80 text-black/80 italic mb-8 leading-relaxed"
                        style={{
                           fontFamily: '"Playfair Display", "Crimson Text", "Noto Serif", "Times New Roman", serif',
                        }}
                     >
                         <motion.div className="mb-8">
                        <Quote className="h-12 w-12 text-[#025191] mx-auto" fill="currentColor"/>
                     </motion.div>
                        {t("Chúng tôi tin rằng thành công của khách hàng chính là thành công của chúng tôi. Mỗi dự án không chỉ là một hợp đồng, mà là một cơ hội để tạo ra giá trị thực sự & xây dựng tương lai tốt đẹp hơn.")}
                     </motion.blockquote>
                     <motion.div className="flex items-center justify-center gap-4">
                        <motion.img
                           src={"/images/logo.png"}
                           alt="GENSOL logo"
                           className='object-contain filter h-24 w-auto'
                           style={{
                              imageRendering: 'crisp-edges',
                           }}
                           draggable={false}
                        />
                     </motion.div>
                  </div>
               </div>
            </motion.div>
         </div>
      </motion.section>
   )
}
