import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import firebaseConfig from 'firebaseConfig.json';
import firebaseConfigDev from 'firebaseConfig.dev.json';
import { environment } from './environments/environment';

firebase.initializeApp(environment.production ? firebaseConfig : firebaseConfigDev);
const db = firebase.firestore();

export default firebase;

export { db };
