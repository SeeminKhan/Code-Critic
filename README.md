# Code Critic

Code Critic is a web application that allows users to input code, select a programming language, and receive AI-generated reviews and suggestions for improvement. The project features a responsive UI and a backend powered by Express.js, utilizing Google's Gemini AI for code analysis.

## Features
- Supports multiple programming languages (JavaScript, Python, Java, C, C++)
- AI-powered code review and feedback
- Responsive and dark-themed UI
- Code highlighting using Prism.js
- Markdown-based AI response formatting
- Backend integration with Gemini AI API

## Tech Stack
### Frontend
- React.js
- Tailwind CSS
- React Simple Code Editor
- Prism.js for syntax highlighting
- Axios for API requests

### Backend
- Node.js
- Express.js
- Google Gemini AI API

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js
- npm or yarn

### Clone the Repository
```sh
git clone https://github.com/your-username/ai-code-critic.git
cd code-critic
```

### Setup Frontend
```sh
cd frontend
npm install
npm runn dev
```

### Setup Backend
```sh
cd backend
npm install
```

Create a `.env` file in the `backend` directory and add your Gemini AI API key:
```sh
GOOGLE_GEMINI_KEY=your_api_key_here
```

Start the backend server:
```sh
nodemon server.js
```

## Usage
1. Open the frontend at `http://localhost:5173` (or the port where Vite is running).
2. Select a programming language from the dropdown.
3. Modify or input code in the editor.
4. Click the `Review` button to receive AI-generated feedback.
