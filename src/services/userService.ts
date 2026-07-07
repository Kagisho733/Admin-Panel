import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../firebase/config";

import type { User } from "../types/User";

const usersCollection =
  collection(db, "users");

/*
|--------------------------------------------------------------------------
| Get All Users
|--------------------------------------------------------------------------
*/

export async function getUsers(): Promise<User[]> {

  const snapshot =
    await getDocs(usersCollection);

  return snapshot.docs.map((doc) => ({

    id: doc.id,

    ...(doc.data() as Omit<User, "id">),

  }));

}

export async function updateUser(
  userId: string,
  user: User
): Promise<void> {

  const userRef = doc(
    db,
    "users",
    userId
  );

  await updateDoc(userRef, {

    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    role: user.role,

  });

}

/*
|--------------------------------------------------------------------------
| Delete User
|--------------------------------------------------------------------------
*/

export async function deleteUser(
  userId: string
): Promise<void> {

  const userRef = doc(
    db,
    "users",
    userId
  );

  await deleteDoc(userRef);

}