"use client";

import { useRef, useState, useEffect } from "react";
import { useInView, motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Container } from "@tsparticles/engine";
import {
  Target,
  Eye,
  Lightbulb,
  Heart,
  Shield,
  Zap,
  Sparkle,
  Users,
  Rocket,
  Award,
} from "lucide-react";
import { useTranslation } from "@/contexts/translation-context";
import { getParticlesConfig } from "@/lib/particles-config";

export default function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { t } = useTranslation();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [init, setInit] = useState(false);

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    // Check initial theme
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');

    // Create observer for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setTheme(isDark ? 'dark' : 'light');
        }
      });
    });

    // Start observing
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Cleanup
    return () => observer.disconnect();
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const particlesOptions = getParticlesConfig(theme);

  const coreValues = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: t("Đổi mới sáng tạo"),
      description: t(
        "Không ngừng tìm kiếm và ứng dụng những công nghệ tiên tiến nhất để mang lại giá trị vượt trội cho khách hàng."
      ),
      gradient: "from-amber-400 via-orange-400 to-amber-500",
      bgImage: "/images/innovation-bg.jpg",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: t("Tin cậy & Chất lượng"),
      description: t(
        "Cam kết cung cấp dịch vụ chất lượng cao với độ tin cậy tuyệt đối, xây dựng mối quan hệ bền vững."
      ),
      gradient: "from-emerald-400 via-teal-400 to-cyan-500",
      bgImage: "/images/trust-bg.jpg",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: t("Đồng hành phát triển"),
      description: t(
        "Luôn lắng nghe, thấu hiểu và đồng hành cùng khách hàng trong mọi giai đoạn phát triển doanh nghiệp."
      ),
      gradient: "from-blue-400 via-indigo-400 to-purple-500",
      bgImage: "/images/partnership-bg.jpg",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: t("Hiệu quả tối ưu"),
      description: t(
        "Tối ưu hóa quy trình, nâng cao hiệu suất và mang lại ROI cao nhất cho mọi giải pháp triển khai."
      ),
      gradient: "from-violet-400 via-purple-400 to-fuchsia-500",
      bgImage: "/images/efficiency-bg.jpg",
    },
  ];

  const achievements = [
    {
      number: "50+",
      label: t("Dự án thành công"),
      icon: <Award className="h-6 w-6" />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      number: "99%",
      label: t("Khách hàng hài lòng"),
      icon: <Heart className="h-6 w-6" />,
      gradient: "from-pink-500 to-rose-500",
    },
    {
      number: "24/7",
      label: t("Hỗ trợ kỹ thuật"),
      icon: <Zap className="h-6 w-6" />,
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section
      id="ve-chung-toi"
      ref={ref}
      className="w-full py-16 md:py-24 relative overflow-hidden"
    >
      {/* Animated Floating Particles */}
      {init && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={particlesOptions}
          />
        </div>
      )}

      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-6 text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">

            <h2 className="text-4xl font-bold tracking-tight md:text-5xl/tight lg:text-6xl">
              {t("Công ty")}{" "}
              <span className="relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-400 to-cyan-400">
                  GENSOL
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-400 to-cyan-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </span>
            </h2>
            <p className="max-w-4xl mx-auto text-muted-foreground md:text-xl leading-relaxed">
              {t(
                "Được thành lập với sứ mệnh cung cấp giải pháp công nghệ & nhân sự toàn diện cho các doanh nghiệp Việt Nam, giúp khách hàng phát triển bền vững trong kỷ nguyên số."
              )}
            </p>
          </div>
        </motion.div>

        {/* Vision & Mission with Hero Image */}
        <div className="flex gap-8 items-center mb-20">
          {/* Hero Image */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-blue-400/20 z-10" />
              <img
                src="/images/about.jpg"
                alt="AI Technology Innovation"
                className="w-auto max-h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent z-20" />
            </div>
          </motion.div>

          {/* Vision & Mission Cards */}
          <div className="space-y-8 order-1 lg:order-2 flex-1">
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-blue-400 text-white shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform duration-300">
                      <Eye className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {t("Tầm nhìn")}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {t(
                      "Trở thành đối tác tin cậy hàng đầu trong việc cung cấp giải pháp công nghệ & nhân sự toàn diện cho các doanh nghiệp tại Việt Nam, góp phần thúc đẩy chuyển đổi số quốc gia."
                    )}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-primary text-white shadow-lg shadow-blue-400/25 group-hover:scale-110 transition-transform duration-300">
                      <Target className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {t("Sứ mệnh")}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {t(
                      "Đồng hành cùng doanh nghiệp trong hành trình chuyển đổi số, cung cấp các giải pháp linh hoạt, hiệu quả & bền vững để tối ưu hóa hoạt động kinh doanh và nâng cao năng lực cạnh tranh."
                    )}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Core Values */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t("Giá trị cốt lõi")}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t(
                "Những giá trị định hướng mọi hoạt động của chúng tôi trong việc phục vụ khách hàng"
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-full overflow-hidden rounded-xl border border-border/50 bg-card/90 backdrop-blur-sm p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${value.gradient} text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative overflow-hidden rounded-xl border border-border/50 bg-card/90 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${achievement.gradient} text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {achievement.icon}
                    </div>
                    <div
                      className={`text-3xl font-bold bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent mb-2`}
                    >
                      {achievement.number}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {achievement.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/30 bg-gradient-to-r from-primary/10 via-primary/5 to-blue-400/10 backdrop-blur-sm text-primary shadow-lg shadow-primary/10">
              <Sparkle className="h-5 w-5" />
              <span className="font-semibold">
                {t(
                  "Đội ngũ chuyên nghiệp • Công nghệ tiên tiến • Dịch vụ tận tâm"
                )}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
