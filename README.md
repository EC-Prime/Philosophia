# Philosophia

A contemplative daily journaling and reflection web app. Each day presents a philosophical quote to reflect upon, paired with an atmospheric backdrop, ambient rain, mechanical typing sounds, and optional ambient music.

---

## ✨ Features

- **Daily Stoic & Philosophical Quote** — Deterministically selected daily quote from Marcus Aurelius, Seneca, Epictetus, and more.
- **Atmospheric Hero Background** — Smooth cycling slideshow of contemplative artwork featuring Ken Burns drift and zoom animations.
- **Ambient Rain Effect** — Canvas-rendered procedural rain overlay for deep focus.
- **Mechanical Keyboard Typing SFX** — Realistic, multi-layered acoustic feedback synthesized in real-time via the Web Audio API (no external audio files needed).
- **Ambient Soundtrack** — Integrated YouTube ambient audio player with an interactive floating mute/unmute control.
- **Journal & Reflection History** — Write and save personal reflections to browser `localStorage`, with expandable history cards.
- **Glassmorphism Aesthetic** — Modern dark theme with muted gold accents and blurred glass surfaces.

---

## 🛠️ Tech Stack

- **HTML5 & CSS3** (Custom properties, CSS animations, backdrop filters)
- **Vanilla JavaScript** (ES6+)
- **HTML5 Canvas API** (Dynamic rain simulation)
- **Web Audio API** (Procedural mechanical keystroke synthesis)
- **YouTube IFrame Player API** (Ambient music integration)
- **Browser LocalStorage** (Local data persistence)

---

## 🚀 Getting Started

No build tools, bundlers, or package managers required. Simply open `index.html` in any modern web browser or serve it with a local server:

```bash
# Clone the repository
git clone https://github.com/EC-Prime/Philosophia.git
cd Philosophia

# Open directly or use a local server
# (e.g. VS Code Live Server, or Python)
python -m http.server 8000
```

---

## 📁 Project Structure

```text
Philosophia/
├── index.html       # Markup & app layout
├── style.css        # Theme variables, hero transitions, glassmorphism UI
├── app.js           # Core app logic (daily quote selector, history storage)
├── quotes.js        # Curated catalog of philosophical quotes
├── hero.js          # Hero background rotation & canvas rain particle engine
├── audio.js         # YouTube IFrame ambient music controller
├── typing-sfx.js    # Web Audio API mechanical keyboard sound generator
└── images/          # Contemplative hero artwork
```

---

## 📝 License

Open source and available under the [MIT License](LICENSE).
