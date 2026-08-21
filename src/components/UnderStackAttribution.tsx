type UnderStackAttributionProps = {
  enabled?: boolean;
  className?: string;
};

export default function UnderStackAttribution({ enabled = true, className = "" }: UnderStackAttributionProps) {
  if (!enabled) {
    return null;
  }

  return (
    <a
      href="https://understack.dk"
      rel="noopener noreferrer"
      className={`inline-flex text-xs text-slate-500 transition hover:text-slate-300 ${className}`}
    >
      Developed by UnderStack
    </a>
  );
}
