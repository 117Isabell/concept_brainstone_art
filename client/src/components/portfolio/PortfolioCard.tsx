import React from "react";

interface PortfolioCardProps {
    project: {
        href: string;
        title: string;
        description: string;
    };
    index: number;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, index }) => {

    return (
        <section className="py-8 bg-gray-50" id="portfolioCard">
            <div className="container mx-auto px-2 text-center">
                <div className="relative group">
                    <a href={project.href} target="_blank" rel="noopener noreferrer">
                        <img
                            key={index}
                            src={project.href}
                            className="bg-white rounded-lg shadow-md 
                            transition-transform duration-300 transform 
                            hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 
                        opacity-0 group-hover:opacity-100 flex flex-col justify-center 
                        items-center text-white transition-opacity duration-300">
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-200">{project.description}</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default PortfolioCard;