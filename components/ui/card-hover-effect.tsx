"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    logo?: React.ReactNode; // Accept logo
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 px-8 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10", className)}>
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 block rounded-3xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <Card logo={item.logo}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  logo,
}: {
  className?: string;
  children: React.ReactNode;
  logo?: React.ReactNode; // Accepts a logo component
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden border border-transparent group-hover:border-slate-200 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">
          {logo && <CardLogo>{logo}</CardLogo>} {/* Render logo above title */}
          {children}
        </div>
      </div>
    </div>
  );
};

export const CardLogo = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={cn("mb-2 flex items-center", className)}>{children}</div>;
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <h4 className={cn("text-black font-bold tracking-wide mt-4", className)}>{children}</h4>;
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <p className={cn("mt-8 text-zinc-600 tracking-wide leading-relaxed text-sm", className)}>{children}</p>;
};
