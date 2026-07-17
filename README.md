# The Football Index

Your ultimate source for everything about **EA Sports FC 26** — ratings, game modes, new features, and the latest news.

## Overview

The Football Index is a static website dedicated to FC 26 (EA Sports FC 26). It covers:

- **Game Overview** — what's new in FC 26, HyperMotionV, FC IQ, and more
- **Key Features** — overhauled Ultimate Team, Career Mode, ProClubs, and gameplay mechanics
- **Game Modes** — Ultimate Team, Career Mode, Volta Football, Pro Clubs, Rush, and Kick Off
- **Top Player Ratings** — the highest-rated players in FC 26
- **News** — the latest announcements and updates about FC 26

## Project Structure

```
the-football-index/
├── index.html        # Main HTML page
├── css/
│   └── style.css     # All styles
├── js/
│   └── main.js       # Data, rendering, and interactions
└── README.md
```

## Running Locally

Open `index.html` directly in a browser, or serve it with any static file server:

```bash
npx serve .
# or
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Tech Stack

- Pure HTML5, CSS3, and vanilla JavaScript — no frameworks or build tools required
- Google Fonts (Inter) for typography
- CSS custom properties for theming
- IntersectionObserver for scroll animations and scroll-spy navigation
