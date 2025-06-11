"use client"
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "@/contexts/translation-context";

export default function Footer() {
   const { t } = useTranslation()
   const ref = useRef(null);

   return (
      <footer
         ref={ref}
         className="w-full border-t bg-[#020817] pt-12 md:pt-20 relative before:content-[''] before:absolute before:inset-0 before:bg-cover before:bg-bottom before:bg-no-repeat before:blur-xs before:-z-10"
      >
         <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
               <div className="-mt-[12px] col-span-1">
                  <div className='flex items-center gap-1'>
                     <Image
                        src={"/images/logo.png"}
                        alt="GENSOL logo"
                        height={70}
                        width={70}
                        className='object-cover filter scale-90 -ml-5'
                        style={{
                           imageRendering: 'crisp-edges',
                        }}
                        quality={100}
                        priority
                        draggable={false}
                        sizes="40px"
                        unoptimized={false}
                     />
                     <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                     >
                        <Image
                           src={"/images/text-logo.png"}
                           alt="GENSOL text logo"
                           height={32}
                           width={120}
                           className='filter scale-90 -ml-2'
                           style={{
                              imageRendering: 'crisp-edges',
                           }}
                           quality={100}
                           priority
                           draggable={false}
                           sizes="110px"
                           unoptimized={false}
                        />
                     </motion.div>
                  </div>
                  <p className="text-sm text-white/70 mb-4 leading-6 text-justify">
                     {t("Đồng hành cùng bạn trong hành trình số hóa – Phát triển giải pháp linh hoạt & bền vững. Giải pháp Công nghệ toàn diện & Nhân sự IT theo yêu cầu.")}
                  </p>
                  <div className="space-y-2 mb-4">
                     {[
                        { icon: Mail, text: "contact@gensol.com.vn" },
                        { icon: Phone, text: "+84 (0) 123 456 789" },
                        { icon: MapPin, text: t("Hà Nội, Việt Nam") }
                     ].map((item, index) => (
                        <motion.div
                           key={index}
                           className="flex items-center gap-2 text-sm text-white/70"
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
               <div className="col-span-3">
                  <div className="grid grid-cols-3">
                     <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">
                           {t("Dịch vụ")}
                        </h3>
                        <ul className="space-y-2">
                           {[
                              { href: "#linh-vuc", text: t("Phát triển phần mềm") },
                              { href: "#linh-vuc", text: t("Tư vấn IT") },
                              { href: "#linh-vuc", text: t("Thiết bị & Linh kiện") },
                              { href: "#linh-vuc", text: t("Nhân sự & Logistics") }
                           ].map((item, index) => (
                              <motion.li
                                 key={index}
                              >
                                 <motion.div
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                 >
                                    <Link
                                       href={item.href}
                                       className="text-sm text-white/70 hover:text-foreground transition-colors"
                                    >
                                       {item.text}
                                    </Link>
                                 </motion.div>
                              </motion.li>
                           ))}
                        </ul>
                     </div>

                     <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">
                           {t("Công ty")}
                        </h3>
                        <ul className="space-y-2">
                           {[
                              { href: "#ve-chung-toi", text: t("Về chúng tôi") },
                              { href: "#ly-do-chon", text: t("Lý do chọn chúng tôi") },
                              { href: "#lien-he", text: t("Liên hệ") },
                              { href: "#", text: t("Tuyển dụng") }
                           ].map((item, index) => (
                              <motion.li
                                 key={index}
                              >
                                 <motion.div
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                 >
                                    <Link
                                       href={item.href}
                                       className="text-sm text-white/70 hover:text-foreground transition-colors"
                                    >
                                       {item.text}
                                    </Link>
                                 </motion.div>
                              </motion.li>
                           ))}
                        </ul>
                     </div>

                     <div className="space-y-4">
                        <h3 className="text-lg font-bold mb-2 text-white">
                           {t("Nhận tư vấn")}
                        </h3>
                        <p className="text-sm text-white/70 mb-2">
                           {t("Đăng ký để nhận thông tin về dịch vụ mới")}
                        </p>
                        <div className="flex gap-2">
                           <motion.input
                              type="email"
                              placeholder={t("Email của bạn")}
                              className="flex h-9 w-full rounded-[4px] px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border border-[#1E293B]"
                              whileFocus={{ scale: 1.02 }}
                              transition={{ duration: 0.2 }}
                           />
                           <motion.button
                              className="inline-flex items-center justify-center rounded-[4px] bg-primary px-3 py-1 text-sm font-medium text-primary-foreground shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 flex-shrink-0"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              transition={{ duration: 0.2 }}
                           >
                              {t("Đăng ký")}
                           </motion.button>
                        </div>
                     </div>
                  </div>
                  <div className="space-y-4 mt-4">
                     <h3 className="text-lg font-bold text-white">
                        {t("Lĩnh vực chuyên môn")}
                     </h3>
                     <div className="flex flex-wrap gap-2">
                        {/* Công nghệ - Phần mềm */}
                        {[
                           { text: t("Phát triển phần mềm"), color: "bg-blue-50 text-blue-700 ring-blue-600/10 bg-blue-900/30 text-blue-400 ring-blue-400/20" },
                           { text: t("Lập trình máy tính"), color: "bg-blue-50 text-blue-700 ring-blue-600/10 bg-blue-900/30 text-blue-400 ring-blue-400/20" },
                           { text: t("Tư vấn IT"), color: "bg-cyan-50 text-cyan-700 ring-cyan-600/10 bg-cyan-900/30 text-cyan-400 ring-cyan-400/20" },
                           { text: t("Quản trị hệ thống"), color: "bg-cyan-50 text-cyan-700 ring-cyan-600/10 bg-cyan-900/30 text-cyan-400 ring-cyan-400/20" },
                           { text: t("UI/UX Design"), color: "bg-orange-50 text-orange-700 ring-orange-600/10 bg-orange-900/30 text-orange-400 ring-orange-400/20" },
                           { text: t("Xuất bản phần mềm"), color: "bg-purple-50 text-purple-700 ring-purple-600/10 bg-purple-900/30 text-purple-400 ring-purple-400/20" },
                           { text: t("Game online"), color: "bg-purple-50 text-purple-700 ring-purple-600/10 bg-purple-900/30 text-purple-400 ring-purple-400/20" },
                           { text: t("Máy tính & Linh kiện"), color: "bg-green-50 text-green-700 ring-green-600/10 bg-green-900/30 text-green-400 ring-green-400/20" },
                           { text: t("Thiết bị điện tử"), color: "bg-green-50 text-green-700 ring-green-600/10 bg-green-900/30 text-green-400 ring-green-400/20" },
                           { text: t("Sửa chữa máy tính"), color: "bg-green-50 text-green-700 ring-green-600/10 bg-green-900/30 text-green-400 ring-green-400/20" },
                           { text: t("Cung ứng nhân lực IT"), color: "bg-yellow-50 text-yellow-700 ring-yellow-600/10 bg-yellow-900/30 text-yellow-400 ring-yellow-400/20" },
                           { text: t("Quản lý lao động"), color: "bg-yellow-50 text-yellow-700 ring-yellow-600/10 bg-yellow-900/30 text-yellow-400 ring-yellow-400/20" },
                           { text: t("Cho thuê xe"), color: "bg-red-50 text-red-700 ring-red-600/10 bg-red-900/30 text-red-400 ring-red-400/20" },
                           { text: t("Vận tải hành khách"), color: "bg-red-50 text-red-700 ring-red-600/10 bg-red-900/30 text-red-400 ring-red-400/20" },
                           { text: t("Tư vấn quản lý"), color: "bg-indigo-50 text-indigo-700 ring-indigo-600/10 bg-indigo-900/30 text-indigo-400 ring-indigo-400/20" },
                           { text: t("Tư vấn kỹ thuật"), color: "bg-indigo-50 text-indigo-700 ring-indigo-600/10 bg-indigo-900/30 text-indigo-400 ring-indigo-400/20" },
                           { text: t("Thiết kế chuyên dụng"), color: "bg-indigo-50 text-indigo-700 ring-indigo-600/10 bg-indigo-900/30 text-indigo-400 ring-indigo-400/20" }
                        ].map((tag, index) => (
                           <span
                              key={index}
                              className={`inline-flex items-center rounded-[4px] px-2 py-1 text-xs font-medium ring-1 ring-inset ${tag.color}`}
                           >
                              {tag.text}
                           </span>
                        ))}
                     </div>
                  </div>
               </div>
            </div>

            <div className="mt-12 py-8 mb text-center border-t border-t-[#1E293B]">
               <p className="text-sm text-white/70">
                  © 2024 GENSOL. {t("Tất cả quyền được bảo lưu")}. |
                  <motion.span
                     whileHover={{ color: "hsl(var(--foreground))" }}
                     transition={{ duration: 0.2 }}
                  >
                     <Link href="#" className="text-sm text-white/70 ml-1">
                        {t("Chính sách bảo mật")}
                     </Link>
                  </motion.span> |
                  <motion.span
                     whileHover={{ color: "hsl(var(--foreground))" }}
                     transition={{ duration: 0.2 }}
                  >
                     <Link href="#" className="text-sm text-white/70 ml-1">
                        {t("Điều khoản sử dụng")}
                     </Link>
                  </motion.span>
               </p>
            </div>
         </div>
      </footer>
   );
}
