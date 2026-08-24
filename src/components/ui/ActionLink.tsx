import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ActionLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
  className?: string;
  icon?: ReactNode;
  onClick?: () => void;
  target?: "_blank" | "_self";
  rel?: string;
}

export function ActionLink({
  href,
  children,
  variant = "primary",
  className,
  icon,
  onClick,
  target,
  rel,
}: ActionLinkProps) {
  return (
    <a className={cn("action-link", `action-link--${variant}`, className)} href={href} onClick={onClick} target={target} rel={rel}>
      <span>{children}</span>
      <span className="action-link__icon" aria-hidden="true">
        {icon ?? <ArrowUpRight size={18} strokeWidth={1.8} />}
      </span>
    </a>
  );
}
