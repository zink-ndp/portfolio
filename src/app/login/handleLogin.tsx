
import { signInWithEmailAndPassword } from "firebase/auth";

export async function handleLogin(auth: any, email: string, pass: string) {
  await signInWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      const em = userCredential.user.email;
      console.log(userCredential)
      em ? (localStorage.setItem("userEmail",em)) : (localStorage.setItem("userEmail",""))
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}
