import firebase from 'firebase';
import firebaseConfig from 'firebaseConfig.json';
import { environment } from './environments/environment';

console.log(environment.production);

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default firebase;

export { db };