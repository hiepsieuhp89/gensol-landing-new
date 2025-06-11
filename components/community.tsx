"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Target, Eye, Building2, CheckCircle, Settings, Zap, Sparkle } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"

export default function AboutUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useTranslation()

  const businessAreas = [
    t("Hoạt động tư vấn quản lý"),
    t("Tư vấn máy vi tính & quản trị hệ thống"),
    t("Hoạt động dịch vụ công nghệ thông tin"),
    t("Lập trình máy vi tính"),
    t("Xuất bản phần mềm & game"),
    t("Bán buôn thiết bị & linh kiện điện tử, viễn thông"),
    t("Hoạt động kiến trúc & tư vấn kỹ thuật"),
    t("Hoạt động thiết kế chuyên dụng"),
    t("Bán buôn máy vi tính, thiết bị ngoại vi & phần mềm"),
    t("Sửa chữa máy vi tính & thiết bị ngoại vi"),
    t("Cung ứng & quản lý nguồn lao động"),
  ]

  return (
    <section
      id="ve-chung-toi"
      ref={ref}
      className="w-full py-12 md:py-20 relative overflow-hidden max-w-7xl mx-auto"
    >
      {/* Base gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6FB4C3]/35 via-background to-[#6FB4C3]/50 rounded-3xl" />

        {/* Doodle Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.18]">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="doodlePattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                {/* Gear shapes */}
                <circle cx="50" cy="50" r="15" fill="none" stroke="#6FB4C3" strokeWidth="2" />
                <circle cx="50" cy="50" r="8" fill="none" stroke="#6FB4C3" strokeWidth="1" />
                {Array.from({ length: 8 }).map((_, i) => (
                  <rect
                    key={i}
                    x="48"
                    y="35"
                    width="4"
                    height="8"
                    fill="#6FB4C3"
                    transform={`rotate(${i * 45} 50 50)`}
                  />
                ))}

                {/* Electric/Lightning shapes */}
                <path d="M30,120 L40,100 L35,100 L45,80 L35,100 L40,100 L30,120 Z" fill="#6FB4C3" opacity="1" />
                <path
                  d="M160,140 L170,120 L165,120 L175,100 L165,120 L170,120 L160,140 Z"
                  fill="#6FB4C3"
                  opacity="0.9"
                />

                {/* Additional small gears */}
                <circle cx="120" cy="160" r="8" fill="none" stroke="#6FB4C3" strokeWidth="1" />
                {Array.from({ length: 6 }).map((_, i) => (
                  <rect
                    key={`small-${i}`}
                    x="118"
                    y="152"
                    width="4"
                    height="4"
                    fill="#6FB4C3"
                    transform={`rotate(${i * 60} 120 160)`}
                  />
                ))}

                {/* Circuit lines */}
                <path d="M80,80 L100,80 L100,100 L120,100" stroke="#6FB4C3" strokeWidth="1" fill="none" opacity="0.9" />
                <circle cx="85" cy="80" r="2" fill="#6FB4C3" opacity="1" />
                <circle cx="115" cy="100" r="2" fill="#6FB4C3" opacity="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#doodlePattern)" />
          </svg>
        </div>

        {/* Static gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-[#6FB4C3]/40 to-[#6FB4C3]/25 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#6FB4C3]/35 to-[#6FB4C3]/45 blur-2xl" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-4">
            <div className="rounded-full bg-gradient-to-r from-primary to-blue-400 text-white px-4 py-1.5 text-sm font-medium text-primary flex items-center w-fit gap-1 mx-auto mb-4">
              <Sparkle className="h-4 w-4 text-white" />
              {t("Về chúng tôi")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
              {t("Công ty")}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">GENSOL</span>
            </h2>
            <p className="max-w-[840px] mx-auto dark:text-white/70 text-black/80 md:text-xl">
              {t("Được thành lập với sứ mệnh cung cấp giải pháp công nghệ & nhân sự toàn diện cho các doanh nghiệp Việt Nam, giúp khách hàng phát triển bền vững trong kỷ nguyên số.")}
            </p>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 items-start mb-16">
          {/* Vision & Mission */}
          <div className="space-y-8">
            <div className="group relative overflow-hidden rounded-xl border border-white/20 backdrop-blur-md p-4 shadow-md bg-white/15 transition-all duration-300">
              {/* Glassmorphism gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#007B9490] text-white shadow shadow-primary/10 transition-all duration-500">
                    <Eye className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary dark:text-white">{t("Tầm nhìn")}</h3>
                </div>
                <p className="dark:text-white/70 text-black/80">
                  {t("Trở thành đối tác tin cậy hàng đầu trong việc cung cấp giải pháp công nghệ & nhân sự toàn diện cho các doanh nghiệp tại Việt Nam.")}
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-white/20 backdrop-blur-md p-4 shadow-md bg-white/15 transition-all duration-300">
              {/* Glassmorphism gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-4">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#007B9490] text-white shadow shadow-primary/10 transition-all duration-500">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-primary dark:text-white">{t("Sứ mệnh")}</h3>
                </div>
                <p className="dark:text-white/70 text-black/80">
                  {t("Đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số, cung cấp các giải pháp linh hoạt, hiệu quả & bền vững để tối ưu hóa hoạt động kinh doanh.")}
                </p>
              </div>
            </div>
          </div>

          {/* Business Areas */}
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-4">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#007B9490] text-white shadow shadow-primary/10 transition-all duration-500">
                  <Building2 className="h-5 w-5 text-white" />
                </div>
                <h3 className="mb-4 text-xl font-bold text-primary dark:text-white">{t("Lĩnh vực kinh doanh")}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {businessAreas.map((area, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/15 hover:shadow-md transition-all duration-300 cursor-pointer w-fit relative overflow-hidden shadow-md"
                  >
                    {/* Glassmorphism gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent rounded-full" />
                    <CheckCircle className="h-4 w-4 text-primary dark:text-white/70 mt-0.5 flex-shrink-0 relative z-10" />
                    <span className="text-sm dark:text-white/70 text-black/80 relative z-10">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-3 rounded-[4px] border backdrop-blur-sm border-primary bg-[#ffffff95] dark:bg-background text-primary">
            <Sparkle className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              {t("Đội ngũ linh hoạt • Dịch vụ đa ngành • Giải pháp bền vững")}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
