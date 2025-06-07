"use client"

import { useRef } from "react"
import { useInView, useScroll, useTransform } from "framer-motion"
import { Users, TrendingUp, Settings, Shield, Clock, Award, Sparkle } from "lucide-react"
import { motion } from "framer-motion"
import { useTranslation } from "@/contexts/translation-context"
import BentoGrid from "./bento-grid"

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useTranslation()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Enhanced scroll-based transforms for why choose us section
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.85, 1, 1, 0.9])
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [12, 0, -8])

  // Stats section animations
  const statsY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [120, 0, 0, -80])
  const statsScale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.7, 1.1, 1.1, 0.8])

  const reasons = [
    {
      icon: <Users className="h-6 w-6" />,
      title: t("Đội ngũ linh hoạt, đa lĩnh vực"),
      description: t("Chúng tôi có đội ngũ chuyên gia đa dạng, có thể đáp ứng nhiều nhu cầu khác nhau của doanh nghiệp từ công nghệ đến nhân sự."),
      features: [t("Chuyên gia IT"), t("Tư vấn thiết kế"), t("Tư vấn quản lý"), t("Kỹ thuật viên")],
      size: "large" as const,
      imageUrl: "/images/caro1.png"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: t("Tín nhiệm - hợp tác chiến lược lâu dài"),
      description: t("Khả năng mở rộng linh hoạt theo dự án, đảm bảo đáp ứng mọi yêu cầu từ nhỏ đến lớn của khách hàng."),
      features: [t("Mở rộng nhanh"), t("Tài nguyên linh hoạt"), t("Quản lý hiệu quả"), t("Theo dõi tiến độ")],
      size: "medium" as const,
      imageUrl: "/images/caro2.png"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: t("Dịch vụ đa ngành"),
      description: t("Một điểm đến cho mọi nhu cầu - từ phát triển phần mềm, thiết bị IT đến nhân sự và logistics."),
      features: [t("Công nghệ"), t("Thiết bị"), t("Nhân sự"), t("Vận tải")],
      size: "medium" as const,
      imageUrl: "/images/caro3.png"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: t("Phù hợp SME"),
      description: t("Đặc biệt thiết kế cho các doanh nghiệp vừa và nhỏ với giải pháp tối ưu chi phí và hiệu quả cao."),
      features: [t("Chi phí hợp lý"), t("Giải pháp tùy chỉnh"), t("Hỗ trợ 24/7"), t("Tư vấn miễn phí")],
      size: "large" as const,
      imageUrl: "/images/caro4.png"
    }
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
    hidden: { y: 40, opacity: 0 },
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
      id="ly-do-chon"
      ref={ref}
      className="w-full py-12 md:pb-16 md:pt-0 relative overflow-hidden"
      style={{ y, opacity, scale, rotateX, perspective: 1000 }}
    >
      {/* Enhanced Background Elements with scroll effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.6])
          }}
        />
        <motion.div
          className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-primary/5 to-blue-400/5 blur-3xl"
          style={{
            x: useTransform(scrollYProgress, [0, 0.5, 1], [0, -150, 100]),
            y: useTransform(scrollYProgress, [0, 0.5, 1], [0, 100, -80]),
            scale: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1.4, 1.2, 0.8]),
            rotate: useTransform(scrollYProgress, [0, 1], [0, 270])
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
              className="rounded-full bg-gradient-to-r from-primary to-blue-400 text-white px-4 py-1.5 text-sm font-medium text-primary flex items-center w-fit gap-1 mx-auto"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Sparkle className="h-4 w-4 text-white" />
              {t("Lý do chọn chúng tôi")}
            </motion.div>

            <motion.h2
              className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {t("Tại sao chọn")}{" "}
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
              {t("Chúng tôi mang đến những giá trị vượt trội và cam kết đồng hành lâu dài với sự phát triển của doanh nghiệp bạn.")}
            </motion.p>
          </motion.div>
        </div>

        {/* BentoGrid for Reasons */}
        <div className="mb-16">
          <BentoGrid items={reasons} columns={2} />
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
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              {t("Đối tác tin cậy cho sự phát triển bền vững")}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
