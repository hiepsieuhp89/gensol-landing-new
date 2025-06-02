"use client"

import { useRef } from "react"
import { useInView, useScroll, useTransform } from "framer-motion"
import { Target, Eye, Building2, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Enhanced scroll-based transforms for about section
  const y = useTransform(scrollYProgress, [0, 1], [80, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95])
  
  // Vision/Mission cards animations
  const visionX = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [-60, 0, 0, 30])
  const missionX = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [60, 0, 0, -30])
  const cardsRotate = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -4])
  
  // Business areas animations
  const businessAreasY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -50])
  const businessAreasRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-3, 0, 2])

  const businessAreas = [
    "Hoạt động tư vấn quản lý",
    "Bán buôn máy vi tính, thiết bị ngoại vi và phần mềm",
    "Bán buôn thiết bị và linh kiện điện tử, viễn thông",
    "Vận tải hành khách đường bộ",
    "Xuất bản phần mềm và game online",
    "Lập trình máy vi tính",
    "Tư vấn máy vi tính và quản trị hệ thống",
    "Hoạt động dịch vụ công nghệ thông tin",
    "Hoạt động kiến trúc và tư vấn kỹ thuật",
    "Hoạt động thiết kế chuyên dụng",
    "Cho thuê xe có động cơ",
    "Cung ứng và quản lý nguồn lao động",
    "Sửa chữa máy vi tính và thiết bị ngoại vi"
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

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
  }

  return (
    <motion.section 
      id="ve-chung-toi" 
      ref={ref}
      className="w-full py-12 md:py-16 relative overflow-hidden"
      style={{ y, opacity, scale }}
    >
      {/* Enhanced Background Elements with scroll effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-background"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.6])
          }}
        />
        <motion.div 
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-primary/5 to-blue-400/5 blur-3xl"
          style={{
            x: useTransform(scrollYProgress, [0, 1], [0, -120]),
            y: useTransform(scrollYProgress, [0, 1], [0, 80]),
            scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1.3, 0.8])
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
              Về chúng tôi
            </motion.div>
            <motion.h2 
              className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Công ty{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                GENSOL
              </span>
            </motion.h2>
            <motion.p 
              className="max-w-[800px] mx-auto text-muted-foreground md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Được thành lập với sứ mệnh cung cấp giải pháp công nghệ và nhân sự toàn diện 
              cho các doanh nghiệp Việt Nam, giúp họ phát triển bền vững trong kỷ nguyên số.
            </motion.p>
          </motion.div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-start mb-16">
          {/* Vision & Mission with enhanced animations */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="group relative overflow-hidden rounded-xl border bg-white dark:bg-background backdrop-blur-sm p-6 hover:shadow-lg transition-shadow"
              variants={itemVariants}
              style={{ 
                x: visionX, 
                rotateY: cardsRotate,
                transformPerspective: 1000,
                boxShadow: useTransform(
                  scrollYProgress,
                  [0, 0.4, 0.6, 1],
                  [
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                  ]
                )
              }}
            >
              <div className="relative z-10">
                <motion.div 
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#E2E8F0] dark:bg-[#1E293B]"
                  style={{
                    scale: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1.2, 1.2, 1]),
                    rotate: useTransform(scrollYProgress, [0, 1], [0, 360])
                  }}
                >
                  <Eye className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="mb-3 text-xl font-bold">Tầm nhìn</h3>
                <p className="text-muted-foreground">
                  Trở thành đối tác tin cậy hàng đầu trong việc cung cấp giải pháp công nghệ, 
                  nhân sự và logistics toàn diện cho các doanh nghiệp tại Việt Nam.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="group relative overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm p-6 hover:shadow-lg transition-shadow"
              variants={itemVariants}
              style={{ 
                x: missionX, 
                rotateY: useTransform(cardsRotate, (value) => -value),
                transformPerspective: 1000,
                boxShadow: useTransform(
                  scrollYProgress,
                  [0, 0.4, 0.6, 1],
                  [
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    "0 25px 50px -12px rgba(59, 130, 246, 0.15)",
                    "0 25px 50px -12px rgba(59, 130, 246, 0.15)",
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                  ]
                )
              }}
            >
              <div className="relative z-10">
                <motion.div 
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-400/10"
                  style={{
                    scale: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1.2, 1.2, 1]),
                    rotate: useTransform(scrollYProgress, [0, 1], [0, -360])
                  }}
                >
                  <Target className="h-6 w-6 text-blue-400" />
                </motion.div>
                <h3 className="mb-3 text-xl font-bold">Sứ mệnh</h3>
                <p className="text-muted-foreground">
                  Đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số, cung cấp các giải pháp 
                  linh hoạt, hiệu quả và bền vững để tối ưu hóa hoạt động kinh doanh.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Business Areas with staggered animations */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ y: businessAreasY, rotateX: businessAreasRotate }}
          >
            <motion.div variants={itemVariants}>
              <motion.div 
                className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#E2E8F0] dark:bg-[#1E293B]"
                style={{
                  scale: useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.5, 1.3, 1.3, 0.9]),
                  rotate: useTransform(scrollYProgress, [0, 1], [0, 180])
                }}
              >
                <Building2 className="h-6 w-6 text-primary" />
              </motion.div>
              <h3 className="mb-4 text-xl font-bold">Lĩnh vực kinh doanh</h3>
              <div className="grid gap-3">
                {businessAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/50 hover:border-primary/30 transition-colors"
                    variants={itemVariants}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.03 }}
                    style={{
                      x: useTransform(
                        scrollYProgress,
                        [0, 0.3, 0.7, 1],
                        [40 + index * 2, 0, 0, -20 - index]
                      ),
                      opacity: useTransform(
                        scrollYProgress,
                        [0, 0.2 + index * 0.02, 0.8 - index * 0.02, 1],
                        [0, 1, 1, 0.8]
                      ),
                      scale: useTransform(
                        scrollYProgress,
                        [0, 0.4, 0.6, 1],
                        [0.9, 1, 1, 0.95]
                      )
                    }}
                  >
                    <motion.div
                      style={{
                        scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 1.2]),
                        rotate: useTransform(scrollYProgress, [0, 1], [0, 360])
                      }}
                    >
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    </motion.div>
                    <span className="text-sm text-muted-foreground">{area}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Company Values with enhanced scroll effects */}
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="inline-flex items-center gap-4 px-6 py-3 rounded-full border bg-background/50 backdrop-blur-sm"
            variants={itemVariants}
            style={{
              scale: useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.8, 1.1, 1.1, 0.9]),
              rotateZ: useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5]),
              boxShadow: useTransform(
                scrollYProgress,
                [0, 0.5, 1],
                [
                  "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                  "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
                ]
              )
            }}
          >
            <span className="text-sm font-medium text-muted-foreground">
              Đội ngũ linh hoạt • Dịch vụ đa ngành • Giải pháp bền vững
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
