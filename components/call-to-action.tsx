"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, amount: 0.2 });

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
      hidden: { y: 20, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1,
         transition: { duration: 0.5 },
      },
   };

   return (
      <section id="lien-he" className="w-full py-20 md:py-32 relative overflow-hidden">
         {/* Background Elements */}
         <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
            <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-primary/5 to-blue-400/5 blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-400/5 to-primary/5 blur-3xl" />
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
                     Liên hệ với chúng tôi
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                     Sẵn sàng{" "}
                     <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                        hợp tác?
                     </span>
                  </h2>
                  <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
                     Hãy để lại thông tin và nhu cầu của bạn. Chúng tôi sẽ liên hệ tư vấn 
                     giải pháp phù hợp nhất trong thời gian sớm nhất.
                  </p>
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
                  >
                     <h3 className="text-2xl font-bold mb-6">Gửi yêu cầu hợp tác</h3>
                     
                     <form className="space-y-6">
                        <div className="grid gap-4 md:grid-cols-2">
                           <div className="space-y-2">
                              <label className="text-sm font-medium">Họ và tên *</label>
                              <Input placeholder="Nhập họ và tên của bạn" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-sm font-medium">Email *</label>
                              <Input type="email" placeholder="email@example.com" />
                           </div>
                        </div>
                        
                        <div className="grid gap-4 md:grid-cols-2">
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
                        </div>
                        
                        <div className="space-y-2">
                           <label className="text-sm font-medium">Mô tả nhu cầu</label>
                           <Textarea 
                              placeholder="Vui lòng mô tả chi tiết nhu cầu của bạn..."
                              className="min-h-[120px]"
                           />
                        </div>
                        
                        <Button 
                           type="submit" 
                           className="w-full bg-gradient-to-r from-primary to-blue-400 hover:from-primary/90 hover:to-blue-400/90"
                        >
                           <Send className="h-4 w-4 mr-2" />
                           Gửi yêu cầu
                        </Button>
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
                           >
                              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                 {info.icon}
                              </div>
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
                  >
                     <h4 className="font-bold mb-4">Công ty GENSOL</h4>
                     <div className="space-y-3 text-sm text-muted-foreground">
                        <p>
                           <strong>Tên đầy đủ:</strong> Công ty TNHH GENSOL
                        </p>
                        <p>
                           <strong>Mã số thuế:</strong> [Mã số thuế]
                        </p>
                        <p>
                           <strong>Địa chỉ:</strong> [Địa chỉ chi tiết], Hà Nội, Việt Nam
                        </p>
                        <p>
                           <strong>Lĩnh vực:</strong> Công nghệ thông tin, Nhân sự, Logistics
                        </p>
                     </div>
                  </motion.div>

                  {/* Map placeholder */}
                  <motion.div
                     className="rounded-xl border bg-background/50 backdrop-blur-sm p-6 h-48 flex items-center justify-center"
                     variants={itemVariants}
                  >
                     <div className="text-center text-muted-foreground">
                        <MapPin className="h-8 w-8 mx-auto mb-2" />
                        <p className="text-sm">Bản đồ văn phòng</p>
                        <p className="text-xs">Sẽ được cập nhật khi có địa chỉ cụ thể</p>
                     </div>
                  </motion.div>
               </motion.div>
            </div>
         </div>
      </section>
   );
}
