type BlueDivProps = {
  children: React.ReactNode;
  className?: string;
};

export default function BlurDiv({ children, className }: BlueDivProps) {
  return (
    <div
      className={`border border-white/10
              relative backdrop-blur-md overflow-hidden
              shadow-[inset_1px_1px_1px_rgba(255,255,255,0.25),inset_-1px_-1px_5px_rgba(0,0,0,0.3)] ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </div>
  );
}
