# VocabWar

## Overview

VocabWar is a two-player word game where players battle using their vocabulary. To win you need to create more words than the opponent player in the given time limit using the letters we provide. The letters are randomly generated for each lobby and are the same for both the players.

## Features

- Synchronized timer for fair play
- Connected to dictionary API to check validity of words
- Authentication with Firebase
- Unique Code system for game lobbies

---

## Team

We are Team 16 Burnaby for Comp 2800 Summer 2021

| First Name | Last Name  | Email                  | Student Number |
| ---------- | ---------- | ---------------------- | -------------- |
| Akshay     | Marwah     | amarwah4@my.bcit.ca    | A01231710      |
| Parth      | Chaturvedi | pchaturvedi@my.bcit.ca | A01256537      |
| Eric       | Tan        | etan32@my.bcit.ca      | A01169127      |
| Borivoj    | Pantic     | bpantic@my.bcit.ca     | A01224754      |

---

## Repo Organization

- `client` holds the react app
  - `public` holds the HTML5 file to be server to the user along with favicon
  - `src` holds the main app component and other React components
    - `API` holds the API key for firebase app
    - `assets` holds media files
      - `images` holds image files
      - `sounds` holds sounds for the game
      - `font` holds fonts used in app
    - `components` holds all components used in app
      - `About` - holds components reponsible for about section
      - `Authentication` - holds components reponsible for authentication
      - `Game` - holds components reponsible for game session
      - `Layout` - holds components reponsible for app layout
      - `Leaderboard` - holds components reponsible for game leaderboard
      - `Lobby` - holds components reponsible for game lobby
      - `Settings` - holds components reponsible for settings
      - `UI` - holds common UI elements used in whole app
- `tests` holds the selenium tests for the app

---

## Instructions

### 1. To Assemble a Development Environment

> I. Clone the repository - Directory where you want to clone

```bash
git clone https://github.com/ParthCv/COMP-2800-Team-BBY-16-VocabWar.git
```

> II. Install client dependencies

```bash
cd client
npm install
```

> III. Start React App at http://localhost:3000/

```bash
cd client
npm start
```

> IV. Build for Production

```bash
cd client
npm run build
```

### 2. Tech

Technologies that were used for this project:

- `HTML5`
- `CSS3`
- `JS`
- `JSX`
- `ReactJS`
- `NPM`
- `Babel`
- `Git`
- `Netlify`

### 3. API

VocabWar requires the use of few APIs to funtion properly but they will be installed when Development Environment is set up properly.

- [Firebase API](https://firebase.google.com/docs/reference)
- [ReactJS](https://reactjs.org/)
- [React-Fire](https://github.com/FirebaseExtended/reactfire)
- [Dictionary API](https://dictionaryapi.dev/)
- [Reddit API](https://www.reddit.com/dev/api/)
- [React Share](https://www.npmjs.com/package/react-share)
- [WebShare API](https://www.w3.org/TR/web-share/)
- [Material-UI](https://material-ui.com/)

### 4. IDE

Any IDEs that can modify HTML, CSS, JavaScript. For the most optimized experience, [Visual Studio Code](https://code.visualstudio.com/) is preferred.

### 5. Testing

The testing for the app has been in two ways

- Manual Testing
- Selenium IDE extension (.side included under tests directory)

To check the test plan and results click [here.](https://docs.google.com/spreadsheets/d/1AlxlwN3Q0pNr2RjthexjCvG1_qoovl7bYUKQMjRTaCs/edit#gid=394496370)

### 6. Configurations

- `Database` - You need to contact us at amarwah4@my.bcit.ca to get permission to access firestore database
- `Netlify` - Permission can be granted by providing your email
