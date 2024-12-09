import { SocialIcons } from "./components/homepage/SocialIcons.tsx";
import {
  PurpleShape,
  YellowShape,
  BlueShape,
  GreenShape,
} from "./components/homepage/AnimatedShapes";
import PortfolioCard from "./components/portfolio/PortfolioCard";
import PortfolioList from "./components/portfolio/PortfolioList";

export default function App() {
  return (
    <div>
      <div className="relative h-screen w-full bg-white overflow-hidden p-4">
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <PurpleShape />
        <YellowShape />
        <BlueShape />
        <GreenShape />
        <SocialIcons />
      </div>

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
    </div>
  );
}
