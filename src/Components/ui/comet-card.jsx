import { cn } from "@/lib/utils"

export function CometCard({ children, className }) {
  return (
    <div
      className={cn(
        "relative rounded-[20px] border border-green-500/30 bg-white/5 p-1 shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-green-500/20",
        className
      )}
    >
      {children}
    </div>
  )
}
