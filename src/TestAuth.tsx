import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase/config";

export default function TestAuth() {
  async function test() {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        "admin@test.com",
        "Admin@12345"
      );

      console.log("SUCCESS", user.user);

    } catch (e: any) {

      console.log("CODE:", e.code);
      console.log("MESSAGE:", e.message);
      console.log(e);

    }
  }

  return (
    <button onClick={test}>
      Test Firebase Login
    </button>
  );
}