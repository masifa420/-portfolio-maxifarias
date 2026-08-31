interface FooterProps {
  name: string;
  role: string;
  location: string;
}

export default function Footer({ name, role, location }: FooterProps) {
  return (
    <footer className="border-t border-border">
      <div className="w-full px-5 sm:px-10 py-7 flex justify-between items-center flex-wrap gap-3">
        <span className="font-display text-[0.95rem] text-text-2">{name}</span>
        <span className="font-mono text-[0.68rem] text-text-2 opacity-50 tracking-[0.04em]">
          {role} · {location}
        </span>
      </div>
    </footer>
  );
}
