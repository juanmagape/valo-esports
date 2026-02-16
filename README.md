# Valorant Esports 🎮

![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?logo=css3&logoColor=white)

A web application dedicated to tracking competitive Valorant esports. This project allows users to browse teams from different regions, view detailed rosters, check recent match results, and stay updated on upcoming fixtures.

## ✨ Features

- **Multi-Region Support**: Explore teams from Europe, North America, Brazil, APAC, Korea, China, Japan, and more.
- **Team Details**: View comprehensive information including current active rosters and staff members.
- **Match Tracking**:
  - Check **Recent Results** with scorelines.
  - View **Upcoming Matches** with dates and times.
- **Player Profiles**: Access player details and images directly from team pages.
- **Responsive Design**: Built with clean, modular CSS for a smooth user experience.

## 🛠️ Technology Stack

- **Frontend Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Styling**: Pure CSS (Modular & Global styles)
- **Data Source**: [Valorant Esports API](https://vlresports.vercel.app/) (Unofficial API by Orloxx based on vlr.gg)
- **Utilities**: `react-loading-indicators` for UI states.

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/juanmagape/valo-esports.git](https://github.com/juanmagape/valo-esports.git)
   ```

2. Navigate to the project directory:
   ```bash
   cd valo-esports
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` (or the port shown in your terminal).

## 📂 Project Structure

```text
src/
├── assets/         # Static assets
├── components/     # React components (Teams, TeamDetails, Navbar, etc.)
├── styles/         # CSS files for specific components
├── utils/          # Helper functions (Image Proxy)
├── App.jsx         # Main application layout and routing
└── main.jsx        # Entry point
```

## ⚠️ Disclaimer

This project is not affiliated with or endorsed by vlr.gg, Riot Games, or any associated entities. It is an independent tool created for educational purposes and as a personal web development project.

## 👤 Author

**Juan Manuel**

- Website: [juanmagape.vercel.app](https://juanmagape.vercel.app/)
- LinkedIn: [juanma-gape](https://www.linkedin.com/in/juanma-gape/)
- GitHub: [@juanmagape](https://github.com/juanmagape)