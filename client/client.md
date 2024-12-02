client/
├── node_modules/ # Installed dependencies (ignored in .gitignore)
├── public/ # Static assets accessible directly
├── src/ # Source code for your React app
├── .gitignore # Files and folders to ignore in Git
├── package.json # Dependencies and scripts
├── tsconfig.json # TypeScript configuration
├── postcss.config.js # PostCSS configuration (for Tailwind)
├── tailwind.config.js # Tailwind CSS configuration
├── vite.config.ts # Vite configuration (if using Vite)
└── client.md # Documentation about the FE of the project

src/
├── assets/ # Static assets like images or fonts
├── components/ # Reusable React components
├── pages/ # Page-level components (e.g., Home, About)
├── styles/ # Tailwind utilities or global CSS
├── utils/ # Helper functions and utilities
├── App.tsx # Root component of the application
├── main.tsx # Entry point for rendering React (with ReactDOM)
└── index.css # Global styles with Tailwind imports
