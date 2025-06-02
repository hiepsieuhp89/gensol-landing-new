"use client"
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
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
         className="w-full border-t bg-background py-12 md:py-16"
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
                              filter: 'brightness(1.2) contrast(1.2) saturate(1.2) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))',
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
                              filter: 'brightness(1.2) contrast(1.2) saturate(1.2) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))',
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
                     className="text-sm text-muted-foreground"
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5 }}
                  >
                     Đồng hành cùng bạn trong hành trình số hóa – Phát triển giải pháp linh hoạt và bền vững.
                  </motion.p>
                  <div className="space-y-2">
                     {[
                        { icon: Mail, text: "contact@gensol.vn" },
                        { icon: Phone, text: "+84 (0) 123 456 789" },
                        { icon: MapPin, text: "Hà Nội, Việt Nam" }
                     ].map((item, index) => (
                        <motion.div 
                           key={index}
                           className="flex items-center gap-2 text-sm text-muted-foreground"
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
                     Dịch vụ
                  </motion.h3>
                  <ul className="space-y-2">
                     {[
                        { href: "#linh-vuc", text: "Phát triển phần mềm" },
                        { href: "#linh-vuc", text: "Tư vấn IT" },
                        { href: "#linh-vuc", text: "Thiết bị & Linh kiện" },
                        { href: "#linh-vuc", text: "Nhân sự & Logistics" }
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
                                 className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
                     Công ty
                  </motion.h3>
                  <ul className="space-y-2">
                     {[
                        { href: "#ve-chung-toi", text: "Về chúng tôi" },
                        { href: "#ly-do-chon", text: "Lý do chọn chúng tôi" },
                        { href: "#lien-he", text: "Liên hệ" },
                        { href: "#", text: "Tuyển dụng" }
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
                                 className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
                     Nhận tư vấn
                  </motion.h3>
                  <motion.p 
                     className="text-sm text-muted-foreground mb-2"
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: 0.1 }}
                  >
                     Đăng ký để nhận thông tin về dịch vụ mới
                  </motion.p>
                  <motion.div 
                     className="flex gap-2"
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.5, delay: 0.2 }}
                  >
                     <motion.input
                        type="email"
                        placeholder="Email của bạn"
                        className="flex h-9 w-full rounded-sm border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        whileFocus={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                     />
                     <motion.button 
                        className="inline-flex items-center justify-center rounded-sm bg-primary px-3 py-1 text-sm font-medium text-primary-foreground shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                     >
                        Đăng ký
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
                  Lĩnh vực chuyên môn
               </motion.h3>
               <div className="flex flex-wrap gap-2">
                  {/* Công nghệ - Phần mềm */}
                  {[
                     { text: "Phát triển phần mềm", color: "blue" },
                     { text: "Lập trình máy tính", color: "blue" },
                     { text: "Tư vấn IT", color: "cyan" },
                     { text: "Quản trị hệ thống", color: "cyan" },
                     { text: "UI/UX Design", color: "orange" },
                     { text: "Xuất bản phần mềm", color: "purple" },
                     { text: "Game online", color: "purple" },
                     { text: "Máy tính & Linh kiện", color: "green" },
                     { text: "Thiết bị điện tử", color: "green" },
                     { text: "Sửa chữa máy tính", color: "green" },
                     { text: "Cung ứng nhân lực IT", color: "yellow" },
                     { text: "Quản lý lao động", color: "yellow" },
                     { text: "Cho thuê xe", color: "red" },
                     { text: "Vận tải hành khách", color: "red" },
                     { text: "Tư vấn quản lý", color: "indigo" },
                     { text: "Tư vấn kỹ thuật", color: "indigo" },
                     { text: "Thiết kế chuyên dụng", color: "indigo" }
                  ].map((tag, index) => (
                     <motion.span
                        key={index}
                        className={`inline-flex items-center rounded-sm bg-${tag.color}-50 px-2 py-1 text-xs font-medium text-${tag.color}-700 ring-1 ring-inset ring-${tag.color}-600/10 dark:bg-${tag.color}-900/30 dark:text-${tag.color}-400 dark:ring-${tag.color}-400/20`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.02 }}
                        whileHover={{ 
                           scale: 1.05, 
                           y: -2,
                           boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
                        }}
                        style={{
                           y: useTransform(scrollYProgress, [0, 1], [Math.sin(index) * 5, Math.cos(index) * 3])
                        }}
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
               <p className="text-xs text-muted-foreground">
                  © 2024 GENSOL. Tất cả quyền được bảo lưu. |
                  <motion.span
                     whileHover={{ color: "hsl(var(--foreground))" }}
                     transition={{ duration: 0.2 }}
                  >
                     <Link href="#" className="hover:text-foreground ml-1">
                        Chính sách bảo mật
                     </Link>
                  </motion.span> |
                  <motion.span
                     whileHover={{ color: "hsl(var(--foreground))" }}
                     transition={{ duration: 0.2 }}
                  >
                     <Link href="#" className="hover:text-foreground ml-1">
                        Điều khoản sử dụng
                     </Link>
                  </motion.span>
               </p>
            </motion.div>
         </div>
      </motion.footer>
   );
}
