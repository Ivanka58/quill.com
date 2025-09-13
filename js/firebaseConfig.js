    // js/firebaseConfig.js
    import { initializeApp } from "firebase/app";
    import { getAuth } from "firebase/auth"; // Импортируем getAuth

    const firebaseConfig = {
      apiKey: "AIzaSyD8_hvqOIIsygb6KR_58X01ud_x8MckQjM",
      authDomain: "quill-messenger-b310a.firebaseapp.com",
      projectId: "quill-messenger-b310a",
      storageBucket: "quill-messenger-b310a.firebasestorage.app",
      messagingSenderId: "829302749949",
      appId: "1:829302749949:web:fe21549597ff6c15871c94",
      measurementId: "G-975HC1PGVJ"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Firebase Authentication and get a reference to the service
    export const auth = getAuth(app); // Экспортируем auth
    
