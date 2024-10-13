# AstroKnight-ImBatman

AstroKnight-ImBatman is an interactive web application designed to provide an immersive and educational game experience for space exploration. The project combines stunning VR & 3D visualizations, AI-powered interactions, and real data from NASA to create a comprehensive platform for learning about our solar system.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Project Structure](#project-structure)
5. [How It Works](#how-it-works)
6. [Installation and Setup](#installation-and-setup)
7. [Running the Application](#running-the-application)
8. [Usage](#usage)

## Project Overview

AstroKnight-ImBatman is a web-based application that aims to deepen users' understanding of the planets in our solar system. The project leverages advanced technologies to provide an engaging learning experience, fostering curiosity and broadening perspectives on the universe.

## Features

- Interactive 3D solar system animation
- Detailed 3D models of planets with the ability to explore them "on foot" or in VR
- Users are able to explore all the features even with Keybord/Mouse, or Touch
- AI-powered chatbot for answering space-related questions
- Integration with NASA's public data for scientific accuracy
- Responsive design for various devices
- Smooth animations and transitions
- User feedback system

## Technologies Used

- Frontend:
  - HTML5
  - CSS3 (with Tailwind CSS framework)
  - JavaScript (ES6+ syntax)
  - Three.js for 3D rendering
  - WebGL for 3D graphics

- Backend:
  - Node.js
  - Express.js as the web application framework
  - Python Flask

- Database:
  - SQLite (for storing user feedback)
  - NASA's public API for accessing space data (text and images)

- AI:
  - Google's Generative AI API for the chatbot

## Project Structure
AstroKnight-ImBatman/ ├── assets/ │ ├── images/ │ └── videos/ ├── js/ │ ├── main.js │ ├── mainP.js │ └── other JS files... ├── server.js ├── app.py ├── package.json ├── package-lock.json ├── index.html ├── solar-system.html ├── ai-chatbot.html ├── about.html ├── feedback.html └── README.md


## Installation and Setup

1. Clone the repository:
git clone https://github.com/NafisRayan/AstroKnight-ImBatman.git


2. Navigate to the project directory:
cd AstroKnight-ImBatman


3. Download the GLTF 3D model files:
   - Visit the following Google Drive link to download the 3D model files: [Drive Link](https://drive.google.com/drive/folders/15DFIuNTGMX3VnvFDYm2FS1jRCveDKTFy)
   - Extract the downloaded files and place them in the "root" directory

4. Install Node.js dependencies:
npm install


5. Install Python dependencies:
pip install -r requirements.txt


## Running the Application

1. Start the Node.js server:
node server.js

2. Using the Python backend for feedback management:
python app.py

3. Use Live Server or a similar tool to run the HTML files (starting  with index.html) for a more interactive experience.


## How It Works

### Animated Solar System Overview

The animated solar system overview is implemented using Three.js, a powerful JavaScript library for creating and rendering 3D graphics in the browser. This feature is available on both the home page (`index.html`) and the solar system page (`solar-system.html`).

- Technology: Three.js
- Pages: `index.html`, `solar-system.html`
- JavaScript files: `js/main.js`, `js/mainP.js`

The animation is created by loading 3D models of the planets and their orbits, and then animating their positions and rotations over time. The VR functionality is enabled using the VRButton from Three.js, allowing users to enter VR mode if their device supports it.

### Detailed Exploration Pages

Each planet has its own detailed exploration page, accessible from the solar system overview or through the navigation menu.

- Technology: HTML5, CSS3 (with Tailwind CSS), JavaScript
- Pages: `allPlanets.html` (contains links to individual planet pages)
- JavaScript files: `js/main.js`, `js/mainP.js`

These pages use Three.js to load and render detailed 3D models of each planet. The models are loaded using the GLTFLoader, which is part of the Three.js library. The pages also include information about the planet's characteristics, scientific insights, and relevance to our understanding of space.

### User Navigation and Accessibility

The application supports navigation via keyboard/mouse or touch, ensuring accessibility across various devices.

- Technology: JavaScript (ES6+ syntax)
- Pages: All HTML pages
- JavaScript files: `js/main.js`, `js/mainP.js`

The navigation is implemented using JavaScript event listeners that respond to keyboard input, mouse clicks, and touch events. This allows users to explore the solar system and individual planets using their preferred input method.

### High-Quality Visuals

The application uses high-quality, realistic 3D models of planets and other celestial objects.

- Technology: Three.js, GLTFLoader
- Pages: All HTML pages with 3D content
- JavaScript files: `js/main.js`, `js/mainP.js`

The 3D models are loaded using the GLTFLoader and rendered using Three.js. The models are stored in the root directory and are loaded dynamically as needed.

### AI-Powered Chatbot

The AI-powered chatbot is integrated into the application to provide real-time answers and insights.

- Technology: Google's Generative AI API
- Page: `ai-chatbot.html`
- JavaScript file: `js/main.js`

The chatbot is implemented using Google's Generative AI API. User queries are sent to the API, and the responses are displayed in the chat interface. The backend server (`server.js`) handles the communication between the frontend and the AI API.

### NASA Data Integration

The application integrates with NASA's public data to ensure scientific accuracy and relevance.

- Technology: NASA API, JavaScript (for data fetching and processing)
- Pages: All HTML pages with scientific information
- JavaScript files: `js/main.js`, `js/mainP.js`

The application fetches data from NASA's API using JavaScript's Fetch API or Axios library. This data is then used to populate the information sections of the planet pages and to provide accurate information to the chatbot.

### Responsive Design

The application features a responsive design that adapts to different screen sizes.

- Technology: HTML5, CSS3 (with Tailwind CSS)
- Pages: All HTML pages
- CSS files: Tailwind CSS (imported in HTML files)

The responsive design is achieved using Tailwind CSS, which provides utility classes for responsive layouts. The application's layout adjusts automatically based on the screen size, ensuring a good user experience across devices.

### Smooth Animations and Transitions

The application includes smooth animations and transitions to enhance the overall user experience.

- Technology: CSS3 transitions and animations, JavaScript (for dynamic animations)
- Pages: All HTML pages with interactive elements
- CSS files: Tailwind CSS (imported in HTML files)
- JavaScript files: `js/main.js`, `js/mainP.js`

Smooth animations are implemented using CSS3 transitions and animations. JavaScript is used to create more complex, dynamic animations, especially in the 3D visualizations.

### User Feedback System

The application includes a user feedback system to gather insights and continuously improve the application.

- Technology: HTML5, CSS3, JavaScript, SQLite (for storing feedback)
- Page: `feedback.html`
- JavaScript file: `js/main.js`
- Backend file: `app.py` (Python backend for feedback management)

The feedback form is implemented using HTML and CSS. JavaScript is used to handle form submission and send the feedback to the backend. The Python backend (`app.py`) manages the SQLite database for storing and retrieving feedback.

This system allows users to provide feedback, which can be viewed and managed by the application administrators. The feedback is stored in a SQLite database, which is managed by a Python backend (currently not in use in the main application flow).


## Usage

- Explore the solar system through the interactive 3D animation
- Visit individual planet pages for detailed information and 3D models
- Use the AI chatbot to ask space-related questions
- Provide feedback through the feedback form
- Navigate through the responsive interface on various devices