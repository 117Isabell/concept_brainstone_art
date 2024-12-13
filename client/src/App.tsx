import { SocialIcons } from "./components/homepage/SocialIcons.tsx";
import Portfolio from "./components/homepage/Portfolio";
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
      <div className="relative h-screen w-full bg-white overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <PurpleShape className="absolute -rotate-[45deg] top-[8%] left-[2%] w-[50vw] h-[50vh] transform scale-150 z-10" />
          <GreenShape className="absolute top-[70%] left-[60%] w-[40vw] h-[40vh] transform -translate-x-1/2 -translate-y-1/2 scale-[2] z-0" />
          <SocialIcons className="absolute bottom-[35%] right-8 z-20" />
          <YellowShape className="absolute top-[20%] right-[10%] w-[45vw] h-[45vh] transform rotate-[15deg] scale-[1] z-10" />
          <BlueShape className="absolute bottom-[10%] right-[20%] w-[35vw] h-[35vh] transform scale-[0]" />
        </div>
      </div>
      <Portfolio />
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
