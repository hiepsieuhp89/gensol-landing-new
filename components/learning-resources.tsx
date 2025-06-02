"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Users, TrendingUp, Settings, Shield, Clock, Award } from "lucide-react"
import { motion } from "framer-motion"

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="ly-do-chon" className="w-full py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
        <div className="absolute top-1/3 left-1/3 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-primary/5 to-blue-400/5 blur-3xl" />
      </div>

      <div className="container px-4 md:px-6" ref={ref}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Lý do chọn chúng tôi
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
              Tại sao chọn{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                GENSOL?
              </span>
            </h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
              Chúng tôi mang đến những giá trị vượt trội và cam kết đồng hành lâu dài 
              với sự phát triển của doanh nghiệp bạn.
            </p>
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
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  {reason.icon}
                </div>
                
                <h3 className="mb-4 text-2xl font-bold">{reason.title}</h3>
                <p className="mb-6 text-muted-foreground leading-relaxed">{reason.description}</p>
                
                <div className="grid grid-cols-2 gap-3">
                  {reason.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-blue-400 group-hover:w-full transition-all duration-500" />
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
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border bg-background/50 backdrop-blur-sm">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Đối tác tin cậy cho sự phát triển bền vững
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
