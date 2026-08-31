import { LanguageProvider } from "@/context/LanguageContext";
import Nav from "@/components/Nav";
import PortfolioContent from "@/components/PortfolioContent";

export default function Home() {
  return (
    <LanguageProvider>
      <Nav />
      <main className="flex-1">
        <PortfolioContent />
      </main>
    </LanguageProvider>
  );
}
