import * as firebase from "firebase/app";
import "firebase/auth";
import Constants from 'expo-constants';

export const initialUser = {
  name: "",
  updatedAt: firebase,
  createdAt: firebase,
};

if (!firebase.apps.length) {
   firebase.initializeApp(Constants.manifest.extra.firebase);
}



export const SignIn = async () => {
  const userCredential = await firebase.auth().signInAnonymously();
  const { uid } = userCredential.user;
  const userDoc = await firebase().collection("users").doc(uid).get();
  if (!userDoc.exists) {
    await firebase().collection("users").doc(uid).set(initialUser);
    return {
      ...initialUser,
      id: uid,
    }
  } else {
    return {
      id: uid,
      ...userDoc.data(),
    }
  }
};     
