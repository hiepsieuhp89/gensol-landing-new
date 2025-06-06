"use client"

import { useRef } from "react"
import { useInView, useScroll, useTransform } from "framer-motion"
import { Code, Laptop, Users, Truck, Sparkle } from "lucide-react"
import { motion } from "framer-motion"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Enhanced scroll-based transforms for features section - removed opacity
  const sectionY = useTransform(scrollYProgress, [0, 1], [120, -120])
  const sectionScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.9])
  const sectionRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10])
 

  const features = [
    {
      icon: <Code className="h-5 w-5 text-white" />,
      title: "Công nghệ - Phần mềm",
      description: "Phát triển phần mềm tùy chỉnh, lập trình máy tính, tư vấn IT và thiết kế UI/UX chuyên nghiệp.",
      color: "from-blue-500/20 to-cyan-500/20",
      image: "/images/feature1.png",
    },
    {
      icon: <Laptop className="h-5 w-5 text-white" />,
      title: "Thiết bị & Dịch vụ",
      description: "Bán buôn máy tính, linh kiện điện tử, sửa chữa thiết bị và các dịch vụ công nghệ liên quan.",
      color: "from-green-500/20 to-emerald-500/20",
      image: "/images/feature2.png",
    },
    {
      icon: <Users className="h-5 w-5 text-white" />,
      title: "Nhân sự & Tư vấn",
      description: "Cung ứng lao động, nhân lực IT, tư vấn quản lý nội bộ và các dịch vụ nhân sự chuyên nghiệp.",
      color: "from-purple-500/20 to-pink-500/20",
      image: "/images/feature3.png",
    },
    {
      icon: <Truck className="h-5 w-5 text-white" />,
      title: "Logistics & Vận tải",
      description: "Dịch vụ cho thuê xe, vận tải hành khách và các giải pháp logistics linh hoạt theo nhu cầu.",
      color: "from-orange-500/20 to-red-500/20",
      image: "/images/feature4.png",
    },
  ]

  return (
    <motion.section
      id="linh-vuc"
      ref={ref}
      className="w-full py-12 md:pb-16 md:pt-0 relative overflow-hidden"
      style={{
        y: sectionY,
        scale: sectionScale,
        rotateX: sectionRotateX,
        perspective: 1000,
      }}
    >
      {/* Enhanced Background Elements with scroll effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/50"
          style={{
            scale: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.8]),
          }}
        />

        {/* Dynamic background orb with complex movement */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-primary/5 to-blue-400/5 blur-3xl"
          style={{
            x: useTransform(scrollYProgress, [0, 0.5, 1], [0, 100, -50]),
            y: useTransform(scrollYProgress, [0, 0.5, 1], [0, -80, 40]),
            scale: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1.5, 1.2, 0.8]),
            rotate: useTransform(scrollYProgress, [0, 1], [0, 180]),
          }}
        />
      </div>

      <div className="container px-4 md:px-6">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <motion.div
            className="space-y-4"
            initial={{ y: 50, scale: 0.8 }}
            animate={isInView ? { y: 0, scale: 1 } : { y: 50, scale: 0.8 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="rounded-full bg-gradient-to-r from-primary to-blue-400 text-white px-4 py-1.5 text-sm font-medium text-primary flex items-center w-fit gap-1 mx-auto"
              initial={{ scale: 0, rotateX: 90 }}
              animate={isInView ? { scale: 1, rotateX: 0 } : { scale: 0, rotateX: 90 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Sparkle className="h-4 w-4 text-white" />
              Lĩnh vực hoạt động
            </motion.div>

            <motion.h2
              className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl"
              initial={{ y: 30, rotateX: 45 }}
              animate={isInView ? { y: 0, rotateX: 0 } : { y: 30, rotateX: 45 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Giải pháp đa ngành{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                cho doanh nghiệp
              </span>
            </motion.h2>

            <motion.p
              className="max-w-[800px] mx-auto text-muted-foreground md:text-lg"
              initial={{ y: 30, scale: 0.9 }}
              animate={isInView ? { y: 0, scale: 1 } : { y: 30, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              GENSOL cung cấp các dịch vụ đa dạng từ công nghệ thông tin, thiết bị, nhân sự đến logistics, phù hợp cho
              các doanh nghiệp vừa và nhỏ.
            </motion.p>
          </motion.div>
        </div>

        {/* Grid Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer"
              initial={{ y: 80, scale: 0.8, rotateY: 45 }}
              animate={isInView ? { y: 0, scale: 1, rotateY: 0 } : { y: 80, scale: 0.8, rotateY: 45 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
                {/* Glassmorphism background with enhanced border */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-white/70 dark:from-slate-800/90 dark:via-slate-800/80 dark:to-slate-900/70 backdrop-blur-xl rounded-xl border border-slate-200/60 dark:border-slate-600/40" />

                {/* Enhanced animated gradient border */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/30 via-blue-400/30 to-cyan-400/30 p-[2px] group-hover:from-primary/60 group-hover:via-blue-400/60 group-hover:to-cyan-400/60 transition-all duration-500">
                  <div className="h-full w-full rounded-xl bg-gradient-to-br from-white/95 via-white/90 to-white/85 dark:from-slate-800/95 dark:via-slate-800/90 dark:to-slate-900/85 backdrop-blur-xl border border-white/40 dark:border-slate-700/40" />
                </div>

                {/* Content container */}
                <div className="relative z-10 p-6 h-full flex flex-col">
                  {/* Feature Image with enhanced styling */}
                  <div className="relative h-48 w-full mb-6 rounded-xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                    <img
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      className="pointer-events-none relative z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Enhanced gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-40 group-hover:opacity-60 transition-opacity duration-500`}
                    />

                    {/* Shimmer effect */}
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

                  {/* Enhanced progress bar with animation */}
                  <div className="mt-6 relative">
                    <div className="h-1 w-full bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary via-blue-400 to-cyan-400 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out" />
                    </div>
                  </div>
                </div>

                {/* Floating elements for extra visual interest */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-primary to-blue-400 rounded-full"
                  initial={{ scale: 0.6 }}
                  animate={{ scale: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute top-8 right-8 w-1 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                  initial={{ scale: 0.4 }}
                  animate={{ scale: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                />
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 via-blue-400/0 to-cyan-400/0 group-hover:from-primary/5 group-hover:via-blue-400/5 group-hover:to-cyan-400/5 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
