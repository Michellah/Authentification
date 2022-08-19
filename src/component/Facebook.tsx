import { getAuth, signInWithPopup, FacebookAuthProvider} from "firebase/auth";

export const facebookAuth = async (callback: ()=> void)=>{
    const auth = getAuth();
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            callback()
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });
}
