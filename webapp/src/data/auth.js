import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";
import { setCache, deleteAllCache } from '../data/cache';

const provider = new GoogleAuthProvider();

export function loginWithGoogle(setCurrentUser) {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log("user", user);
      setCurrentUser(user);
      setCache('currentUser', user);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      // const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log("Google auth error", errorMessage);
    });
}

export function logout() {
    deleteAllCache();
    auth.signOut();
}