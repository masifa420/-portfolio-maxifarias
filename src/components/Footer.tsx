interface FooterProps {
  name: string;
  role: string;
}

export default function Footer({ name, role }: FooterProps) {
  return (
    <footer data-testid="footer" className="border-t border-border">
      <div className="w-full px-5 sm:px-10 py-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-3 items-center text-center sm:text-left">
        <span data-testid="footerName" className="font-display text-[0.95rem] text-text-2">{name}</span>
        <span data-testid="footerRole" className="font-mono text-[0.68rem] text-text-2 opacity-50 tracking-[0.04em]">
          {role}
        </span>
      </div>
    </footer>
  );
}
