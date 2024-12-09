import { SocialIcons } from "./components/homepage/SocialIcons.tsx";
import {
  PurpleShape,
  YellowShape,
  BlueShape,
  GreenShape,
} from "./components/homepage/AnimatedShapes";
export default function App() {
  return (
    <div className="relative h-screen w-full bg-white overflow-hidden p-4">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <PurpleShape />
      <YellowShape />
      <BlueShape />
      <GreenShape />
      <SocialIcons />
    </div>
  );
}
