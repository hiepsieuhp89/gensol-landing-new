"use client"
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "@/contexts/translation-context";

export default function Footer() {
   const { t } = useTranslation()
   const ref = useRef(null);
   
   const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]
   });

   // Subtle footer animations
   const footerY = useTransform(scrollYProgress, [0, 1], [50, -20]);
   const footerOpacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);
   const logoScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
   const tagsY = useTransform(scrollYProgress, [0, 1], [30, -10]);

   return (
      <motion.footer 
         ref={ref}
         className="w-full border-t bg-background py-12 md:py-20"
         style={{ y: footerY, opacity: footerOpacity }}
      >
         <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
               <div className="space-y-4">
                  <motion.div 
                     className='flex items-center gap-1'
                     style={{ scale: logoScale }}
                  >
                     <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                     >
                        <Image
                           src={"/images/logo.png"}
                           alt="GENSOL logo"
                           height={40}
                           width={40}
                           className='object-cover filter scale-90'
                           style={{
                              // filter: 'brightness(1.2) contrast(1.2) saturate(1.2) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))',
                              imageRendering: 'crisp-edges',
                           }}
                           quality={100}
                           priority
                           draggable={false}
                           sizes="40px"
                           unoptimized={false}
                        />
                     </motion.div>
                     <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                     >
                        <Image
                           src={"/images/text-logo.png"}
                           alt="GENSOL text logo"
                           height={32}
                           width={120}
                           className='filter scale-90'
                           style={{
                              // filter: 'brightness(1.2) contrast(1.2) saturate(1.2) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))',
                              imageRendering: 'crisp-edges',
                           }}
                           quality={100}
                           priority
                           draggable={false}
                           sizes="110px"
                           unoptimized={false}
                        />
                     </motion.div>
                  </motion.div>
                  <motion.p 
                     className="text-sm dark:text-white/80 text-black/80"
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5 }}
                  >
                     {t("Đồng hành cùng bạn trong hành trình số hóa – Phát triển giải pháp linh hoạt & bền vững. Giải pháp Công nghệ toàn diện & Nhân sự IT theo yêu cầu.")}
                  </motion.p>
                  <div className="space-y-2">
                     {[
                        { icon: Mail, text: "contact@gensol.com.vn" },
                        { icon: Phone, text: "+84 (0) 123 456 789" },
                        { icon: MapPin, text: t("Hà Nội, Việt Nam") }
                     ].map((item, index) => (
                        <motion.div 
                           key={index}
                           className="flex items-center gap-2 text-sm dark:text-white/80 text-black/80"
                           initial={{ opacity: 0, x: -10 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ duration: 0.4, delay: index * 0.1 }}
                           whileHover={{ x: 5, color: "hsl(var(--primary))" }}
                        >
                           <motion.div
                              whileHover={{ scale: 1.2, rotate: 10 }}
                              transition={{ duration: 0.2 }}
                           >
                              <item.icon className="h-4 w-4" />
                           </motion.div>
                           <span>{item.text}</span>
                        </motion.div>
                     ))}
                  </div>
               </div>

               <div className="space-y-4">
                  <motion.h3 
                     className="text-lg font-bold"
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5 }}
                  >
                     {t("Dịch vụ")}
                  </motion.h3>
                  <ul className="space-y-2">
                     {[
                        { href: "#linh-vuc", text: t("Phát triển phần mềm") },
                        { href: "#linh-vuc", text: t("Tư vấn IT") },
                        { href: "#linh-vuc", text: t("Thiết bị & Linh kiện") },
                        { href: "#linh-vuc", text: t("Nhân sự & Logistics") }
                     ].map((item, index) => (
                        <motion.li
                           key={index}
                           initial={{ opacity: 0, x: -10 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                           <motion.div
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                           >
                              <Link
                                 href={item.href}
                                 className="text-sm dark:text-white/80 text-black/80 hover:text-foreground transition-colors"
                              >
                                 {item.text}
                              </Link>
                           </motion.div>
                        </motion.li>
                     ))}
                  </ul>
               </div>

               <div className="space-y-4">
                  <motion.h3 
                     className="text-lg font-bold"
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5 }}
                  >
                     {t("Công ty")}
                  </motion.h3>
                  <ul className="space-y-2">
                     {[
                        { href: "#ve-chung-toi", text: t("Về chúng tôi") },
                        { href: "#ly-do-chon", text: t("Lý do chọn chúng tôi") },
                        { href: "#lien-he", text: t("Liên hệ") },
                        { href: "#", text: t("Tuyển dụng") }
                     ].map((item, index) => (
                        <motion.li
                           key={index}
                           initial={{ opacity: 0, x: -10 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                           <motion.div
                              whileHover={{ x: 5 }}
                              transition={{ duration: 0.2 }}
                           >
                              <Link
                                 href={item.href}
                                 className="text-sm dark:text-white/80 text-black/80 hover:text-foreground transition-colors"
                              >
                                 {item.text}
                              </Link>
                           </motion.div>
                        </motion.li>
                     ))}
                  </ul>
               </div>

               <div className="space-y-4">
                  <motion.h3 
                     className="text-lg font-bold mb-2"
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5 }}
                  >
                     {t("Nhận tư vấn")}
                  </motion.h3>
                  <motion.p 
                     className="text-sm dark:text-white/80 text-black/80 mb-2"
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: 0.1 }}
                  >
                     {t("Đăng ký để nhận thông tin về dịch vụ mới")}
                  </motion.p>
                  <motion.div 
                     className="flex gap-2"
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: 0.2 }}
                  >
                     <motion.input
                        type="email"
                        placeholder={t("Email của bạn")}
                        className="flex h-9 w-full rounded-sm border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:dark:text-white/80 text-black/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                     />
                     <motion.button 
                        className="inline-flex items-center justify-center rounded-sm bg-primary px-3 py-1 text-sm font-medium text-primary-foreground shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                     >
                        {t("Đăng ký")}
                     </motion.button>
                  </motion.div>
               </div>
            </div>
            
            <motion.div 
               className="space-y-4 mt-4"
               style={{ y: tagsY }}
            >
               <motion.h3 
                  className="text-lg font-bold"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
               >
                  {t("Lĩnh vực chuyên môn")}
               </motion.h3>
               <div className="flex flex-wrap gap-2">
                  {/* Công nghệ - Phần mềm */}
                  {[
                     { text: t("Phát triển phần mềm"), color: "bg-blue-50 text-blue-700 ring-blue-600/10 dark:bg-blue-900/30 dark:text-blue-400 dark:ring-blue-400/20" },
                     { text: t("Lập trình máy tính"), color: "bg-blue-50 text-blue-700 ring-blue-600/10 dark:bg-blue-900/30 dark:text-blue-400 dark:ring-blue-400/20" },
                     { text: t("Tư vấn IT"), color: "bg-cyan-50 text-cyan-700 ring-cyan-600/10 dark:bg-cyan-900/30 dark:text-cyan-400 dark:ring-cyan-400/20" },
                     { text: t("Quản trị hệ thống"), color: "bg-cyan-50 text-cyan-700 ring-cyan-600/10 dark:bg-cyan-900/30 dark:text-cyan-400 dark:ring-cyan-400/20" },
                     { text: t("UI/UX Design"), color: "bg-orange-50 text-orange-700 ring-orange-600/10 dark:bg-orange-900/30 dark:text-orange-400 dark:ring-orange-400/20" },
                     { text: t("Xuất bản phần mềm"), color: "bg-purple-50 text-purple-700 ring-purple-600/10 dark:bg-purple-900/30 dark:text-purple-400 dark:ring-purple-400/20" },
                     { text: t("Game online"), color: "bg-purple-50 text-purple-700 ring-purple-600/10 dark:bg-purple-900/30 dark:text-purple-400 dark:ring-purple-400/20" },
                     { text: t("Máy tính & Linh kiện"), color: "bg-green-50 text-green-700 ring-green-600/10 dark:bg-green-900/30 dark:text-green-400 dark:ring-green-400/20" },
                     { text: t("Thiết bị điện tử"), color: "bg-green-50 text-green-700 ring-green-600/10 dark:bg-green-900/30 dark:text-green-400 dark:ring-green-400/20" },
                     { text: t("Sửa chữa máy tính"), color: "bg-green-50 text-green-700 ring-green-600/10 dark:bg-green-900/30 dark:text-green-400 dark:ring-green-400/20" },
                     { text: t("Cung ứng nhân lực IT"), color: "bg-yellow-50 text-yellow-700 ring-yellow-600/10 dark:bg-yellow-900/30 dark:text-yellow-400 dark:ring-yellow-400/20" },
                     { text: t("Quản lý lao động"), color: "bg-yellow-50 text-yellow-700 ring-yellow-600/10 dark:bg-yellow-900/30 dark:text-yellow-400 dark:ring-yellow-400/20" },
                     { text: t("Cho thuê xe"), color: "bg-red-50 text-red-700 ring-red-600/10 dark:bg-red-900/30 dark:text-red-400 dark:ring-red-400/20" },
                     { text: t("Vận tải hành khách"), color: "bg-red-50 text-red-700 ring-red-600/10 dark:bg-red-900/30 dark:text-red-400 dark:ring-red-400/20" },
                     { text: t("Tư vấn quản lý"), color: "bg-indigo-50 text-indigo-700 ring-indigo-600/10 dark:bg-indigo-900/30 dark:text-indigo-400 dark:ring-indigo-400/20" },
                     { text: t("Tư vấn kỹ thuật"), color: "bg-indigo-50 text-indigo-700 ring-indigo-600/10 dark:bg-indigo-900/30 dark:text-indigo-400 dark:ring-indigo-400/20" },
                     { text: t("Thiết kế chuyên dụng"), color: "bg-indigo-50 text-indigo-700 ring-indigo-600/10 dark:bg-indigo-900/30 dark:text-indigo-400 dark:ring-indigo-400/20" }
                  ].map((tag, index) => (
                     <motion.span
                        key={index}
                        className={`inline-flex items-center rounded-sm px-2 py-1 text-xs font-medium ring-1 ring-inset ${tag.color}`}
                     >
                        {tag.text}
                     </motion.span>
                  ))}
               </div>
            </motion.div>
            
            <motion.div 
               className="mt-8 border-t pt-8 text-center"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.3 }}
            >
               <p className="text-xs dark:text-white/80 text-black/80">
                  © 2024 GENSOL. {t("Tất cả quyền được bảo lưu")}. |
                  <motion.span
                     whileHover={{ color: "hsl(var(--foreground))" }}
                     transition={{ duration: 0.2 }}
                  >
                     <Link href="#" className="hover:text-foreground ml-1">
                        {t("Chính sách bảo mật")}
                     </Link>
                  </motion.span> |
                  <motion.span
                     whileHover={{ color: "hsl(var(--foreground))" }}
                     transition={{ duration: 0.2 }}
                  >
                     <Link href="#" className="hover:text-foreground ml-1">
                        {t("Điều khoản sử dụng")}
                     </Link>
                  </motion.span>
               </p>
            </motion.div>
         </div>
      </motion.footer>
   );
}
