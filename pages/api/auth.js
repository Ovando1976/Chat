// pages/api/auth.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  // your config here
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = JSON.parse(req.body);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = await userCredential.user.getIdToken();
      return res.status(200).json({ token });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
