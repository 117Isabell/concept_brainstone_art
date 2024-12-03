import React from "react";
import PortfolioCard from "./portfolioCard";

const PortfolioList: React.FC = () => {
    const projects = [
        {
            title: "Ethereal Moments",
            description: "A delicate dance between light and shadow, capturing fleeting moments that feel like whispers from another world.",
            href: "/images/1.jpg",
        },
        {
            title: "Urban Chronicles",
            description: "An exploration of the untamed beauty of cityscapes, where architecture meets the heartbeat of urban life.",
            href: "/images/2.jpg",
        },
        {
            title: "Nature's Palette",
            description: "A vibrant collection showcasing the kaleidoscope of colors found in the natural world, from golden sunsets to lush green forests.",
            href: "/images/3.jpg",
        },
        {
            title: "Soulful Portraits",
            description: "A series of intimate portraits that delve deep into human emotions, revealing the unspoken stories of the soul.",
            href: "/images/4.jpg",
        },
        {
            title: "Timeless Wanderlust",
            description: "A visual journey through distant lands and cultures, each frame a postcard from a world waiting to be discovered.",
            href: "/images/5.jpg",
        },
        {
            title: "Shadows and Silhouettes",
            description: "An artistic interpretation of form and mystery, where shadows and silhouettes narrate tales untold.",
            href: "/images/6.jpg",
        },
        {
            title: "Forgotten Places",
            description: "A hauntingly beautiful collection of abandoned spaces, where time stands still and history whispers through decay.",
            href: "/images/7.jpg",
        },
        {
            title: "Reflections of Life",
            description: "A study of reflections, from mirrored surfaces to the eyes of passersby, revealing a layered world within a world.",
            href: "/images/8.jpg",
        },
        {
            title: "Seasons in Frame",
            description: "A celebration of the changing seasons, capturing the essence of spring blossoms, summer skies, autumn leaves, and winter snow.",
            href: "/images/9.jpg",
        },
        /* {
            title: "Lightscapes",
            description: "A mesmerizing collection of light trails, long exposures, and luminous scenes that blur the lines between reality and dream.",
            href: "#",
        }, */
    ];
    
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