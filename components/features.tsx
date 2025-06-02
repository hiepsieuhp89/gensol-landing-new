"use client"

import { useRef } from "react"
import { useInView, useScroll, useTransform } from "framer-motion"
import { Code, Laptop, Users, Truck, Settings, Smartphone } from "lucide-react"
import { motion } from "framer-motion"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Enhanced scroll-based transforms for features section
  const sectionY = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const sectionScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.9]);
  const sectionRotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);

  // Grid container animations
  const gridY = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [80, 0, 0, -60]);
  const gridRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 3]);

  const features = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Công nghệ - Phần mềm",
      description: "Phát triển phần mềm tùy chỉnh, lập trình máy tính, tư vấn IT và thiết kế UI/UX chuyên nghiệp.",
      color: "from-blue-500/20 to-cyan-500/20",
      delay: 0
    },
    {
      icon: <Laptop className="h-6 w-6 text-primary" />,
      title: "Thiết bị & Dịch vụ",
      description: "Bán buôn máy tính, linh kiện điện tử, sửa chữa thiết bị và các dịch vụ công nghệ liên quan.",
      color: "from-green-500/20 to-emerald-500/20",
      delay: 0.1
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Nhân sự & Tư vấn",
      description: "Cung ứng lao động, nhân lực IT, tư vấn quản lý nội bộ và các dịch vụ nhân sự chuyên nghiệp.",
      color: "from-purple-500/20 to-pink-500/20",
      delay: 0.1
    },
    {
      icon: <Truck className="h-6 w-6 text-primary" />,
      title: "Logistics & Vận tải",
      description: "Dịch vụ cho thuê xe, vận tải hành khách và các giải pháp logistics linh hoạt theo nhu cầu.",
      color: "from-orange-500/20 to-red-500/20",
      delay: 0.3
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      },
    },
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40, 
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      },
    },
  }

  return (
    <motion.section 
      id="linh-vuc" 
      ref={ref}
      className="w-full py-12 md:py-16 relative overflow-hidden"
      style={{ 
        y: sectionY, 
        opacity: sectionOpacity, 
        scale: sectionScale, 
        rotateX: sectionRotateX,
        perspective: 1000 
      }}
    >
      {/* Enhanced Background Elements with scroll effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/50"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.3])
          }}
        />
        
        {/* Dynamic background orb with complex movement */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-primary/5 to-blue-400/5 blur-3xl"
          style={{
            x: useTransform(scrollYProgress, [0, 0.5, 1], [0, 100, -50]),
            y: useTransform(scrollYProgress, [0, 0.5, 1], [0, -80, 40]),
            scale: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1.5, 1.2, 0.8]),
            rotate: useTransform(scrollYProgress, [0, 1], [0, 180])
          }}
        />
      </div>

      <div className="container px-4 md:px-6">
        {/* Header Section */}
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
              Lĩnh vực hoạt động
            </motion.div>
            
            <motion.h2 
              className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Giải pháp đa ngành{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                cho doanh nghiệp
              </span>
            </motion.h2>
            
            <motion.p 
              className="max-w-[800px] mx-auto text-muted-foreground md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              GENSOL cung cấp các dịch vụ đa dạng từ công nghệ thông tin, thiết bị, nhân sự đến logistics, 
              phù hợp cho các doanh nghiệp vừa và nhỏ.
            </motion.p>
          </motion.div>
        </div>

        {/* Features Grid with enhanced animations */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ y: gridY, rotateZ: gridRotate }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm p-6 transition-all cursor-pointer hover:shadow-lg"
              variants={itemVariants}
              style={{
                // Individual card animations based on scroll
                x: useTransform(
                  scrollYProgress,
                  [0, 0.3, 0.7, 1],
                  [
                    index % 2 === 0 ? -50 : 50,
                    0,
                    0,
                    index % 2 === 0 ? 30 : -30
                  ]
                ),
                rotateY: useTransform(
                  scrollYProgress,
                  [0, 0.4, 0.6, 1],
                  [index % 2 === 0 ? -15 : 15, 0, 0, index % 2 === 0 ? 10 : -10]
                ),
                scale: useTransform(
                  scrollYProgress,
                  [0, 0.3, 0.7, 1],
                  [0.8, 1, 1, 0.9]
                ),
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
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              {/* Enhanced background gradient with scroll effects */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                style={{
                  opacity: useTransform(
                    scrollYProgress,
                    [0, 0.4, 0.6, 1],
                    [0, 0.1, 0.1, 0]
                  )
                }}
              />

              <div className="relative z-10">
                {/* Icon with complex animations */}
                <motion.div 
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#E2E8F0] dark:bg-[#1E293B] group-hover:bg-primary/20 transition-colors"
                >
                  {feature.icon}
                </motion.div>

                {/* Title with slide effect */}
                <motion.h3 
                  className="mb-2 text-xl font-bold"
                  style={{
                    x: useTransform(
                      scrollYProgress,
                      [0, 0.3, 0.7, 1],
                      [-20, 0, 0, 10]
                    ),
                    opacity: useTransform(
                      scrollYProgress,
                      [0, 0.2, 0.8, 1],
                      [0, 1, 1, 0.8]
                    )
                  }}
                >
                  {feature.title}
                </motion.h3>

                {/* Description with fade and slide */}
                <motion.p 
                  className="text-muted-foreground"
                  style={{
                    x: useTransform(
                      scrollYProgress,
                      [0, 0.3, 0.7, 1],
                      [20, 0, 0, -10]
                    ),
                    opacity: useTransform(
                      scrollYProgress,
                      [0, 0.25, 0.75, 1],
                      [0, 1, 1, 0.7]
                    )
                  }}
                >
                  {feature.description}
                </motion.p>
              </div>

              {/* Enhanced progress bar with wave effect */}
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-blue-400"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  scaleY: useTransform(
                    scrollYProgress,
                    [0, 0.4, 0.6, 1],
                    [1, 3, 3, 1]
                  ),
                  opacity: useTransform(
                    scrollYProgress,
                    [0, 0.3, 0.7, 1],
                    [0.5, 1, 1, 0.3]
                  )
                }}
              />

              {/* Additional decorative element */}
              <motion.div
                className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary"
                style={{
                  scale: useTransform(
                    scrollYProgress,
                    [0, 0.5, 1],
                    [0, 1, 2]
                  ),
                  opacity: useTransform(
                    scrollYProgress,
                    [0, 0.5, 1],
                    [0, 1, 0]
                  )
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decoration with enhanced animations */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div 
            className="flex items-center gap-2 px-6 py-3 rounded-full border bg-background/50 backdrop-blur-sm"
            style={{
              scale: useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.8, 1.2, 1.2, 0.9]),
              rotateZ: useTransform(scrollYProgress, [0, 0.5, 1], [-3, 0, 3]),
              y: useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -15])
            }}
          >
            <motion.div
              style={{
                rotate: useTransform(scrollYProgress, [0, 1], [0, 720]),
                scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 1])
              }}
            >
              <Settings className="h-4 w-4 text-primary" />
            </motion.div>
            <span className="text-sm font-medium text-muted-foreground">
              Giải pháp tích hợp toàn diện
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
