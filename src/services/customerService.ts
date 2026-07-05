import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "../firebase/config";

import type { Customer } from "../types/Customer";

const customersCollection =
  collection(db, "customers");

export async function getCustomers(): Promise<Customer[]> {

  const snapshot =
    await getDocs(customersCollection);

  return snapshot.docs.map((doc) => ({

    id: doc.id,

    ...(doc.data() as Omit<Customer, "id">),

  }));

}