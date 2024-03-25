import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app)

export function signIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password)
}

export function register(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password)
}

export function signOut() {
    return signOut()
}

export function getCurrentUser() {
    return getCurrentUser()
}


