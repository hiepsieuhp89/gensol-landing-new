"use client"

import { useRef } from "react"
import { useInView, useScroll, useTransform, useSpring } from "framer-motion"
import { Users, TrendingUp, Settings, Shield, Clock, Award } from "lucide-react"
import { motion } from "framer-motion"

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothProgress = useSpring(scrollYProgress, springConfig);
  const y = useTransform(smoothProgress, [0, 0.5, 1], [100, 0, -100])
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.9, 1, 1, 0.9])

  const reasons = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Đội ngũ linh hoạt, đa lĩnh vực",
      description: "Chúng tôi có đội ngũ chuyên gia đa dạng, có thể đáp ứng nhiều nhu cầu khác nhau của doanh nghiệp từ công nghệ đến nhân sự.",
      features: ["Chuyên gia IT", "Nhân sự logistics", "Tư vấn quản lý", "Kỹ thuật viên"]
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Sẵn sàng mở rộng quy mô",
      description: "Khả năng mở rộng linh hoạt theo dự án, đảm bảo đáp ứng mọi yêu cầu từ nhỏ đến lớn của khách hàng.",
      features: ["Mở rộng nhanh", "Tài nguyên linh hoạt", "Quản lý hiệu quả", "Theo dõi tiến độ"]
    },
    {
      icon: <Settings className="h-8 w-8 text-primary" />,
      title: "Dịch vụ đa ngành",
      description: "Một điểm đến cho mọi nhu cầu - từ phát triển phần mềm, thiết bị IT đến nhân sự và logistics.",
      features: ["Công nghệ", "Thiết bị", "Nhân sự", "Vận tải"]
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Phù hợp SME",
      description: "Đặc biệt thiết kế cho các doanh nghiệp vừa và nhỏ với giải pháp tối ưu chi phí và hiệu quả cao.",
      features: ["Chi phí hợp lý", "Giải pháp tùy chỉnh", "Hỗ trợ 24/7", "Tư vấn miễn phí"]
    }
  ]

  const stats = [
    { number: "100%", label: "Cam kết chất lượng" },
    { number: "24/7", label: "Hỗ trợ khách hàng" },
    { number: "50+", label: "Dự án thành công" },
    { number: "5+", label: "Năm kinh nghiệm" }
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
    hidden: { y: 40, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      },
    },
  }

  return (
    <motion.section 
      id="ly-do-chon" 
      ref={ref}
      className="w-full py-12 md:py-16 relative overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
        <motion.div 
          className="absolute top-1/3 left-1/3 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-primary/5 to-blue-400/5 blur-3xl"
          style={{
            scale: useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.3, 0.8]),
            x: useTransform(smoothProgress, [0, 1], [0, -100]),
            y: useTransform(smoothProgress, [0, 1], [0, 50]),
          }}
          initial={{ rotate: 0 }}
          animate={{ rotate: 180 }}
          transition={{ duration: 2 }}
        />
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <motion.div
            className="space-y-2"
            style={{ scale }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
              initial={{ scale: 0, rotate: 180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 180 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Lý do chọn chúng tôi
            </motion.div>
            <motion.h2 
              className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Tại sao chọn{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                GENSOL?
              </span>
            </motion.h2>
            <motion.p 
              className="max-w-[800px] mx-auto text-muted-foreground md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Chúng tôi mang đến những giá trị vượt trội và cam kết đồng hành lâu dài 
              với sự phát triển của doanh nghiệp bạn.
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm p-8 transition-all hover:shadow-lg hover:shadow-primary/5"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -10,
                transition: { duration: 0.3 }
              }}
              style={{
                y: useTransform(smoothProgress, [0, 0.5, 1], [60, 0, -60]),
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              />

              <div className="relative z-10">
                <motion.div 
                  className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {reason.icon}
                </motion.div>
                
                <h3 className="mb-4 text-2xl font-bold">{reason.title}</h3>
                <p className="mb-6 text-muted-foreground leading-relaxed">{reason.description}</p>
                
                <div className="grid grid-cols-2 gap-3">
                  {reason.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.05 }}
                    >
                      <motion.div 
                        className="h-1.5 w-1.5 rounded-full bg-primary"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.05 + 0.2 }}
                      />
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-blue-400"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm p-6"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              style={{
                y: useTransform(smoothProgress, [0, 0.5, 1], [30, 0, -30]),
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <motion.div 
                  className="text-sm text-muted-foreground font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                >
                  {stat.label}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border bg-background/50 backdrop-blur-sm"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            style={{
              y: useTransform(smoothProgress, [0, 0.5, 1], [20, 0, -20]),
            }}
          >
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Đối tác tin cậy cho sự phát triển bền vững
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
