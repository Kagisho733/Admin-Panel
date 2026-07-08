import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore";

import { db } from "../firebase/config";

import type { Category } from "../types/Category";

const categoriesCollection =
  collection(db, "categories");

  /*
|--------------------------------------------------------------------------
| Get All Categories
|--------------------------------------------------------------------------
*/

export async function getCategories(): Promise<Category[]> {

  const snapshot =
    await getDocs(categoriesCollection);

  return snapshot.docs.map((doc) => ({

    id: doc.id,

    ...(doc.data() as Omit<Category, "id">),

  }));

}

/*
|--------------------------------------------------------------------------
| Create Category
|--------------------------------------------------------------------------
*/

export async function createCategory(

  category: Omit<Category, "id">

): Promise<void> {

  await addDoc(

    categoriesCollection,

    category

  );

}



/*
|--------------------------------------------------------------------------
| Update Category
|--------------------------------------------------------------------------
*/

export async function updateCategory(

  categoryId: string,

  category: Omit<Category, "id">

): Promise<void> {

  const categoryRef = doc(

    db,

    "categories",

    categoryId

  );

  await updateDoc(

    categoryRef,

    category

  );

}

/*
|--------------------------------------------------------------------------
| Delete Category
|--------------------------------------------------------------------------
*/

export async function deleteCategory(

  categoryId: string

): Promise<void> {

  const categoryRef = doc(

    db,

    "categories",

    categoryId

  );

  await deleteDoc(categoryRef);

}

/*
|--------------------------------------------------------------------------
| Get Category By ID
|--------------------------------------------------------------------------
*/

export async function getCategoryById(
  categoryId: string
): Promise<Category | null> {

  const categoryRef = doc(
    db,
    "categories",
    categoryId
  );

  const snapshot =
    await getDoc(categoryRef);

  if (!snapshot.exists()) {

    return null;

  }

  return {

    id: snapshot.id,

    ...(snapshot.data() as Omit<Category, "id">),

  };

}