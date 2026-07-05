import {
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../firebase/config";

import type {
  Order,
  OrderStatus,
} from "../types/Order";

const ordersCollection =
  collection(db, "orders");

  /*
|--------------------------------------------------------------------------
| Get All Orders
|--------------------------------------------------------------------------
*/

export async function getOrders(): Promise<Order[]> {

  const snapshot =
    await getDocs(ordersCollection);

  return snapshot.docs.map((doc) => ({

    id: doc.id,

    ...(doc.data() as Omit<Order, "id">),

  }));

}

/*
|--------------------------------------------------------------------------
| Get Order By ID
|--------------------------------------------------------------------------
*/

export async function getOrderById(
  orderId: string
): Promise<Order | null> {

  const orderRef = doc(
    db,
    "orders",
    orderId
  );

  const snapshot =
    await getDoc(orderRef);

  if (!snapshot.exists()) {

    return null;

  }

  return {

    id: snapshot.id,

    ...(snapshot.data() as Omit<Order, "id">),

  };

}

/*
|--------------------------------------------------------------------------
| Update Order Status
|--------------------------------------------------------------------------
*/

export async function updateOrderStatus(
  orderId: string,
  status: OrderStatus
): Promise<void> {

  const orderRef = doc(
    db,
    "orders",
    orderId
  );

  await updateDoc(orderRef, {

    status,

  });

}

/*
|--------------------------------------------------------------------------
| Delete Order
|--------------------------------------------------------------------------
*/

export async function deleteOrder(
  orderId: string
): Promise<void> {

  const orderRef = doc(
    db,
    "orders",
    orderId
  );

  await deleteDoc(orderRef);

}