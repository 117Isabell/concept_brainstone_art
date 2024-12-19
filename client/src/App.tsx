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

  const handleClick = () => {
    navigate("/portfolio");
  };

  return (
    <div className="bg-white flex flex-col">
      <div className="relative h-screen w-full bg-white overflow-hidden">
        <PurpleShape className="absolute transform -rotate-[25deg] z-10" />
        <GreenShape
          className="absolute left-[50%] w-[50vw] h-[20vh] transform -translate-x-1/2 -translate-y-1/2 z-50 cursor-pointer"
          onClick={handleClick}
        >
          <div className="w-full h-full flex items-center justify-center">
            <h1 className="text-black text-3xl font-bold">
              Magic Starts Here!!
            </h1>
          </div>
        </GreenShape>
        <YellowShape className="absolute top-[15%] right-[15%] w-[20vw] h-[15vh] transform rotate-[15deg] z-10" />
        <BlueShape className="absolute bottom-[20%] right-[25%] w-[15vw] h-[10vh] z-10" />
        <div className="absolute bottom-[30%] left-1/2 transform -translate-x-1/2 z-30">
          <SocialIcons className="flex gap-4" />
        </div>
      </div>

      <div className="w-full">
        <Video />
      </div>
    </div>
  );
}
