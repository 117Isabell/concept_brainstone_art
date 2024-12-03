import Contact from "./components/homepage/contact.tsx";
import PortfolioList from "./components/portfolio/PortfolioList.tsx";

export default function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Contact />
      <PortfolioList />
    </div>
  );
}
