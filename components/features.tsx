"use client"

import { useRef } from "react"
import { Code, Laptop, Users, Truck, Sparkle } from "lucide-react"
import { motion } from "framer-motion"
import { useTranslation } from "@/contexts/translation-context"

export default function Features() {
  const { t } = useTranslation()
  const ref = useRef(null)
  const features = [
    {
      icon: <Code className="h-5 w-5 text-white" />,
      title: t("Công nghệ thông tin & Lập trình"),
      description: t("Lập trình máy tính, xuất bản phần mềm & game, tư vấn máy tính và quản lý hệ thống, hoạt động dịch vụ công nghệ thông tin."),
      color: "from-blue-500/20 to-cyan-500/20",
      image: "/images/feature1.png",
    },
    {
      icon: <Laptop className="h-5 w-5 text-white" />,
      title: t("Thiết bị & Linh kiện ICT"),
      description: t("Buôn bán thiết bị và linh kiện điện tử viễn thông, tư vấn và cung cấp giải pháp công nghệ thông tin toàn diện."),
      color: "from-green-500/20 to-emerald-500/20",
      image: "/images/feature2.png",
    },
    {
      icon: <Users className="h-5 w-5 text-white" />,
      title: t("Kiến trúc & Thiết kế"),
      description: t("Hoạt động về kiến trúc & tư vấn kỹ thuật, hoạt động thiết kế chuyên dụng và các dịch vụ tư vấn kỹ thuật chuyên nghiệp."),
      color: "from-purple-500/20 to-pink-500/20",
      image: "/images/feature3.png",
    },
    {
      icon: <Truck className="h-5 w-5 text-white" />,
      title: t("Tư vấn & Quản lý"),
      description: t("Hoạt động tư vấn quản lý, tư vấn doanh nghiệp và các dịch vụ hỗ trợ quản lý nội bộ chuyên nghiệp."),
      color: "from-orange-500/20 to-red-500/20",
      image: "/images/feature4.png",
    },
  ]

  return (
    <section
      id="linh-vuc"
      ref={ref}
      className="w-full py-12 md:py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-primary/5 to-blue-400/5 blur-3xl" />
      </div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-4">
            <div className="rounded-full bg-gradient-to-r from-primary to-blue-400 text-white px-4 py-1.5 text-sm font-medium text-primary flex items-center w-fit gap-1 mx-auto">
              <Sparkle className="h-4 w-4 text-white" />
              {t("Lĩnh vực hoạt động")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
              {t("Giải pháp đa ngành")}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                {t("cho doanh nghiệp")}
              </span>
            </h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
              {t("GENSOL cung cấp các dịch vụ đa dạng từ công nghệ thông tin, thiết bị, nhân sự đến logistics, phù hợp cho các doanh nghiệp vừa và nhỏ.")}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer"
              whileHover={{
                y: -10,
                rotateY: 5,
                rotateX: 5,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              style={{
                perspective: 1000,
              }}
            >
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-white/70 dark:from-slate-800/90 dark:via-slate-800/80 dark:to-slate-900/70 backdrop-blur-xl rounded-xl border border-slate-200/60 dark:border-slate-600/40" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/30 via-blue-400/30 to-cyan-400/30 p-[2px] group-hover:from-primary/60 group-hover:via-blue-400/60 group-hover:to-cyan-400/60 transition-all duration-500">
                  <div className="h-full w-full rounded-xl bg-gradient-to-br from-white/95 via-white/90 to-white/85 dark:from-slate-800/95 dark:via-slate-800/90 dark:to-slate-900/85 backdrop-blur-xl border border-white/40 dark:border-slate-700/40" />
                </div>
                <div className="relative z-10 p-6 h-full flex flex-col">
                  <div className="relative h-48 w-full mb-6 rounded-xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                    <img
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      className="pointer-events-none relative z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-40 group-hover:opacity-60 transition-opacity duration-500`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#007B9490] text-white shadow shadow-primary/10 transition-all duration-500 flex-shrink-0 group-hover:scale-110 group-hover:rotate-3">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-primary dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                  <div className="mt-6 relative">
                    <div className="h-1 w-full bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary via-blue-400 to-cyan-400 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out" />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 via-blue-400/0 to-cyan-400/0 group-hover:from-primary/5 group-hover:via-blue-400/5 group-hover:to-cyan-400/5 transition-all duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
