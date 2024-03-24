import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app);
export function signInWithEmail(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password)
}

export function registerWithEmail(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function signOut() {
    return auth.signOut();
}
