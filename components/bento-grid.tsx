'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Code, FileText, Layers, Palette, Zap } from 'lucide-react';
import { useTranslation } from '@/contexts/translation-context';
 
interface BentoGridItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  features?: string[];
  imageUrl?: string;
  index?: number;
}
 
const BentoGridItem = ({
  title,
  description,
  icon,
  className,
  size = 'small',
  features = [],
  imageUrl = '/images/caro1.png',
  index = 0,
}: BentoGridItemProps) => {
  const { t } = useTranslation()
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 25 } },
  };

  const brandLogos = Array.from({ length: 7 }, (_, i) => `/images/logo${i + 1}.png`);
 
  return (
    <motion.div
      variants={variants}
      className={cn(
        'group relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-xl border-2 border-[#1E293B] bg-[#020B1A] px-4 pb-10 pt-4 shadow-md transition-all duration-500 hover:border-primary',
        className,
      )}
    >
      <div className="absolute inset-0 z-0 overflow-hidden cursor-pointer">
        <img 
          src={imageUrl} 
          alt="Background pattern" 
          className="w-full h-full object-cover opacity-70 [mask-image:radial-gradient(ellipse_80%_60%_at_60%_0%,#000_60%,transparent_100%)]"
        />
      </div>
 
      <div className="absolute bottom-3 right-1 scale-[6]  text-[#1E293B] transition-all duration-700 group-hover:scale-[6.2] group-hover:text-[#1E293B]">
        {icon}
      </div>
 
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#007B9490] text-white shadow shadow-primary/10 transition-all duration-500">
            {icon}
          </div>
          <h3 className="mt-20 mb-2 text-xl font-bold tracking-tight text-white">{title}</h3>
          <p className="text-base mb-4 text-white/80">{description}</p>
          
          {features.length > 0 && (
            <div className="grid grid-cols-2 gap-2">
              {features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="flex items-center gap-2 text-sm"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className=" text-white/80">{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-primary blur-2xl transition-all duration-500 group-hover:blur-lg" />
    </motion.div>
  );
};
 
interface BentoGridProps {
  items: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
    size: 'small' | 'medium' | 'large';
    features?: string[];
    imageUrl?: string;
  }>;
  columns?: 2 | 4 | 6;
}

export default function BentoGrid({ items, columns = 6 }: BentoGridProps) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  // Determine grid classes based on columns prop
  const getGridClasses = () => {
    switch (columns) {
      case 2:
        return "grid grid-cols-1 gap-4 md:grid-cols-2";
      case 4:
        return "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4";
      case 6:
      default:
        return "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6";
    }
  };

  // Determine item span classes based on columns and size
  const getItemClasses = (size: 'small' | 'medium' | 'large') => {
    if (columns === 2) {
      // For 2-column layout, all items span 1 column
      return 'col-span-1';
    } else if (columns === 4) {
      // For 4-column layout
      switch (size) {
        case 'large':
          return 'col-span-2';
        case 'medium':
        case 'small':
        default:
          return 'col-span-1';
      }
    } else {
      // For 6-column layout (original)
      switch (size) {
        case 'large':
          return 'col-span-4';
        case 'medium':
          return 'col-span-3';
        case 'small':
        default:
          return 'col-span-2';
      }
    }
  };
 
  return (
    <div className="mx-auto max-w-6xl">
      <motion.div
        className={getGridClasses()}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            icon={item.icon}
            size={item.size}
            features={item.features}
            imageUrl={item.imageUrl}
            index={i}
            className={cn(
              getItemClasses(item.size),
              'h-full',
            )}
          />
        ))}
      </motion.div>
    </div>
  );
} 