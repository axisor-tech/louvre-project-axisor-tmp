'use client'
import { memo } from "react";
import { cn } from "@/shared/lib/utils";

export const BentoGrid = memo(
  ({
    className,
    children,
  }: {
    className?: string;
    children?: React.ReactNode;
  }) => {
    return (
      <div
        className={cn(
          "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3",
          className
        )}
      >
        {children}
      </div>
    );
  }
);

BentoGrid.displayName = "BentoGrid";

export const BentoGridItem = memo(
  ({
    className,
    title,
    description,
    header,
    icon,
  }: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
  }) => {
    return (
      <div
        className={cn(
          "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-3 rounded-xl border bg-card p-4 transition duration-200 hover:shadow-xl dark:shadow-none",
          className
        )}
      >
        {header}
        <div className="transition duration-200 group-hover/bento:translate-x-1">
          {icon}
          <div className="mt-2 mb-1 font-sans font-bold text-foreground">
            {title}
          </div>
          <div className="font-sans text-xs font-normal text-muted">
            {description}
          </div>
        </div>
      </div>
    );
  }
);

BentoGridItem.displayName = "BentoGridItem";
