
# 🎮 Tic-Tac-Toe React App

A classic, interactive tic-tac-toe game built with React, Vite, TypeScript, and TailwindCSS. This application lets two players take turns to place X's and O's on a 3x3 grid, with real-time win and draw detection.

## 🚀 Features

- **Two-player gameplay**: Players alternate turns placing X or O.
- **Win detection**: Automatically detects when a player wins.
- **Draw detection**: Detects when the game ends in a tie.
- **Restart game**: Reset the board to play again quickly.
- **Responsive design**: Works well on both desktop and mobile devices.

## Gameplay
![The main game board during play](https://github.com/user-attachments/assets/a6c7e3ff-5cc8-43c3-8752-9285947928c8)
![he game showing a win state.](https://github.com/user-attachments/assets/94e7852e-3243-46c5-b062-eafd07dd55ea)

## 🛠️ Technologies Used

- [React](https://reactjs.org/) – Front-end library for building user interfaces.
- [Vite](https://vitejs.dev/) – Fast development build tool.
- [TypeScript](https://www.typescriptlang.org/) – Typed superset of JavaScript.
- [TailwindCSS](https://tailwindcss.com/) – Utility-first CSS framework for styling.

## 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/KakaSena/tic-tac-toe-react.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd tic-tac-toe-react
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```

5. **Open the app in your browser**:

   Visit [http://localhost:5173](http://localhost:5173) to play the game.

## 📁 Project Structure

```
tic-tac-toe-react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Board.tsx
│   │   ├── Square.tsx
│   │   └── GameStatus.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── styles/
│       └── index.css
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 📄 License

This project is licensed under the [MIT License](https://github.com/KakaSena/tic-tac-toe-react/blob/main/LICENSE). Feel free to use and modify it as needed.

## 🙏 Acknowledgments

This project was proposed by the Udemy course:
[React - The Complete Guide 2025](https://www.udemy.com/course/react-the-complete-guide-incl-redux)
