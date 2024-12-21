import PortfolioCard from "../components/portfolio/PortfolioCard";
import PortfolioList from "../components/portfolio/PortfolioList";

export default function Portfolio() {
  return (
    <div>
      <PortfolioCard
        project={{
          title: "Example Project",
          description: "Project description",
          href: "https://example.com",
        }}
        index={0}
      />
      <PortfolioList />
    </div>
  );
}
