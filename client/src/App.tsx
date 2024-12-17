import { useNavigate } from "react-router-dom";
import { SocialIcons } from "./components/homepage/SocialIcons.tsx";
import Video from "./components/homepage/Video.tsx";
import {
  PurpleShape,
  YellowShape,
  BlueShape,
  GreenShape,
} from "./components/homepage/AnimatedShapes";

export default function App() {
  const navigate = useNavigate();

  const goToPortfolio = () => {
    navigate("/portfolio");
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <div className="relative h-screen w-full bg-white overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <PurpleShape className="absolute -rotate-[45deg] top-[8%] left-[2%] w-[50vw] h-[50vh] transform  z-10" />
          <GreenShape
            className="absolute top-[70%] left-[60%] w-[40vw] h-[40vh] transform -translate-x-1/2 -translate-y-1/2 scale-[2] z-0 cursor-pointer"
            onClick={goToPortfolio}
          />
          <SocialIcons className="absolute bottom-[35%] right-8 z-20" />
          <YellowShape className="absolute top-[20%] right-[10%] w-[45vw] h-[45vh] transform rotate-[15deg] scale-[1] z-10" />
          <BlueShape className="absolute bottom-[10%] right-[20%] w-[35vw] h-[35vh] transform scale-[0]" />
        </div>
      </div>

      <div className="w-full">
        <Video />
      </div>
    </div>
  );
}
