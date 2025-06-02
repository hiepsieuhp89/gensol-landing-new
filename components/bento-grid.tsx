'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Code, FileText, Layers, Palette, Zap } from 'lucide-react';
 
interface BentoGridItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  features?: string[];
}
 
const BentoGridItem = ({
  title,
  description,
  icon,
  className,
  size = 'small',
  features = [],
}: BentoGridItemProps) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 25 } },
  };
 
  return (
    <motion.div
      variants={variants}
      className={cn(
        'group relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-xl border-2 border-[#E2E8F0] dark:border-[#1E293B] bg-background px-6 pb-10 pt-6 shadow-md transition-all duration-500 hover:border-primary',
        className,
      )}
    >
      <div className="absolute -right-1/2 top-0 z-0 size-full cursor-pointer bg-[linear-gradient(to_right,#3d16165e_1px,transparent_1px),linear-gradient(to_bottom,#3d16165e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
 
      <div className="absolute bottom-3 right-1 scale-[6] text-[#E2E8F0] dark:text-[#1E293B] transition-all duration-700 group-hover:scale-[6.2] group-hover:text-[#E2E8F0] dark:group-hover:text-[#1E293B]">
        {icon}
      </div>
 
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#007B9490] text-white shadow shadow-primary/10 transition-all duration-500">
            {icon}
          </div>
          <h3 className="mb-2 text-xl font-semibold tracking-tight">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          
          {features.length > 0 && (
            <div className="grid grid-cols-2 gap-2 mb-4">
              {features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="flex items-center gap-2 text-sm"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mt-4 flex items-center text-sm text-primary">
          <span className="mr-1">Tìm hiểu thêm</span>
          <ArrowRight className="size-4 transition-all duration-500 group-hover:translate-x-2" />
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