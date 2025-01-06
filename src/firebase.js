import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyBtiDvEG_uSPxm1d_a6vZxy7LvVzqMs8GQ',
	authDomain: 'disneyplus-clone---kaustubh.firebaseapp.com',
	projectId: 'disneyplus-clone---kaustubh',
	storageBucket: 'disneyplus-clone---kaustubh.firebasestorage.app',
	messagingSenderId: '68573548402',
	appId: '1:68573548402:web:f711fc9e0d088c7f9617eb',
	measurementId: 'G-WVSL1QYT58',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const storage = getStorage(app);

// 6. Export your instances
export { auth, provider, storage };
export default db;
