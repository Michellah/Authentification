import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";

export const githubAuth = async (callback: ()=> void)=>{

    const provider = new GithubAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        alert("e")
        console.log(result)

      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        // ...
      });
}
