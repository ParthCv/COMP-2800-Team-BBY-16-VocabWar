# VocabWar

## _Battle with Words_

VocabWars is a two player game where people compete by making the maximum number of words using the given random letters.

## Features

- Synchronized timer for fair play
- Connected to dictionary API to check validity of words
- Authentication with Firebase
- Unique Code system for game lobbies

## Tech

VocabWar uses a number of technologies to work properly:

- `ReactJS` - HTML enhanced for web apps!
- `FireAuth` - User Authentication
- `Firestore` - Realtime Database
- `Netlify` - Hosting provider
- `react-fire` - Custom hooks for React and Firebase integration
- `GitHub` - For code collaboration
- `VS Code` - Code Editor
- `react-social` - For social media icon
- `Material-UI` - For icons and components

## API

VocabWar requires the use of few APIs to funtion properly.

- [Firebase API](https://firebase.google.com/docs/reference)
- [Dictionary API](https://dictionaryapi.dev/)
- [Reddit API](https://www.reddit.com/dev/api/)
- [React Share](https://www.npmjs.com/package/react-share)

## Overview

### Installation

For installation just clone the repository and then install all the dependencies by `npm install`.
To run the app use the command `npm start` and after the code is compiled check `http://localhost:3000/` in a browser to see the app.


### Game tutorial

VocabWar requires the user to make an account on VocabWar or use their existing Google account.

- Authenticate in the game using VocabWar account or google account
- Click Create Lobby to start a new game
- Share the Code with the friend you want to play with
- The friend clicks join lobby and enters the code you shared
- The "waiting" button changes to "Start Game" which can be pressed to start the game
- In game session, choose letters to form words and submit using enter button.
- Points will be granted if word is valid
- After Timer ends, the result screen will be displayed with points of both players and a option to leave game lobby.

### Testing 

The testing for the app has been in two ways

- Manual Testing
- Selenium IDE extension

To check the test plan and results click [here.](https://docs.google.com/spreadsheets/d/1AlxlwN3Q0pNr2RjthexjCvG1_qoovl7bYUKQMjRTaCs/edit#gid=394496370)

### Team

We are Team 16 Burnaby for Comp 2800 Summer 2021

| Name            | Email                  |
| --------------- | ---------------------- |
| Akshay Marwah   | amarwah4@my.bcit.ca    |
| Parth Chatuvedi | pchaturvedi@my.bcit.ca |
| Eric Tan        | etan32@my.bcit.ca      |
| Borivoj Pantic  | bpantic@my.bcit.ca     |

## File Structure

```
client
├─ .gitignore
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ manifest.json
│  └─ robots.txt
├─ README.md
└─ src
   ├─ API
   │  └─ firebaseConfig.js
   ├─ App.css
   ├─ App.js
   ├─ assets
   │  ├─ fonts
   │  │  ├─ digital-7.regular.ttf
   │  │  ├─ Montserrat-Bold.ttf
   │  │  ├─ Montserrat-Regular.ttf
   │  │  └─ Raleway-ExtraBold.ttf
   │  ├─ images
   │  │  ├─ Akshay_Avatar.png
   │  │  ├─ Boki_Avatar.png
   │  │  ├─ BottomLogo.png
   │  │  ├─ dark.png
   │  │  ├─ Eric_Avatar.png
   │  │  ├─ light.png
   │  │  ├─ orange.png
   │  │  ├─ Parth_Avatar.png
   │  │  └─ rickroll.gif
   │  └─ sounds
   │     ├─ correct.mp3
   │     ├─ rickroll.mp3
   │     └─ wrong.mp3
   ├─ components
   │  ├─ About
   │  │  ├─ AboutUs.js
   │  │  ├─ AboutUs.module.css
   │  │  ├─ Profile.js
   │  │  ├─ Profile.module.css
   │  │  ├─ Reddit.js
   │  │  └─ Reddit.module.css
   │  ├─ Authentication
   │  │  ├─ GoogleAuth.js
   │  │  ├─ Login.js
   │  │  ├─ Login.module.css
   │  │  ├─ Signup.js
   │  │  ├─ Signup.module.css
   │  │  ├─ StartPage.js
   │  │  └─ StartPage.module.css
   │  ├─ Game
   │  │  ├─ Points
   │  │  │  ├─ Points.js
   │  │  │  └─ Points.module.css
   │  │  ├─ Session.js
   │  │  ├─ Session.module.css
   │  │  ├─ Surrender
   │  │  │  ├─ Surrender.js
   │  │  │  └─ Surrender.module.css
   │  │  ├─ Timer
   │  │  │  ├─ Timer.js
   │  │  │  └─ Timer.module.css
   │  │  ├─ WinnerOverlay
   │  │  │  ├─ Winner.js
   │  │  │  └─ Winner.module.css
   │  │  ├─ WordArray
   │  │  │  ├─ WordArray.js
   │  │  │  └─ WordArray.module.css
   │  │  └─ wordcheck.js
   │  ├─ Layout
   │  │  ├─ MainMenu.js
   │  │  ├─ MainMenu.module.css
   │  │  ├─ MainMenuButtons.js
   │  │  ├─ MainMenuButtons.module.css
   │  │  ├─ RandomLetters.js
   │  │  ├─ User.js
   │  │  └─ User.module.css
   │  ├─ Leaderboard
   │  │  ├─ LeaderBoard.js
   │  │  └─ Leaderboard.module.css
   │  ├─ Lobby
   │  │  ├─ CodeBox.js
   │  │  ├─ CodeBox.module.css
   │  │  ├─ CreateLobby.js
   │  │  ├─ CreateLobby.module.css
   │  │  ├─ EasterEgg
   │  │  │  ├─ RickRoll.js
   │  │  │  └─ RickRoll.module.css
   │  │  ├─ JoinLobby.js
   │  │  └─ JoinLobby.module.css
   │  ├─ Settings
   │  │  ├─ Settings.js
   │  │  └─ Settings.module.css
   │  └─ UI
   │     ├─ Header.js
   │     ├─ Header.module.css
   │     ├─ Navbar.css
   │     └─ Navbar.js
   └─ index.js
```
