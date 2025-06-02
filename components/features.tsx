"use client"

import { useRef } from "react"
import { useInView, useScroll, useTransform, useSpring } from "framer-motion"
import { Code, Laptop, Users, Truck, Settings, Smartphone } from "lucide-react"
import { motion } from "framer-motion"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Smooth spring animations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // Creative transform values with proper reverse animations
  const sectionY = useTransform(smoothProgress, [0, 0.5, 1], [150, 0, -150]);
  const sectionOpacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const sectionScale = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  // Header animations
  const headerY = useTransform(smoothProgress, [0, 0.6], [100, -50]);
  const headerOpacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const headerScale = useTransform(smoothProgress, [0, 0.4, 0.6, 1], [0.9, 1, 1, 0.9]);

  // Background animations
  const bgRotate = useTransform(smoothProgress, [0, 1], [0, 360]);
  const bgScale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.4, 0.6]);
  const bgOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.3, 0.8, 0.2]);

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
      delay: 0.2
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
      y: 80, 
      scale: 0.8,
      rotateX: -45
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      },
    },
  }

  return (
    <motion.section 
      id="linh-vuc" 
      ref={ref}
      className="w-full py-12 md:py-16 relative overflow-hidden"
      style={{ y: sectionY, opacity: sectionOpacity, scale: sectionScale }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/50" />
        
        {/* Animated background orb */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-primary/5 to-blue-400/5 blur-3xl"
          style={{
            scale: bgScale,
            rotate: bgRotate,
            opacity: bgOpacity,
          }}
        />

        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-primary/20 rounded-full"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            initial={{ opacity: 0.3, scale: 0.8 }}
            animate={{ opacity: 0.8, scale: 1.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          />
        ))}

        {/* Static wave effect */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/5 to-transparent"
          initial={{ scaleX: 1, scaleY: 1 }}
          animate={{ scaleX: 1.1, scaleY: 0.8 }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="container px-4 md:px-6">
        {/* Header Section */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-16"
          style={{ y: headerY, opacity: headerOpacity, scale: headerScale }}
        >
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
              initial={{ scale: 0, rotateZ: -180 }}
              animate={isInView ? { scale: 1, rotateZ: 0 } : { scale: 0, rotateZ: -180 }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              whileHover={{ scale: 1.1, rotateZ: 5 }}
            >
              Lĩnh vực hoạt động
            </motion.div>
            
            <motion.h2 
              className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl"
              initial={{ opacity: 0, y: 30, rotateX: -30 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 30, rotateX: -30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {"Giải pháp đa ngành ".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.03 }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              <motion.span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.05 }}
              >
                cho doanh nghiệp
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="max-w-[800px] mx-auto text-muted-foreground md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              GENSOL cung cấp các dịch vụ đa dạng từ công nghệ thông tin, thiết bị, nhân sự đến logistics, 
              phù hợp cho các doanh nghiệp vừa và nhỏ.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm p-6 transition-all cursor-pointer"
              variants={itemVariants}
              style={{
                y: useTransform(smoothProgress, [0, 0.5, 1], [60, 0, -60]),
              }}
              whileHover={{ 
                scale: 1.08,
                y: -15,
                rotateY: 5,
                rotateX: 5,
                transition: { 
                  duration: 0.3,
                  type: "spring",
                  stiffness: 300
                }
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated background gradient */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                initial={{ scale: 0, rotate: 180 }}
                whileHover={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5 }}
              />

              {/* Static border effect */}
              <motion.div
                className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-primary/50"
                initial={{ borderRadius: "12px" }}
                whileHover={{ borderRadius: "20px" }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10">
                {/* Icon with hover animations only */}
                <motion.div 
                  className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.2,
                    transition: { duration: 0.6 }
                  }}
                >
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))",
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                </motion.div>

                {/* Title with typewriter effect */}
                <motion.h3 
                  className="mb-2 text-xl font-bold"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  {feature.title.split("").map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: 0.7 + index * 0.1 + charIndex * 0.02 
                      }}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.h3>

                {/* Description with slide-in effect */}
                <motion.p 
                  className="text-muted-foreground"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                >
                  {feature.description}
                </motion.p>
              </div>

              {/* Progress bar with wave effect */}
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-blue-400"
                initial={{ width: 0, scaleY: 1 }}
                whileInView={{ 
                  width: "100%",
                  scaleY: [1, 1.5, 1],
                }}
                transition={{ 
                  width: { duration: 0.8, delay: index * 0.1 },
                  scaleY: { duration: 0.5, delay: index * 0.1 + 0.8 }
                }}
              />

              {/* Static particles on hover */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(3)].map((_, particleIndex) => (
                  <motion.div
                    key={particleIndex}
                    className="absolute w-1 h-1 bg-primary/60 rounded-full"
                    style={{
                      left: `${20 + particleIndex * 30}%`,
                      top: `${30 + particleIndex * 20}%`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{
                      opacity: 1,
                      scale: 1,
                      y: -20,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: particleIndex * 0.1,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div
            className="flex items-center gap-2 px-6 py-3 rounded-full border bg-background/50 backdrop-blur-sm"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Settings className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Giải pháp tích hợp toàn diện
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
