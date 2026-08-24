import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "section-heading",
        align === "center" && "section-heading--center",
        light && "section-heading--light",
      )}
    >
      <span className="eyebrow"><i aria-hidden="true" />{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </Reveal>
  );
}
