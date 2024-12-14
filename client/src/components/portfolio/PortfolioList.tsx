import React from "react";
import PortfolioCard from "./PortfolioCard";

interface Project {
    title: string;
    description: string;
    href: string;
}

interface PortfolioListProps {
    projects: Project[];
}
const PortfolioList: React.FC<PortfolioListProps> = ({ projects }) => {

    return (
        <section className="py-16 bg-gray-50" id="portfolio">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">Portfolio</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <PortfolioCard project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioList;