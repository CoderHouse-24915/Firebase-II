import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDXbkP4HDiqKFOMUhI6915RC7R0nHyJmNE',
	authDomain: 'fb-24915.firebaseapp.com',
	projectId: 'fb-24915',
	storageBucket: 'fb-24915.appspot.com',
	messagingSenderId: '329173219192',
	appId: '1:329173219192:web:f9be46309826d7a845fa8d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
