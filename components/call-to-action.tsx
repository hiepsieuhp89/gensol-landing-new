"use client";

import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send, Sparkle } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/contexts/translation-context";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG, SERVICE_OPTIONS, COMPANY_INFO, type EmailTemplateParams } from '@/lib/emailjs';
import { useToast } from "@/hooks/use-toast";

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
   const formRef = useRef<HTMLFormElement>(null);
   const { toast } = useToast();
   const { t } = useTranslation();
   
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

   const getTranslatedServiceOptions = () => {
      return SERVICE_OPTIONS.map(option => ({
         ...option,
         label: t(option.label)
      }));
   };

   useEffect(() => {
      if (formStatus.type !== 'idle') {
         const timer = setTimeout(() => {
            setFormStatus({ type: 'idle', message: '' });
         }, 5000);
         return () => clearTimeout(timer);
      }
   }, [formStatus.type]);

   const handleInputChange = (field: keyof FormData, value: string) => {
      setFormData(prev => ({
         ...prev,
         [field]: value
      }));
   };

   const validateForm = (): boolean => {
      if (!formData.name.trim()) {
         toast({
            variant: "destructive",
            title: t("Lỗi xác thực"),
            description: t("Vui lòng nhập họ & tên")
         });
         return false;
      }
      
      if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
         toast({
            variant: "destructive",
            title: t("Lỗi xác thực"),
            description: t("Vui lòng nhập email hợp lệ")
         });
         return false;
      }
      
      if (!formData.phone.trim()) {
         toast({
            variant: "destructive",
            title: t("Lỗi xác thực"),
            description: t("Vui lòng nhập số điện thoại")
         });
         return false;
      }
      
      return true;
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      
      if (!validateForm()) return;
      
      setIsSubmitting(true);

      toast({
         title: t("Đang gửi yêu cầu..."),
         description: t("Vui lòng chờ trong giây lát")
      });

      try {
         const templateParams: EmailTemplateParams = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service || t('Không chỉ định'),
            message: formData.message || t('Không có tin nhắn cụ thể'),
            to_email: COMPANY_INFO.email,
            company_name: COMPANY_INFO.name,
            company_email: COMPANY_INFO.email,
            website_link: COMPANY_INFO.website
         };

         const result = await emailjs.send(
            EMAILJS_CONFIG.SERVICE_ID,
            EMAILJS_CONFIG.TEMPLATE_ID,
            templateParams,
            EMAILJS_CONFIG.PUBLIC_KEY
         );

         if (result.status === 200) {
            toast({
               title: t("Gửi thành công! 🎉"),
               description: t("Cảm ơn bạn! Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất."),
               className: "border-green-500 bg-green-50 text-green-900 dark:bg-green-950 dark:text-green-100 dark:border-green-400",
            });
            
            setFormData({
               name: '',
               email: '',
               phone: '',
               service: '',
               message: ''
            });
            
            if (formRef.current) {
               formRef.current.reset();
            }
         }
      } catch (error) {
         console.error('EmailJS Error:', error);
         
         toast({
            variant: "destructive",
            title: t("Gửi thất bại"),
            description: t("Có lỗi xảy ra khi gửi yêu cầu. Vui lòng thử lại sau hoặc liên hệ trực tiếp qua email.")
         });
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <section id="lien-he" className="w-full py-12 md:py-20 relative overflow-hidden max-w-7xl mx-auto">
         <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
            <div className="absolute inset-0 flex items-center justify-center opacity-20 dark:opacity-10" />
         </div>

         <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
               <div className="space-y-4">
                  <motion.div
                     className="rounded-full bg-gradient-to-r from-primary to-blue-400 text-white px-4 py-1.5 text-sm font-medium text-primary flex items-center w-fit gap-1 mx-auto mb-4"
                  >
                     <Sparkle className="h-4 w-4 text-white" />
                     {t("Liên hệ với chúng tôi")}
                  </motion.div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                     {t("Sẵn sàng")}{" "}
                     <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                        {t("hợp tác?")}
                     </span>
                  </h2>
                  <p className="max-w-[840px] mx-auto dark:text-white/80 text-black/80 md:text-xl">
                     {t("Hãy để lại thông tin & nhu cầu của bạn. Chúng tôi sẽ liên hệ tư vấn giải pháp phù hợp nhất trong thời gian sớm nhất.")}
                  </p>
               </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 items-start">
               <div className="space-y-4">
                  <div className="rounded-xl border bg-background/50 backdrop-blur-sm p-8 hover:shadow-lg transition-shadow">
                     <h3 className="text-2xl font-bold mb-6">{t("Gửi yêu cầu hợp tác")}</h3>
                     
                     <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2">
                           <div className="space-y-2">
                              <label className="text-sm font-medium">{t("Họ & tên")} *</label>
                              <Input 
                                 placeholder={t("Nhập họ & tên của bạn")} 
                                 value={formData.name}
                                 onChange={(e) => handleInputChange('name', e.target.value)}
                                 required
                                 disabled={isSubmitting}
                              />
                           </div>
                           <div className="space-y-2">
                              <label className="text-sm font-medium">{t("Email")} *</label>
                              <Input 
                                 type="email" 
                                 placeholder="email@example.com" 
                                 value={formData.email}
                                 onChange={(e) => handleInputChange('email', e.target.value)}
                                 required
                                 disabled={isSubmitting}
                              />
                           </div>
                        </div>
                        
                        <div className="grid gap-4 md:grid-cols-2">
                           <div className="space-y-2">
                              <label className="text-sm font-medium">{t("Số điện thoại")} *</label>
                              <Input 
                                 placeholder="0123 456 789" 
                                 value={formData.phone}
                                 onChange={(e) => handleInputChange('phone', e.target.value)}
                                 required
                                 disabled={isSubmitting}
                              />
                           </div>
                           <div className="space-y-2">
                              <label className="text-sm font-medium">{t("Dịch vụ quan tâm")}</label>
                              <Select 
                                 value={formData.service} 
                                 onValueChange={(value) => handleInputChange('service', value)}
                                 disabled={isSubmitting}
                              >
                                 <SelectTrigger>
                                    <SelectValue placeholder={t("Chọn dịch vụ")} />
                                 </SelectTrigger>
                                 <SelectContent>
                                    {getTranslatedServiceOptions().map((option) => (
                                       <SelectItem key={option.value} value={option.value}>
                                          {option.label}
                                       </SelectItem>
                                    ))}
                                 </SelectContent>
                              </Select>
                           </div>
                        </div>
                        
                        <div className="space-y-2">
                           <label className="text-sm font-medium">{t("Mô tả nhu cầu")}</label>
                           <Textarea 
                              placeholder={t("Vui lòng mô tả chi tiết nhu cầu của bạn...")}
                              className="min-h-[120px]"
                              value={formData.message}
                              onChange={(e) => handleInputChange('message', e.target.value)}
                              disabled={isSubmitting}
                           />
                        </div>
                        
                        <div>
                           <Button 
                              type="submit" 
                              className="w-full bg-gradient-to-r from-primary to-blue-400 hover:from-primary/90 hover:to-blue-400/90"
                              disabled={isSubmitting}
                           >
                              {isSubmitting ? (
                                 <>
                                    <div className="h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    {t("Đang gửi...")}
                                 </>
                              ) : (
                                 <>
                                    <Send className="h-4 w-4 mr-2" />
                                    {t("Gửi yêu cầu")}
                                 </>
                              )}
                           </Button>
                        </div>
                     </form>
                  </div>
               </div>

               <div className="space-y-4">
                  <div className="rounded-xl border bg-background/50 backdrop-blur-sm p-4 hover:shadow-lg transition-shadow">
                     <h4 className="font-bold mb-4">{t("Công ty GENSOL")}</h4>
                     <div className="space-y-3 text-sm dark:text-white/80 text-black/80">
                        <p>
                           <strong>{t("Tên đầy đủ")}:</strong> {t("Công ty TNHH GENSOL")}
                        </p>
                        <p>
                           <strong>{t("Email")}:</strong> {t("contact@gensol.com.vn")}
                        </p>
                        <p>
                           <strong>{t("Mã số thuế")}:</strong> 0318558477
                        </p>
                        <p>
                           <strong>{t("Địa chỉ")}:</strong> {t("16, Đường 27, Phường Long Thạnh Mỹ, T.P Thủ Đức, T.P Hồ Chí Minh, Việt Nam")}
                        </p>
                        <p>
                           <strong>{t("Lĩnh vực")}:</strong> {t("Công nghệ thông tin, Nhân sự")}
                        </p>
                     </div>
                  </div>
                  <div className="rounded-xl border bg-background/50 backdrop-blur-sm overflow-hidden hover:shadow-lg transition-shadow">
                     <div className="p-4 border-b">
                        <h4 className="font-semibold flex items-center gap-2">
                           <MapPin className="h-5 w-5 text-primary" />
                           {t("Vị trí văn phòng")}
                        </h4>
                        <p className="text-sm dark:text-white/80 text-black/80 mt-1">
                           {t("16, Đường 27, Phường Long Thạnh Mỹ, T.P Thủ Đức, T.P Hồ Chí Minh")}
                        </p>
                     </div>
                     <div className="relative h-64">
                        <iframe
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.442079544798!2d106.82608587460377!3d10.855111089299054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752797e321f8e9%3A0xb3ff69197b10ec4f!2zxJAuIDI3LCBMb25nIFRo4bqhbmggTeG7uSwgVGjhu6cgxJDhu6ljLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1710405517013!5m2!1svi!2s"
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
                           <span className="dark:text-white/80 text-black/80">{t("Cách trung tâm Hồ Chính Minh")}</span>
                           <span className="font-medium">~3km</span>
                        </div>
                        <div className="flex items-center justify-between text-sm mt-1">
                           <span className="dark:text-white/80 text-black/80">{t("Thời gian di chuyển")}</span>
                           <span className="font-medium">10-15 {t("phút bằng xe")}</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
