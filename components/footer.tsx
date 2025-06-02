import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
   return (
      <footer className="w-full border-t bg-background py-12 md:py-16">
         <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
               <div className="space-y-4">
                  <div className="flex items-center gap-2">
                     <div className="w-8 h-8 bg-gradient-to-r from-primary to-blue-400 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">GS</span>
                     </div>
                     <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                        GENSOL
                     </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                     Đồng hành cùng bạn trong hành trình số hóa – Phát triển giải pháp linh hoạt và bền vững.
                  </p>
                  <div className="space-y-2">
                     <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <span>contact@gensol.vn</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <span>+84 (0) 123 456 789</span>
                     </div>
                     <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>Hà Nội, Việt Nam</span>
                     </div>
                  </div>
               </div>
               
               <div className="space-y-4">
                  <h3 className="text-lg font-bold">Dịch vụ</h3>
                  <ul className="space-y-2">
                     <li>
                        <Link
                           href="#linh-vuc"
                           className="text-sm text-muted-foreground hover:text-foreground"
                        >
                           Phát triển phần mềm
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#linh-vuc"
                           className="text-sm text-muted-foreground hover:text-foreground"
                        >
                           Tư vấn IT
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#linh-vuc"
                           className="text-sm text-muted-foreground hover:text-foreground"
                        >
                           Thiết bị & Linh kiện
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#linh-vuc"
                           className="text-sm text-muted-foreground hover:text-foreground"
                        >
                           Nhân sự & Logistics
                        </Link>
                     </li>
                  </ul>
               </div>
               
               <div className="space-y-4">
                  <h3 className="text-lg font-bold">Công ty</h3>
                  <ul className="space-y-2">
                     <li>
                        <Link
                           href="#ve-chung-toi"
                           className="text-sm text-muted-foreground hover:text-foreground"
                        >
                           Về chúng tôi
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#ly-do-chon"
                           className="text-sm text-muted-foreground hover:text-foreground"
                        >
                           Lý do chọn chúng tôi
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#lien-he"
                           className="text-sm text-muted-foreground hover:text-foreground"
                        >
                           Liên hệ
                        </Link>
                     </li>
                     <li>
                        <Link
                           href="#"
                           className="text-sm text-muted-foreground hover:text-foreground"
                        >
                           Tuyển dụng
                        </Link>
                     </li>
                  </ul>
               </div>
               
               <div className="space-y-4">
                  <h3 className="text-lg font-bold">Lĩnh vực chuyên môn</h3>
                  <div className="flex flex-wrap gap-2">
                     <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/10 dark:bg-blue-900/30 dark:text-blue-400 dark:ring-blue-400/20">
                        React
                     </span>
                     <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/10 dark:bg-yellow-900/30 dark:text-yellow-400 dark:ring-yellow-400/20">
                        Node.js
                     </span>
                     <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/10 dark:bg-green-900/30 dark:text-green-400 dark:ring-green-400/20">
                        Python
                     </span>
                     <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/10 dark:bg-blue-900/30 dark:text-blue-400 dark:ring-blue-400/20">
                        .NET
                     </span>
                     <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 dark:bg-red-900/30 dark:text-red-400 dark:ring-red-400/20">
                        Java
                     </span>
                     <span className="inline-flex items-center rounded-md bg-cyan-50 px-2 py-1 text-xs font-medium text-cyan-700 ring-1 ring-inset ring-cyan-600/10 dark:bg-cyan-900/30 dark:text-cyan-400 dark:ring-cyan-400/20">
                        DevOps
                     </span>
                     <span className="inline-flex items-center rounded-md bg-orange-50 px-2 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-600/10 dark:bg-orange-900/30 dark:text-orange-400 dark:ring-orange-400/20">
                        UI/UX
                     </span>
                     <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-600/10 dark:bg-purple-900/30 dark:text-purple-400 dark:ring-purple-400/20">
                        Mobile
                     </span>
                  </div>

                  <div className="mt-6">
                     <h3 className="text-lg font-bold mb-2">Nhận tư vấn</h3>
                     <p className="text-sm text-muted-foreground mb-2">
                        Đăng ký để nhận thông tin về dịch vụ mới
                     </p>
                     <div className="flex gap-2">
                        <input
                           type="email"
                           placeholder="Email của bạn"
                           className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        />
                        <button className="inline-flex items-center justify-center rounded-md bg-primary px-3 py-1 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                           Đăng ký
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="mt-8 border-t pt-8 text-center">
               <p className="text-xs text-muted-foreground">
                  © 2024 GENSOL. Tất cả quyền được bảo lưu. | 
                  <Link href="#" className="hover:text-foreground ml-1">
                     Chính sách bảo mật
                  </Link> | 
                  <Link href="#" className="hover:text-foreground ml-1">
                     Điều khoản sử dụng
                  </Link>
               </p>
            </div>
         </div>
      </footer>
   );
}
