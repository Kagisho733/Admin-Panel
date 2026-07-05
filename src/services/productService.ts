/*
|--------------------------------------------------------------------------
| Product Service
|--------------------------------------------------------------------------
| Handles every Firestore operation related to products.
|--------------------------------------------------------------------------
*/

import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";

import { db } from "../firebase/config";

import type { Product } from "../types/Product";

const productsCollection = collection(db, "products");

/*
|--------------------------------------------------------------------------
| Create Product
|--------------------------------------------------------------------------
*/

export async function createProduct(product: Product) {

  return await addDoc(productsCollection, product);

}

/*
|--------------------------------------------------------------------------
| Get All Products
|--------------------------------------------------------------------------
*/

export async function getProducts() {

  const snapshot = await getDocs(productsCollection);

  return snapshot.docs.map(doc => ({

    id: doc.id,

    ...doc.data(),

  })) as Product[];

}

/*
|--------------------------------------------------------------------------
| Get One Product
|--------------------------------------------------------------------------
*/

export async function getProduct(id: string) {

  const productRef = doc(db, "products", id);

  const snapshot = await getDoc(productRef);

  if (!snapshot.exists()) {

    return null;

  }

  return {

    id: snapshot.id,

    ...snapshot.data(),

  } as Product;

}

/*
|--------------------------------------------------------------------------
| Update Product
|--------------------------------------------------------------------------
*/

export async function updateProduct(

  id: string,

  product: Partial<Product>

) {

  const productRef = doc(db, "products", id);

  return await updateDoc(productRef, product);

}

/*
|--------------------------------------------------------------------------
| Delete Product
|--------------------------------------------------------------------------
*/

export async function deleteProduct(id: string) {

  const productRef = doc(db, "products", id);

  return await deleteDoc(productRef);

}