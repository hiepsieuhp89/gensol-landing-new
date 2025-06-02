"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Code, Laptop, Users, Truck, Settings, Smartphone } from "lucide-react"
import { motion } from "framer-motion"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Công nghệ - Phần mềm",
      description: "Phát triển phần mềm tùy chỉnh, lập trình máy tính, tư vấn IT và thiết kế UI/UX chuyên nghiệp.",
    },
    {
      icon: <Laptop className="h-6 w-6 text-primary" />,
      title: "Thiết bị & Dịch vụ",
      description: "Bán buôn máy tính, linh kiện điện tử, sửa chữa thiết bị và các dịch vụ công nghệ liên quan.",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Nhân sự & Tư vấn",
      description: "Cung ứng lao động, nhân lực IT, tư vấn quản lý nội bộ và các dịch vụ nhân sự chuyên nghiệp.",
    },
    {
      icon: <Truck className="h-6 w-6 text-primary" />,
      title: "Logistics & Vận tải",
      description: "Dịch vụ cho thuê xe, vận tải hành khách và các giải pháp logistics linh hoạt theo nhu cầu.",
    },
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
    <section id="linh-vuc" className="w-full py-20 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-primary/5 to-blue-400/5 blur-3xl" />
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
              Lĩnh vực hoạt động
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
              Giải pháp đa ngành{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                cho doanh nghiệp
              </span>
            </h2>
            <p className="max-w-[800px] mx-auto text-muted-foreground md:text-lg">
              GENSOL cung cấp các dịch vụ đa dạng từ công nghệ thông tin, thiết bị, nhân sự đến logistics, 
              phù hợp cho các doanh nghiệp vừa và nhỏ.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl border bg-background/50 backdrop-blur-sm p-6 transition-all hover:shadow-md hover:shadow-primary/5 hover:border-primary/50"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-blue-400 group-hover:w-full transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
