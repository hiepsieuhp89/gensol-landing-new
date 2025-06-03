"use client";

import { useRef, useState, useEffect } from "react";
import { useInView, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Globe as GlobeIcon } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, SERVICE_OPTIONS, COMPANY_INFO, type EmailTemplateParams } from '@/lib/emailjs';
import { useToast } from "@/hooks/use-toast";
import { Globe } from "@/components/magicui/globe";
import { Pointer } from "@/components/magicui/pointer";

interface FormData {
   name: string;
   email: string;
   phone: string;
   service: string;
   message: string;
}

interface FormStatus {
   type: 'idle' | 'loading' | 'success' | 'error';
   message: string;
}

export default function Contact() {
   const ref = useRef(null);
   const formRef = useRef<HTMLFormElement>(null);
   const isInView = useInView(ref, { once: true, amount: 0.2 });
   const { toast } = useToast();
   
   // Form state management
   const [formData, setFormData] = useState<FormData>({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
   });
   
   const [formStatus, setFormStatus] = useState<FormStatus>({
      type: 'idle',
      message: ''
   });
   
   const [isSubmitting, setIsSubmitting] = useState(false);
   
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]
   });

   // Enhanced scroll-based transforms for contact section
   const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
   const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.9]);
   const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
   
   // Form-specific animations
   const formY = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [80, 0, 0, -40]);
   const formRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 3]);
   
   // Contact info animations
   const contactInfoX = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [60, 0, 0, -30]);
   const contactInfoRotate = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -3]);

   // Reset status after 5 seconds
   useEffect(() => {
      if (formStatus.type !== 'idle') {
         const timer = setTimeout(() => {
            setFormStatus({ type: 'idle', message: '' });
         }, 5000);
         return () => clearTimeout(timer);
      }
   }, [formStatus.type]);

   // Handle form input changes
   const handleInputChange = (field: keyof FormData, value: string) => {
      setFormData(prev => ({
         ...prev,
         [field]: value
      }));
   };

   // Validate form data
   const validateForm = (): boolean => {
      if (!formData.name.trim()) {
         toast({
            variant: "destructive",
            title: "Lỗi xác thực",
            description: "Vui lòng nhập họ và tên"
         });
         return false;
      }
      
      if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
         toast({
            variant: "destructive",
            title: "Lỗi xác thực",
            description: "Vui lòng nhập email hợp lệ"
         });
         return false;
      }
      
      if (!formData.phone.trim()) {
         toast({
            variant: "destructive",
            title: "Lỗi xác thực",
            description: "Vui lòng nhập số điện thoại"
         });
         return false;
      }
      
      return true;
   };

   // Handle form submission
   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      
      if (!validateForm()) return;
      
      setIsSubmitting(true);

      // Show loading toast
      toast({
         title: "Đang gửi yêu cầu...",
         description: "Vui lòng chờ trong giây lát"
      });

      try {
         // Prepare template parameters
         const templateParams: EmailTemplateParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service || 'Không chỉ định',
            message: formData.message || 'Không có tin nhắn cụ thể',
            to_email: COMPANY_INFO.email,
            company_name: COMPANY_INFO.name,
            company_email: COMPANY_INFO.email,
            website_link: COMPANY_INFO.website
         };

         // Send email using EmailJS
         const result = await emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_ID,
            templateParams,
            EMAILJS_CONFIG.PUBLIC_KEY
         );

         if (result.status === 200) {
            // Show success toast with green styling
            toast({
               title: "Gửi thành công! 🎉",
               description: "Cảm ơn bạn! Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất.",
               className: "border-green-500 bg-green-50 text-green-900 dark:bg-green-950 dark:text-green-100 dark:border-green-400",
            });
            
            // Reset form
            setFormData({
               name: '',
               email: '',
               phone: '',
               service: '',
               message: ''
            });
            
            // Reset form ref
            if (formRef.current) {
               formRef.current.reset();
            }
         }
      } catch (error) {
         console.error('EmailJS Error:', error);
         
         // Show error toast
         toast({
            variant: "destructive",
            title: "Gửi thất bại",
            description: "Có lỗi xảy ra khi gửi yêu cầu. Vui lòng thử lại sau hoặc liên hệ trực tiếp qua email."
         });
      } finally {
         setIsSubmitting(false);
      }
   };

   const contactInfo = [
      {
         icon: <Mail className="h-5 w-5 text-primary" />,
         title: "Email",
         content: COMPANY_INFO.email,
         description: "Gửi email cho chúng tôi"
      },
      {
         icon: <Phone className="h-5 w-5 text-primary" />,
         title: "Điện thoại",
         content: COMPANY_INFO.phone,
         description: "Gọi trực tiếp cho chúng tôi"
      },
      {
         icon: <MapPin className="h-5 w-5 text-primary" />,
         title: "Địa chỉ",
         content: "Tòa nhà Lotte Center, Ba Đình, Hà Nội",
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
      hidden: { y: 30, opacity: 0 },
      visible: {
         y: 0,
         opacity: 1,
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
         className="w-full py-12 md:pb-16 md:pt-0 relative overflow-hidden"
         style={{ y, opacity, scale, rotateX, perspective: 1000 }}
      >
         {/* Enhanced Background Elements with scroll effects */}
         <div className="absolute inset-0 -z-10">
            <motion.div 
               className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background"
               style={{ 
                  opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5])
               }}
            />
            
            {/* Globe Background Effect */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 dark:opacity-10">
               {/* <Globe className="w-[800px] h-[800px]" /> */}
            </div>
            
            <motion.div 
               className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-primary/5 to-blue-400/5 blur-3xl"
               style={{
                  x: useTransform(scrollYProgress, [0, 1], [0, 100]),
                  y: useTransform(scrollYProgress, [0, 1], [0, -50]),
                  scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.6])
               }}
            />
            <motion.div 
               className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-blue-400/5 to-primary/5 blur-3xl"
               style={{
                  x: useTransform(scrollYProgress, [0, 1], [0, -80]),
                  y: useTransform(scrollYProgress, [0, 1], [0, 60]),
                  scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 1.1])
               }}
            />
         </div>

         <div className="container px-4 md:px-6">
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
               {/* Contact Form with enhanced scroll animations */}
               <motion.div
                  className="space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  style={{ y: formY, rotateY: formRotate }}
               >
                  <motion.div
                     className="rounded-xl border bg-background/50 backdrop-blur-sm p-8 hover:shadow-lg transition-shadow"
                     variants={itemVariants}
                     style={{
                        boxShadow: useTransform(
                           scrollYProgress,
                           [0, 0.5, 1],
                           [
                              "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                              "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                              "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                           ]
                        )
                     }}
                  >
                     <h3 className="text-2xl font-bold mb-6">Gửi yêu cầu hợp tác</h3>
                     
                     <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        <motion.div 
                           className="grid gap-4 md:grid-cols-2"
                           initial={{ opacity: 0, y: 20 }}
                           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                           transition={{ duration: 0.5, delay: 0.1 }}
                           style={{
                              x: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-20, 0, 0, 10])
                           }}
                        >
                           <div className="space-y-2">
                              <label className="text-sm font-medium">Họ và tên *</label>
                              <Input 
                                 placeholder="Nhập họ và tên của bạn" 
                                 value={formData.name}
                                 onChange={(e) => handleInputChange('name', e.target.value)}
                                 required
                                 disabled={isSubmitting}
                              />
                           </div>
                           <div className="space-y-2">
                              <label className="text-sm font-medium">Email *</label>
                              <Input 
                                 type="email" 
                                 placeholder="email@example.com" 
                                 value={formData.email}
                                 onChange={(e) => handleInputChange('email', e.target.value)}
                                 required
                                 disabled={isSubmitting}
                              />
                           </div>
                        </motion.div>
                        
                        <motion.div 
                           className="grid gap-4 md:grid-cols-2"
                           initial={{ opacity: 0, y: 20 }}
                           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                           transition={{ duration: 0.5, delay: 0.2 }}
                           style={{
                              x: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [20, 0, 0, -10])
                           }}
                        >
                           <div className="space-y-2">
                              <label className="text-sm font-medium">Số điện thoại *</label>
                              <Input 
                                 placeholder="0123 456 789" 
                                 value={formData.phone}
                                 onChange={(e) => handleInputChange('phone', e.target.value)}
                                 required
                                 disabled={isSubmitting}
                              />
                           </div>
                           <div className="space-y-2">
                              <label className="text-sm font-medium">Dịch vụ quan tâm</label>
                              <Select 
                                 value={formData.service} 
                                 onValueChange={(value) => handleInputChange('service', value)}
                                 disabled={isSubmitting}
                              >
                                 <SelectTrigger>
                                    <SelectValue placeholder="Chọn dịch vụ" />
                                 </SelectTrigger>
                                 <SelectContent>
                                    {SERVICE_OPTIONS.map((option) => (
                                       <SelectItem key={option.value} value={option.value}>
                                          {option.label}
                                       </SelectItem>
                                    ))}
                                 </SelectContent>
                              </Select>
                           </div>
                        </motion.div>
                        
                        <motion.div 
                           className="space-y-2"
                           initial={{ opacity: 0, y: 20 }}
                           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                           transition={{ duration: 0.5, delay: 0.3 }}
                           style={{
                              scale: useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.95, 1, 1, 0.98])
                           }}
                        >
                           <label className="text-sm font-medium">Mô tả nhu cầu</label>
                           <Textarea 
                              placeholder="Vui lòng mô tả chi tiết nhu cầu của bạn..."
                              className="min-h-[120px]"
                              value={formData.message}
                              onChange={(e) => handleInputChange('message', e.target.value)}
                              disabled={isSubmitting}
                           />
                        </motion.div>
                        
                        <motion.div
                           initial={{ opacity: 0, y: 20 }}
                           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                           transition={{ duration: 0.5, delay: 0.4 }}
                           style={{
                              y: useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -5])
                           }}
                        >
                           <Button 
                              type="submit" 
                              className="w-full bg-gradient-to-r from-primary to-blue-400 hover:from-primary/90 hover:to-blue-400/90"
                              disabled={isSubmitting}
                           >
                              {isSubmitting ? (
                                 <>
                                    <div className="h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Đang gửi...
                                 </>
                              ) : (
                                 <>
                                    <Send className="h-4 w-4 mr-2" />
                                    Gửi yêu cầu
                                 </>
                              )}
                           </Button>
                        </motion.div>
                     </form>
                  </motion.div>
               </motion.div>

               {/* Contact Information with sliding animations */}
               <motion.div
                  className="space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  style={{ x: contactInfoX, rotateY: contactInfoRotate }}
               >
                  <motion.div variants={itemVariants}>
                     <h3 className="text-2xl font-bold mb-6">Thông tin liên hệ</h3>
                     <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                        {contactInfo.map((info, index) => (
                           <motion.div
                              key={index}
                              className="group flex items-start gap-4 p-4 rounded-lg border bg-background/50 backdrop-blur-sm hover:border-primary transition-colors"
                              variants={itemVariants}
                              style={{
                                 x: useTransform(
                                    scrollYProgress,
                                    [0, 0.4, 0.6, 1],
                                    [50 + index * 10, 0, 0, -20 - index * 5]
                                 ),
                                 opacity: useTransform(
                                    scrollYProgress,
                                    [0, 0.2 + index * 0.05, 0.8 - index * 0.05, 1],
                                    [0, 1, 1, 0.7]
                                 )
                              }}
                           >
                              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E2E8F0] dark:bg-[#1E293B] flex items-center justify-center group-hover:bg-primary/20 transition-colors">
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

                  {/* Company Info with enhanced animations */}
                  <motion.div
                     className="rounded-xl border bg-background/50 backdrop-blur-sm p-6 hover:shadow-lg transition-shadow"
                     variants={itemVariants}
                     style={{
                        scale: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95]),
                        rotateX: useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -5])
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
                           <strong>Địa chỉ:</strong> Tòa nhà Lotte Center, 54 Liễu Giai, Ba Đình, Hà Nội, Việt Nam
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

                  {/* Map with reveal animation */}
                  <motion.div
                     className="rounded-xl border bg-background/50 backdrop-blur-sm overflow-hidden hover:shadow-lg transition-shadow"
                     variants={itemVariants}
                     style={{
                        clipPath: useTransform(
                           scrollYProgress,
                           [0, 0.4, 0.6, 1],
                           [
                              "inset(50% 50% 50% 50%)",
                              "inset(0% 0% 0% 0%)",
                              "inset(0% 0% 0% 0%)",
                              "inset(10% 10% 10% 10%)"
                           ]
                        )
                     }}
                  >
                     <div className="p-4 border-b">
                        <h4 className="font-semibold flex items-center gap-2">
                           <MapPin className="h-5 w-5 text-primary" />
                           Vị trí văn phòng
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                           Tòa nhà Lotte Center, 54 Liễu Giai, Ba Đình, Hà Nội
                        </p>
                     </div>
                     <div className="relative h-64">
                        <iframe
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.096756919!2d105.8197!3d21.0285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2sLotte%20Center%20Hanoi!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
                           width="100%"
                           height="100%"
                           style={{ border: 0 }}
                           allowFullScreen
                           loading="lazy"
                           referrerPolicy="no-referrer-when-downgrade"
                        />
                     </div>
                     <div className="p-4 bg-muted/30">
                        <div className="flex items-center justify-between text-sm">
                           <span className="text-muted-foreground">Cách trung tâm Hà Nội</span>
                           <span className="font-medium">~3km</span>
                        </div>
                        <div className="flex items-center justify-between text-sm mt-1">
                           <span className="text-muted-foreground">Thời gian di chuyển</span>
                           <span className="font-medium">10-15 phút bằng xe</span>
                        </div>
                     </div>
                  </motion.div>
               </motion.div>
            </div>
         </div>
      </motion.section>
   );
}
