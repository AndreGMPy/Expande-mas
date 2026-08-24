export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const motionConfig = {
  fast: { duration: 0.25 },
  normal: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  slow: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
};
