"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Quote, Heart, Lightbulb, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function CompanyValues() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.2 });

   const values = [
      {
         icon: <Heart className="h-8 w-8 text-red-500" />,
         title: "Tận tâm",
         description: "Chúng tôi luôn đặt khách hàng làm trung tâm, lắng nghe và thấu hiểu nhu cầu để đưa ra giải pháp tối ưu nhất.",
         color: "from-red-500/20 to-pink-500/20"
      },
      {
         icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
         title: "Sáng tạo",
         description: "Không ngừng đổi mới và sáng tạo trong cách tiếp cận, tìm kiếm những giải pháp độc đáo và hiệu quả.",
         color: "from-yellow-500/20 to-orange-500/20"
      },
      {
         icon: <Target className="h-8 w-8 text-blue-500" />,
         title: "Chính xác",
         description: "Cam kết chất lượng cao trong mọi sản phẩm và dịch vụ, đảm bảo độ chính xác và tin cậy tuyệt đối.",
         color: "from-blue-500/20 to-cyan-500/20"
      },
      {
         icon: <Users className="h-8 w-8 text-green-500" />,
         title: "Đồng hành",
         description: "Xây dựng mối quan hệ đối tác lâu dài, đồng hành cùng khách hàng trong mọi giai đoạn phát triển.",
         color: "from-green-500/20 to-emerald-500/20"
      }
   ];

   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1,
         },
      },
   };

   const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1,
         transition: { duration: 0.5 },
      },
   };

   return (
      <section className="w-full py-20 md:py-32 relative overflow-hidden">
         {/* Background Elements */}
         <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-background" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-primary/5 to-blue-400/5 blur-3xl" />
         </div>

         <div className="container px-4 md:px-6" ref={ref}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
               <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
               >
                  <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                     Giá trị cốt lõi
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                     Những giá trị{" "}
                     <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                        định hướng
                     </span>
                  </h2>
                  <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
                     Các giá trị cốt lõi này định hướng mọi hoạt động của chúng tôi, 
                     từ cách chúng tôi phục vụ khách hàng đến cách chúng tôi phát triển sản phẩm.
                  </p>
               </motion.div>
            </div>

            <motion.div
               className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
               variants={containerVariants}
               initial="hidden"
               animate={isInView ? "visible" : "hidden"}
            >
               {values.map((value, index) => (
                  <motion.div
                     key={index}
                     className="group relative overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm p-8 text-center transition-all hover:shadow-lg hover:shadow-primary/5"
                     variants={itemVariants}
                  >
                     <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                     <div className="relative z-10">
                        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm mx-auto">
                           {value.icon}
                        </div>
                        
                        <h3 className="mb-4 text-xl font-bold">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                     </div>

                     <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-blue-400 group-hover:w-full transition-all duration-500" />
                  </motion.div>
               ))}
            </motion.div>

            {/* Quote Section */}
            <motion.div
               className="mt-20 text-center"
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
               transition={{ duration: 0.5, delay: 0.5 }}
            >
               <div className="max-w-4xl mx-auto">
                  <div className="relative">
                     <Quote className="h-12 w-12 text-primary/20 mx-auto mb-6" />
                     <blockquote className="text-xl md:text-2xl font-medium text-muted-foreground italic mb-6">
                        "Chúng tôi tin rằng thành công của khách hàng chính là thành công của chúng tôi. 
                        Mỗi dự án không chỉ là một hợp đồng, mà là một cơ hội để tạo ra giá trị thực sự."
                     </blockquote>
                     <div className="flex items-center justify-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-blue-400 flex items-center justify-center">
                           <span className="text-white font-bold">GS</span>
                        </div>
                        <div className="text-left">
                           <div className="font-semibold">Ban lãnh đạo GENSOL</div>
                           <div className="text-sm text-muted-foreground">Công ty TNHH GENSOL</div>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>
      </section>
   );
}
