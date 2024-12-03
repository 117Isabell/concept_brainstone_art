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
        <section className="py-16 bg-gray-50" id="portfolioCard">
            <div className="container mx-auto px-4 text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <a
                        key={index}
                        href={project.href}
                        className="bg-white rounded-lg shadow-md p-6"
                    >
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-600">{project.description}</p>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default PortfolioCard;