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

- ReactJS - HTML enhanced for web apps!
- FireAuth - User Authentication
- Firestore - Realtime Database
- Netlify - Hosting provider
- react-fire - Custom hooks for React and Firebase integration
- GitHub - For code collaboration

## Tutorial

VocabWar requires the user to make an account on VocabWar or use their existing Google account.

- Authenticate in the game using VocabWar account or google account
- Click Create Lobby to start a new game
- Share the Code with the friend you want to play with
- The friend clicks join lobby and enters the code you shared
- The "waiting" button changes to "Start Game" which can be pressed to start the game
- In game session, choose letters to form words and submit using enter button.
- Points will be granted if word is valid
- After Timer ends, the result screen will be displayed with points of both players and a option to leave game lobby.

## Team

We are Team 16 Burnaby for Comp 2800 Summer 2021

| Name            | Email                  |
| --------------- | ---------------------- |
| Akshay Marwah   | amarwah4@my.bcit.ca    |
| Parth Chatuvedi | pchaturvedi@my.bcit.ca |
| Eric Tan        | etan32@my.bcit.ca      |
| Borivoj Pantic  | bpantic@my.bcit.ca     |

## Structure

```
├─ .gitignore
├─ client
│  ├─ .gitignore
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.ico
│  │  ├─ index.html
│  │  ├─ logo192.png
│  │  ├─ logo512.png
│  │  ├─ manifest.json
│  │  └─ robots.txt
│  ├─ README.md
│  └─ src
│     ├─ App.css
│     ├─ App.js
│     ├─ auth
│     │  ├─ BottomLogo.png
│     │  ├─ dark-withoutwatermark.png
│     │  ├─ firebaseConfig.js
│     │  ├─ Login.css
│     │  ├─ Login.js
│     │  ├─ Signup.css
│     │  ├─ Signup.js
│     │  ├─ StartPage.css
│     │  └─ StartPage.js
│     ├─ game
│     │  ├─ digital-7.regular.ttf
│     │  ├─ points.css
│     │  ├─ points.js
│     │  ├─ session.css
│     │  ├─ session.js
│     │  ├─ timer.css
│     │  ├─ Timer.js
│     │  ├─ winner.css
│     │  ├─ winner.js
│     │  └─ wordcheck.js
│     ├─ images
│     │  ├─ Akshay_Avatar.png
│     │  ├─ Boki_Avatar.png
│     │  ├─ dark.png
│     │  ├─ Eric_Avatar.png
│     │  ├─ light.png
│     │  └─ Parth_Avatar.png
│     ├─ index.css
│     ├─ index.js
│     └─ interface
│        ├─ AboutUs.css
│        ├─ AboutUs.js
│        ├─ CreateLobby.css
│        ├─ CreateLobby.js
│        ├─ joinLobby.css
│        ├─ JoinLobby.js
│        ├─ MainMenu.css
│        ├─ MainMenu.js
│        ├─ Montserrat-Bold.ttf
│        ├─ Montserrat-Regular.ttf
│        ├─ Navbar.js
│        ├─ OFL.txt
│        ├─ Raleway-ExtraBold.ttf
│        ├─ Settings.css
│        └─ Settings.js
├─ package-lock.json
└─ README.md
```
