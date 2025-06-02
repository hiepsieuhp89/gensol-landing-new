"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Target, Eye, Building2, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="ve-chung-toi" className="w-full py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-background" />
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-primary/5 to-blue-400/5 blur-3xl" />
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
              Về chúng tôi
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
              Công ty{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                GENSOL
              </span>
            </h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
              Được thành lập với sứ mệnh cung cấp giải pháp công nghệ và nhân sự toàn diện 
              cho các doanh nghiệp Việt Nam, giúp họ phát triển bền vững trong kỷ nguyên số.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-start mb-16">
          {/* Vision & Mission */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="group relative overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm p-6"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Tầm nhìn</h3>
                <p className="text-muted-foreground">
                  Trở thành đối tác tin cậy hàng đầu trong việc cung cấp giải pháp công nghệ, 
                  nhân sự và logistics toàn diện cho các doanh nghiệp tại Việt Nam.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="group relative overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm p-6"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-400/10">
                  <Target className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="mb-3 text-xl font-bold">Sứ mệnh</h3>
                <p className="text-muted-foreground">
                  Đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số, cung cấp các giải pháp 
                  linh hoạt, hiệu quả và bền vững để tối ưu hóa hoạt động kinh doanh.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Business Areas */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-4 text-xl font-bold">Lĩnh vực kinh doanh</h3>
              <div className="grid gap-3">
                {businessAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/50 hover:border-primary/30 transition-colors"
                    variants={itemVariants}
                  >
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{area}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Company Values */}
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div
            className="inline-flex items-center gap-4 px-6 py-3 rounded-full border bg-background/50 backdrop-blur-sm"
            variants={itemVariants}
          >
            <span className="text-sm font-medium text-muted-foreground">
              Đội ngũ linh hoạt • Dịch vụ đa ngành • Giải pháp bền vững
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
