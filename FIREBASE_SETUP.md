# Firebase Setup Guide

## 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Follow the setup wizard

## 2. Enable Authentication
1. In your Firebase project, go to Authentication
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Enable "Email/Password" provider

## 3. Create Firestore Database
1. Go to Firestore Database
2. Click "Create database"
3. Choose "Start in test mode" for development
4. Select a location

## 4. Get Firebase Config
1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click "Web" icon to add a web app
4. Register your app
5. Copy the config object

## 5. Update Firebase Config
Replace the config in `src/firebase.ts` with your actual Firebase config:

```typescript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-actual-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

## 6. Firestore Security Rules (for development)
In Firestore Rules tab, use these rules for development:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /blogs/{document} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## 7. Test the Application
1. Run `npm run dev`
2. Create an account via signup
3. Login and try creating a blog post
4. View blogs on the blog page

## Features Implemented
- ✅ Firebase Authentication (Login/Signup)
- ✅ Protected routes for blog creation
- ✅ Dynamic blog listing from Firestore
- ✅ Blog detail pages
- ✅ Create blog functionality for authenticated users
- ✅ Responsive design
- ✅ User authentication state management