"use client"

import { useRef } from "react"
import { Users, TrendingUp, Settings, Shield, Clock, Award, Sparkle } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"
import BentoGrid from "./bento-grid"

export default function WhyChooseUs() {
  const ref = useRef(null)
  const { t } = useTranslation()

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
      description: t("Một điểm đến cho mọi nhu cầu - từ phát triển phần mềm, thiết bị IT đến nhân sự & logistics."),
      features: [t("Công nghệ"), t("Thiết bị"), t("Nhân sự"), t("Vận tải")],
      size: "medium" as const,
      imageUrl: "/images/caro3.png"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: t("Phù hợp SME"),
      description: t("Đặc biệt thiết kế cho các doanh nghiệp vừa & nhỏ với giải pháp tối ưu chi phí & hiệu quả cao."),
      features: [t("Chi phí hợp lý"), t("Giải pháp tùy chỉnh"), t("Hỗ trợ 24/7"), t("Tư vấn miễn phí")],
      size: "large" as const,
      imageUrl: "/images/caro4.png"
    }
  ]

  return (
    <section
    style={{
      backgroundImage: "url('/images/polygon-luminary.svg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
      id="ly-do-chon"
      ref={ref}
      className="w-full py-12 md:py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-primary/5 to-blue-400/5 blur-3xl" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="space-y-4">
            <div className="rounded-full bg-gradient-to-r from-primary to-blue-400 text-white px-4 py-1.5 text-sm font-medium text-primary flex items-center w-fit gap-1 mx-auto mb-4">
              <Sparkle className="h-4 w-4 text-white" />
              {t("Lý do chọn chúng tôi")}
            </div>

            <h2 className="text-3xl text-white font-bold tracking-tighter md:text-4xl/tight lg:text-5xl">
              {t("Tại sao chọn")}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
                GENSOL?
              </span>
            </h2>
            <p className="max-w-[840px] mx-auto text-white/80 md:text-xl">
              {t("Chúng tôi mang đến những giá trị vượt trội & cam kết đồng hành lâu dài với sự phát triển của doanh nghiệp bạn.")}
            </p>
          </div>
        </div>

        <div className="mb-16">
          <BentoGrid items={reasons} columns={2} />
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-3 rounded-[4px] border backdrop-blur-sm border-primary bg-[#020B1A] text-primary">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              {t("Đối tác tin cậy cho sự phát triển bền vững")}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
