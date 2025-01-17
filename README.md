# Detrator-tasks

This project is built using Next.js 15 and Material-UI (MUI). The project includes a responsive layout with a navbar, a main container, and a secondary container.

## Table of Contents

- [Installation](#installation)
- [Running the Project](#running-the-project)
- [File Structure](#file-structure)
- [Components](#components)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/PriyanshChaudhari/detrator-tasks.git
   cd detrator-tasks
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Running the Project

To run the project locally, use the following command:
```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to see the application running.

## File Structure

The project structure is as follows:

```
├── detrator-tasks/ 
│ ├── .gitignore
│ ├── jsconfig.json
│ ├── next.config.mjs
│ ├── README.md
│ ├── package-lock.json
│ ├── package.json
│ └── app/ 
│   ├── layout.js
│   ├── page.js
│   ├── global.css
│   ├── favicon.ico
│   └── components/
│    └── Navbar.js
```

### Components

- **Navbar.js**: This component contains the navigation bar with a brand name, search bar, and user account information.

### Pages

- **page.js**: This is the home page of the application. It includes the `Navbar` component and the main and secondary containers.

### Styles

- **globals.css**: This file contains global CSS styles for the project.

## Components

### Navbar

The `Navbar` component includes:
- A brand name (`Brand Name`)
- A search bar with a search icon
- A user account icon and user name

### Main Container

The main container is displayed in the center and takes up 3/7 of the width on larger screens. On smaller screens, it takes up the full width.

### Secondary Container

The secondary container is displayed to the right of the main container and takes up 2/7 of the width on larger screens. It is hidden on smaller screens.