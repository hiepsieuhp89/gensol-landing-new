  "use client"

  import { useRef } from "react"
  import { useInView, useScroll, useTransform } from "framer-motion"
  import { Target, Eye, Building2, CheckCircle, Settings, Zap, Sparkle } from "lucide-react"
  import { motion } from "framer-motion"

  export default function AboutUs() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"],
    })

    // Enhanced scroll-based transforms for about section - removed opacity
    const y = useTransform(scrollYProgress, [0, 1], [80, -80])
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95])

    // Vision/Mission cards animations
    const visionX = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [-60, 0, 0, 30])
    const missionX = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [60, 0, 0, -30])
    const cardsRotate = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -4])

    // Business areas animations
    const businessAreasY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -50])
    const businessAreasRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-3, 0, 2])

    // Doodle elements animations
    const doodleRotate1 = useTransform(scrollYProgress, [0, 1], [0, 360])
    const doodleRotate2 = useTransform(scrollYProgress, [0, 1], [0, -180])
    const doodleRotate3 = useTransform(scrollYProgress, [0, 1], [0, 270])
    const doodleFloat1 = useTransform(scrollYProgress, [0, 1], [0, -30])
    const doodleFloat2 = useTransform(scrollYProgress, [0, 1], [0, 20])
    const doodleFloat3 = useTransform(scrollYProgress, [0, 1], [0, -15])

    const businessAreas = [
      "Hoạt động tư vấn quản lý",
      "Bán buôn máy vi tính, thiết bị ngoại vi và phần mềm",
      "Bán buôn thiết bị và linh kiện điện tử, viễn thông",
      "Vận tải hành khách đường bộ",
      "Xuất bản phần mềm & game",
      "Cho thuê xe có động cơ",
      "Lập trình máy tính",
      "Tư vấn máy vi tính và quản trị hệ thống",
      "Hoạt động dịch vụ công nghệ thông tin",
      "Hoạt động kiến trúc và tư vấn kỹ thuật",
      "Hoạt động thiết kế chuyên dụng",
      "Cung ứng và quản lý nguồn lao động",
      "Sửa chữa máy vi tính và thiết bị ngoại vi",
    ]

    // Update the containerVariants to use transform instead of clipPath
    const containerVariants = {
      hidden: {
        y: 60,
        scale: 0.95,
      },
      visible: {
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,
          ease: "easeOut",
          staggerChildren: 0.1,
        },
      },
    }

    // Update the itemVariants to use transform instead of clipPath
    const itemVariants = {
      hidden: {
        y: 60,
        scale: 0.8,
      },
      visible: {
        y: 0,
        scale: 1,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      },
    }

    // Update the businessAreaTransforms function to ensure proper shadow rendering
    const businessAreaTransforms = (index: number) => ({
      x: [40 + index * 2, 0, 0, -20 - index],
      scale: [0.9, 1, 1, 0.95],
      filter: [
        "drop-shadow(0 4px 16px rgba(31, 38, 135, 0.2))",
        "drop-shadow(0 8px 32px rgba(31, 38, 135, 0.3))",
        "drop-shadow(0 8px 32px rgba(31, 38, 135, 0.3))",
        "drop-shadow(0 4px 16px rgba(31, 38, 135, 0.2))",
      ],
    })

    return (
      <motion.section
        id="ve-chung-toi"
        ref={ref}
        className="w-full py-12 md:py-16 relative overflow-hidden"
        style={{ y, scale }}
      >
        {/* Doodle Background Elements - Telegram Style */}
        <div className="absolute inset-0 -z-10">
          {/* Base gradient background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#6FB4C3]/35 via-background to-[#6FB4C3]/50 rounded-3xl"
            style={{
              scale: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.9]),
            }}
          />

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

          {/* Floating Animated Doodle Elements */}
          <motion.div
            className="absolute top-[12%] left-[8%] text-[#6FB4C3]/25"
            style={{
              rotate: doodleRotate1,
              y: doodleFloat1,
            }}
          >
            <Settings size={32} />
          </motion.div>

          <motion.div
            className="absolute top-[67%] left-[15%] text-[#6FB4C3]/30"
            style={{
              rotate: doodleRotate3,
              y: doodleFloat3,
            }}
          >
            <Zap size={26} />
          </motion.div>

          {/* Subtle gradient orbs */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-[#6FB4C3]/40 to-[#6FB4C3]/25 blur-3xl"
            style={{
              x: useTransform(scrollYProgress, [0, 1], [0, -80]),
              y: useTransform(scrollYProgress, [0, 1], [0, 60]),
              scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.9]),
            }}
          />

          <motion.div
            className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#6FB4C3]/35 to-[#6FB4C3]/45 blur-2xl"
            style={{
              x: useTransform(scrollYProgress, [0, 1], [0, 60]),
              y: useTransform(scrollYProgress, [0, 1], [0, -40]),
              scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 1.1]),
            }}
          />
        </div>

        <div className="container px-4 md:px-6">
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
                Về chúng tôi
              </motion.div>
              <motion.h2
                className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl"
                initial={{ y: 30, rotateX: 45 }}
                animate={isInView ? { y: 0, rotateX: 0 } : { y: 30, rotateX: 45 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Công ty{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">GENSOL</span>
              </motion.h2>
              <motion.p
                className="max-w-[800px] mx-auto text-muted-foreground md:text-lg"
                initial={{ y: 30, scale: 0.9 }}
                animate={isInView ? { y: 0, scale: 1 } : { y: 30, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Được thành lập với sứ mệnh cung cấp giải pháp công nghệ và nhân sự toàn diện cho các doanh nghiệp Việt
                Nam, giúp họ phát triển bền vững trong kỷ nguyên số.
              </motion.p>
            </motion.div>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 items-start mb-16">
            {/* Vision & Mission with enhanced animations */}
            <motion.div
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.div
                className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-6 hover:shadow-2xl hover:bg-white/15 transition-all duration-300"
                variants={itemVariants}
                style={{
                  x: visionX,
                  rotateY: cardsRotate,
                  transformPerspective: 1000,
                  filter: useTransform(
                    scrollYProgress,
                    [0, 0.4, 0.6, 1],
                    [
                      "drop-shadow(0 8px 32px rgba(31, 38, 135, 0.37))",
                      "drop-shadow(0 25px 50px rgba(31, 38, 135, 0.5))",
                      "drop-shadow(0 25px 50px rgba(31, 38, 135, 0.5))",
                      "drop-shadow(0 8px 32px rgba(31, 38, 135, 0.37))",
                    ],
                  ),
                }}
              >
                {/* Glassmorphism gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#007B9490] text-white shadow shadow-primary/10 transition-all duration-500">
                      <Eye className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary dark:text-white">Tầm nhìn</h3>
                  </div>
                  <p>
                    Trở thành đối tác tin cậy hàng đầu trong việc cung cấp giải pháp công nghệ, nhân sự và logistics toàn
                    diện cho các doanh nghiệp tại Việt Nam.
                  </p>
                </div>
              </motion.div>

              {/* Update the Mission card style to use filter instead of boxShadow */}
              <motion.div
                className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-md p-6 hover:shadow-2xl hover:bg-white/15 transition-all duration-300"
                variants={itemVariants}
                style={{
                  x: missionX,
                  rotateY: useTransform(cardsRotate, (value) => -value),
                  transformPerspective: 1000,
                  filter: useTransform(
                    scrollYProgress,
                    [0, 0.4, 0.6, 1],
                    [
                      "drop-shadow(0 8px 32px rgba(31, 38, 135, 0.37))",
                      "drop-shadow(0 25px 50px rgba(59, 130, 246, 0.3))",
                      "drop-shadow(0 25px 50px rgba(59, 130, 246, 0.3))",
                      "drop-shadow(0 8px 32px rgba(31, 38, 135, 0.37))",
                    ],
                  ),
                }}
              >
                {/* Glassmorphism gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#007B9490] text-white shadow shadow-primary/10 transition-all duration-500">
                      <Target className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-primary dark:text-white">Sứ mệnh</h3>
                  </div>
                  <p>
                    Đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số, cung cấp các giải pháp linh hoạt, hiệu quả
                    và bền vững để tối ưu hóa hoạt động kinh doanh.
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
                <div className="flex items-center gap-4">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#007B9490] text-white shadow shadow-primary/10 transition-all duration-500">
                    <Building2 className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-primary dark:text-white">Lĩnh vực kinh doanh</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {businessAreas.map((area, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 p-3 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md hover:bg-white/15 hover:shadow-xl transition-all duration-300 cursor-pointer w-fit relative overflow-hidden"
                      variants={itemVariants}
                      initial={{ x: -40, scale: 0.8, rotateY: 45 }}
                      animate={isInView ? { x: 0, scale: 1, rotateY: 0 } : { x: -40, scale: 0.8, rotateY: 45 }}
                      transition={{ duration: 0.5, delay: index * 0.03 }}
                      style={{
                        x: businessAreaTransforms(index).x as any,
                        scale: businessAreaTransforms(index).scale as any,
                        filter: businessAreaTransforms(index).filter[scrollYProgress.get() as any],
                      }}
                    >
                      {/* Glassmorphism gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent rounded-full" />
                      <CheckCircle className="h-4 w-4 text-primary dark:text-white mt-0.5 flex-shrink-0 relative z-10" />
                      <span className="text-sm text-foreground relative z-10">{area}</span>
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
              className="inline-flex items-center gap-2 px-4 py-3 rounded-sm border backdrop-blur-sm border-primary bg-[#ffffff95] dark:bg-background text-primary"
              variants={itemVariants}
            >
              <Sparkle className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Đội ngũ linh hoạt • Dịch vụ đa ngành • Giải pháp bền vững
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    )
  }
