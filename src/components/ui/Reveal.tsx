import type { PropsWithChildren } from "react";
import { useReveal } from "../../hooks/useReveal";
import { cn } from "../../utils/cn";

type Props = PropsWithChildren<{
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "span";
}>;

export default function Reveal({ children, className, delay = 0, as = "div" }: Props) {
  const ref = useReveal<HTMLDivElement>();
  const Tag = as as any;

  return (
    <Tag ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}
