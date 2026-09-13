# LOMA Exam Master

A static React + Vite study app for LOMA exam preparation. This version runs entirely in the browser with local storage-backed persistence, so it does not depend on Firebase, Google Cloud, or any paid backend services.

## Features

- Local-only authentication/session handling
- Browser-based progress and assessment history storage
- Local course catalog, approvals, subscriptions, and assignments
- Admin dashboard and user management using browser storage only
- GitHub Pages deployment support via the existing `gh-pages` setup

## Run locally

### 1. Install dependencies

```bash
npm install
```

### 2. Set your Gemini API key

Create or update the `.env` file in the project root with:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Start the app

```bash
npm run dev
```

## Build for production

```bash
npm run build
```

## Deploy

```bash
gh-pages -d dist
```

## Notes

- The app now uses browser local storage instead of Firestore.
- The demo admin account is seeded automatically for `safderjamali12@gmail.com`.
- The app is designed to work without any cloud billing, external auth provider, or database subscription.
