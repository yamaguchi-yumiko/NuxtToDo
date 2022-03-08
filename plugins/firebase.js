import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDzNY_b19aurH1ztymBoj5LEcOgzcdB2fc",
  authDomain: "nuxttodo-93455.firebaseapp.com",
  projectId: "nuxttodo-93455",
  storageBucket: "nuxttodo-93455.appspot.com",
  messagingSenderId: "704242062603",
  appId: "1:704242062603:web:31a4a141a65b055cf6be0e",
  measurementId: "G-GJ4MV0Y18Q"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase
