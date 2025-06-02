"use client";

import { useRef } from "react";
import { useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: false, amount: 0.2 });
   
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]
   });

   const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
   const smoothProgress = useSpring(scrollYProgress, springConfig);
   const y = useTransform(smoothProgress, [0, 0.5, 1], [100, 0, -100]);
   const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
   const scale = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9]);

   const contactInfo = [
      {
         icon: <Mail className="h-5 w-5 text-primary" />,
         title: "Email",
         content: "contact@gensol.vn",
         description: "Gửi email cho chúng tôi"
      },
      {
         icon: <Phone className="h-5 w-5 text-primary" />,
         title: "Điện thoại",
         content: "+84 (0) 123 456 789",
         description: "Gọi trực tiếp cho chúng tôi"
      },
      {
         icon: <MapPin className="h-5 w-5 text-primary" />,
         title: "Địa chỉ",
         content: "Hà Nội, Việt Nam",
         description: "Văn phòng chính"
      },
      {
         icon: <Clock className="h-5 w-5 text-primary" />,
         title: "Giờ làm việc",
         content: "8:00 - 17:00",
         description: "Thứ 2 - Thứ 6"
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
      hidden: { y: 30, opacity: 0, scale: 0.95 },
      visible: {
         y: 0,
         opacity: 1,
         scale: 1,
         transition: { 
            duration: 0.6,
            ease: "easeOut"
         },
      },
   };

   return (
      <motion.section 
         id="lien-he" 
         ref={ref}
         className="w-full py-12 md:py-16 relative overflow-hidden"
         style={{ y, opacity }}
      >
         {/* Background Elements */}
         <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
            <motion.div 
               className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-primary/5 to-blue-400/5 blur-3xl"
               style={{
                  scale: useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]),
                  x: useTransform(smoothProgress, [0, 1], [0, 100]),
                  y: useTransform(smoothProgress, [0, 1], [0, -50]),
               }}
            />
            <motion.div 
               className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-400/5 to-primary/5 blur-3xl"
               style={{
                  scale: useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.1, 0.8]),
                  x: useTransform(smoothProgress, [0, 1], [0, -80]),
                  y: useTransform(smoothProgress, [0, 1], [0, 30]),
               }}
            />
         </div>

         <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
               <motion.div
                  className="space-y-2"
                  style={{ scale }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6 }}
               >
                  <motion.div 
                     className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
                     initial={{ scale: 0, rotate: -90 }}
                     animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
                     transition={{ duration: 0.5, delay: 0.2 }}
                  >
                     Liên hệ với chúng tôi
                  </motion.div>
                  <motion.h2 
                     className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl"
                     initial={{ opacity: 0, y: 20 }}
                     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                     transition={{ duration: 0.6, delay: 0.3 }}
                  >
                     Sẵn sàng{" "}
                     <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                        hợp tác?
                     </span>
                  </motion.h2>
                  <motion.p 
                     className="max-w-[800px] mx-auto text-muted-foreground md:text-lg"
                     initial={{ opacity: 0, y: 20 }}
                     animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                     transition={{ duration: 0.6, delay: 0.4 }}
                  >
                     Hãy để lại thông tin và nhu cầu của bạn. Chúng tôi sẽ liên hệ tư vấn 
                     giải pháp phù hợp nhất trong thời gian sớm nhất.
                  </motion.p>
               </motion.div>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 items-start">
               {/* Contact Form */}
               <motion.div
                  className="space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
               >
                  <motion.div
                     className="rounded-xl border bg-background/50 backdrop-blur-sm p-8"
                     variants={itemVariants}
                     whileHover={{ 
                        scale: 1.01,
                        transition: { duration: 0.2 }
                     }}
                     style={{
                        y: useTransform(smoothProgress, [0, 0.5, 1], [50, 0, -50]),
                     }}
                  >
                     <h3 className="text-2xl font-bold mb-6">Gửi yêu cầu hợp tác</h3>
                     
                     <form className="space-y-6">
                        <motion.div 
                           className="grid gap-4 md:grid-cols-2"
                           initial={{ opacity: 0, y: 20 }}
                           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                           transition={{ duration: 0.5, delay: 0.1 }}
                        >
                           <div className="space-y-2">
                              <label className="text-sm font-medium">Họ và tên *</label>
                              <Input placeholder="Nhập họ và tên của bạn" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-sm font-medium">Email *</label>
                              <Input type="email" placeholder="email@example.com" />
                           </div>
                        </motion.div>
                        
                        <motion.div 
                           className="grid gap-4 md:grid-cols-2"
                           initial={{ opacity: 0, y: 20 }}
                           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                           transition={{ duration: 0.5, delay: 0.2 }}
                        >
                           <div className="space-y-2">
                              <label className="text-sm font-medium">Số điện thoại *</label>
                              <Input placeholder="0123 456 789" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-sm font-medium">Dịch vụ quan tâm</label>
                              <Select>
                                 <SelectTrigger>
                                    <SelectValue placeholder="Chọn dịch vụ" />
                                 </SelectTrigger>
                                 <SelectContent>
                                    <SelectItem value="software">Phát triển phần mềm</SelectItem>
                                    <SelectItem value="it-consulting">Tư vấn IT</SelectItem>
                                    <SelectItem value="hardware">Thiết bị & Linh kiện</SelectItem>
                                    <SelectItem value="hr">Nhân sự & Tuyển dụng</SelectItem>
                                    <SelectItem value="logistics">Logistics & Vận tải</SelectItem>
                                    <SelectItem value="other">Khác</SelectItem>
                                 </SelectContent>
                              </Select>
                           </div>
                        </motion.div>
                        
                        <motion.div 
                           className="space-y-2"
                           initial={{ opacity: 0, y: 20 }}
                           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                           transition={{ duration: 0.5, delay: 0.3 }}
                        >
                           <label className="text-sm font-medium">Mô tả nhu cầu</label>
                           <Textarea 
                              placeholder="Vui lòng mô tả chi tiết nhu cầu của bạn..."
                              className="min-h-[120px]"
                           />
                        </motion.div>
                        
                        <motion.div
                           initial={{ opacity: 0, y: 20 }}
                           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                           transition={{ duration: 0.5, delay: 0.4 }}
                        >
                           <Button 
                              type="submit" 
                              className="w-full bg-gradient-to-r from-primary to-blue-400 hover:from-primary/90 hover:to-blue-400/90"
                           >
                              <Send className="h-4 w-4 mr-2" />
                              Gửi yêu cầu
                           </Button>
                        </motion.div>
                     </form>
                  </motion.div>
               </motion.div>

               {/* Contact Information */}
               <motion.div
                  className="space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
               >
                  <motion.div variants={itemVariants}>
                     <h3 className="text-2xl font-bold mb-6">Thông tin liên hệ</h3>
                     <div className="grid gap-6">
                        {contactInfo.map((info, index) => (
                           <motion.div
                              key={index}
                              className="group flex items-start gap-4 p-4 rounded-lg border bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-colors"
                              variants={itemVariants}
                              whileHover={{ 
                                 scale: 1.02,
                                 x: 5,
                                 transition: { duration: 0.2 }
                              }}
                              style={{
                                 y: useTransform(smoothProgress, [0, 0.5, 1], [30, 0, -30]),
                              }}
                           >
                              <motion.div 
                                 className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                                 whileHover={{ rotate: 360, scale: 1.1 }}
                                 transition={{ duration: 0.5 }}
                              >
                                 {info.icon}
                              </motion.div>
                              <div className="flex-1">
                                 <h4 className="font-semibold text-sm text-muted-foreground">{info.title}</h4>
                                 <p className="font-medium">{info.content}</p>
                                 <p className="text-sm text-muted-foreground">{info.description}</p>
                              </div>
                           </motion.div>
                        ))}
                     </div>
                  </motion.div>

                  {/* Company Info */}
                  <motion.div
                     className="rounded-xl border bg-background/50 backdrop-blur-sm p-6"
                     variants={itemVariants}
                     whileHover={{ 
                        scale: 1.01,
                        transition: { duration: 0.2 }
                     }}
                     style={{
                        y: useTransform(smoothProgress, [0, 0.5, 1], [40, 0, -40]),
                     }}
                  >
                     <h4 className="font-bold mb-4">Công ty GENSOL</h4>
                     <div className="space-y-3 text-sm text-muted-foreground">
                        <motion.p
                           initial={{ opacity: 0, x: -10 }}
                           animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                           transition={{ duration: 0.4, delay: 0.1 }}
                        >
                           <strong>Tên đầy đủ:</strong> Công ty TNHH GENSOL
                        </motion.p>
                        <motion.p
                           initial={{ opacity: 0, x: -10 }}
                           animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                           transition={{ duration: 0.4, delay: 0.2 }}
                        >
                           <strong>Mã số thuế:</strong> [Mã số thuế]
                        </motion.p>
                        <motion.p
                           initial={{ opacity: 0, x: -10 }}
                           animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                           transition={{ duration: 0.4, delay: 0.3 }}
                        >
                           <strong>Địa chỉ:</strong> [Địa chỉ chi tiết], Hà Nội, Việt Nam
                        </motion.p>
                        <motion.p
                           initial={{ opacity: 0, x: -10 }}
                           animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                           transition={{ duration: 0.4, delay: 0.4 }}
                        >
                           <strong>Lĩnh vực:</strong> Công nghệ thông tin, Nhân sự, Logistics
                        </motion.p>
                     </div>
                  </motion.div>

                  {/* Map placeholder */}
                  <motion.div
                     className="rounded-xl border bg-background/50 backdrop-blur-sm p-6 h-48 flex items-center justify-center"
                     variants={itemVariants}
                     whileHover={{ 
                        scale: 1.01,
                        transition: { duration: 0.2 }
                     }}
                     style={{
                        y: useTransform(smoothProgress, [0, 0.5, 1], [50, 0, -50]),
                     }}
                  >
                     <div className="text-center text-muted-foreground">
                        <motion.div
                           whileHover={{ scale: 1.1, rotate: 10 }}
                           transition={{ duration: 0.3 }}
                        >
                           <MapPin className="h-8 w-8 mx-auto mb-2" />
                        </motion.div>
                        <p className="text-sm">Bản đồ văn phòng</p>
                        <p className="text-xs">Sẽ được cập nhật khi có địa chỉ cụ thể</p>
                     </div>
                  </motion.div>
               </motion.div>
            </div>
         </div>
      </motion.section>
   );
}
