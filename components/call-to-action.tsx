"use client";

import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
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
            description: t("Vui lòng nhập họ và tên")
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

   const contactInfo = [
      {
         icon: <Mail className="h-5 w-5 text-primary" />,
         title: t("Email"),
         content: COMPANY_INFO.email,
         description: t("Gửi email cho chúng tôi")
      },
      {
         icon: <Phone className="h-5 w-5 text-primary" />,
         title: t("Điện thoại"),
         content: COMPANY_INFO.phone,
         description: t("Gọi trực tiếp cho chúng tôi")
      },
      {
         icon: <MapPin className="h-5 w-5 text-primary" />,
         title: t("Địa chỉ"),
         content: t("Tòa nhà Lotte Center, 54 Liễu Giai, Ba Đình, Hà Nội"),
         description: t("Văn phòng chính")
      },
      {
         icon: <Clock className="h-5 w-5 text-primary" />,
         title: t("Giờ làm việc"),
         content: "8:00 - 17:00",
         description: t("Thứ 2 - Thứ 6")
      }
   ];

   return (
      <section id="lien-he" className="w-full py-12 md:pb-16 md:pt-0 relative overflow-hidden">
         <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
            <div className="absolute inset-0 flex items-center justify-center opacity-20 dark:opacity-10" />
         </div>

         <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
               <div className="space-y-4">
                  <div className="inline-block rounded-full bg-[#E2E8F0] dark:bg-[#1E293B] px-4 py-1.5 text-sm font-medium text-primary">
                     {t("Liên hệ với chúng tôi")}
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
                     {t("Sẵn sàng")}{" "}
                     <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                        {t("hợp tác?")}
                     </span>
                  </h2>
                  <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
                     {t("Hãy để lại thông tin và nhu cầu của bạn. Chúng tôi sẽ liên hệ tư vấn giải pháp phù hợp nhất trong thời gian sớm nhất.")}
                  </p>
               </div>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 items-start">
               <div className="space-y-6">
                  <div className="rounded-xl border bg-background/50 backdrop-blur-sm p-8 hover:shadow-lg transition-shadow">
                     <h3 className="text-2xl font-bold mb-6">{t("Gửi yêu cầu hợp tác")}</h3>
                     
                     <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid gap-4 md:grid-cols-2">
                           <div className="space-y-2">
                              <label className="text-sm font-medium">{t("Họ và tên")} *</label>
                              <Input 
                                 placeholder={t("Nhập họ và tên của bạn")} 
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

               <div className="space-y-6">
                  <div>
                     <h3 className="text-2xl font-bold mb-6">{t("Thông tin liên hệ")}</h3>
                     <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                        {contactInfo.map((info, index) => (
                           <div
                              key={index}
                              className="group flex items-start gap-4 p-4 rounded-lg border bg-background/50 backdrop-blur-sm hover:border-primary transition-colors"
                           >
                              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E2E8F0] dark:bg-[#1E293B] flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                 {info.icon}
                              </div>
                              <div className="flex-1">
                                 <h4 className="font-semibold text-sm text-muted-foreground">{info.title}</h4>
                                 <p className="font-medium">{info.content}</p>
                                 <p className="text-sm text-muted-foreground">{info.description}</p>
                              </div>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className="rounded-xl border bg-background/50 backdrop-blur-sm p-6 hover:shadow-lg transition-shadow">
                     <h4 className="font-bold mb-4">{t("Công ty GENSOL")}</h4>
                     <div className="space-y-3 text-sm text-muted-foreground">
                        <p>
                           <strong>{t("Tên đầy đủ")}:</strong> {t("Công ty TNHH GENSOL")}
                        </p>
                        <p>
                           <strong>{t("Mã số thuế")}:</strong> 132980
                        </p>
                        <p>
                           <strong>{t("Địa chỉ")}:</strong> {t("Tòa nhà Lotte Center, 54 Liễu Giai, Ba Đình, Hà Nội, Việt Nam")}
                        </p>
                        <p>
                           <strong>{t("Lĩnh vực")}:</strong> {t("Công nghệ thông tin, Nhân sự, Logistics")}
                        </p>
                     </div>
                  </div>

                  <div className="rounded-xl border bg-background/50 backdrop-blur-sm overflow-hidden hover:shadow-lg transition-shadow">
                     <div className="p-4 border-b">
                        <h4 className="font-semibold flex items-center gap-2">
                           <MapPin className="h-5 w-5 text-primary" />
                           {t("Vị trí văn phòng")}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                           {t("Tòa nhà Lotte Center, 54 Liễu Giai, Ba Đình, Hà Nội")}
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
                           <span className="text-muted-foreground">{t("Cách trung tâm Hà Nội")}</span>
                           <span className="font-medium">~3km</span>
                        </div>
                        <div className="flex items-center justify-between text-sm mt-1">
                           <span className="text-muted-foreground">{t("Thời gian di chuyển")}</span>
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
