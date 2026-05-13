<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/bb05d559-8e35-4206-962b-381ae1003646

## Run Locally

**Prerequisites:** Node.js, Firebase Project

### 1. Firebase Setup

1. **Create a Firebase Project:**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Create a project" or select an existing one
   - Enable **Authentication** and **Firestore Database**

2. **Enable Phone Authentication:**
   - In Firebase Console, go to Authentication > Sign-in method
   - Enable "Phone" authentication
   - Add your domain to authorized domains (including `localhost` for development)

3. **Get Firebase Configuration:**
   - Go to Project Settings > General > Your apps
   - Click "Add app" > Web app
   - Copy the configuration object

4. **Update Environment Variables:**
   - Copy `.env.example` to `.env`
   - Replace the placeholder values with your actual Firebase config:

   ```env
   VITE_FIREBASE_API_KEY=your_actual_api_key_here
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

### 2. Install and Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set the `GEMINI_API_KEY` in [.env](.env) to your Gemini API key

3. Run the app:
   ```bash
   npm run dev
   ```

## Troubleshooting

### Firebase Authentication Errors

- **"auth/invalid-app-credential"**: Check that your Firebase config in `.env` matches your Firebase project exactly
- **"auth/invalid-phone-number"**: Use format `+1234567890` (country code required)
- **"auth/too-many-requests"**: Wait a few minutes before retrying
- **reCAPTCHA errors**: Ensure your domain is authorized in Firebase Console

### Environment Variables

Make sure all required environment variables are set in your `.env` file:
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
