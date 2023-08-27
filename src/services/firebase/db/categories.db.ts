import {
  doc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';

import { db } from '../firebase.config';
import { ShopData } from '../../../__seedData__/shopData.ts';

const COLLECTION_KEY = 'categories';

// Use this for seeding the database
export async function addCollectionAndDocumentsForCategories(
  collectionKey: string,
  objectsToAdd: ShopData[]
): Promise<void> {
  const collectionRef = collection(db, collectionKey);

  const batch = writeBatch(db);

  objectsToAdd.forEach((element: ShopData) => {
    const docRef = doc(collectionRef, element.title.toLowerCase());
    batch.set(docRef, element);
  });

  await batch.commit();
  // eslint-disable-next-line no-console
  console.log('seeding data is done');
}

export async function getCategoriesAndDocuments(): Promise<ShopData[]> {
  const collectionRef = collection(db, COLLECTION_KEY);
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  const docSnapshots = querySnapshot.docs;

  const categoryMap: ShopData[] = docSnapshots.map((docSnapshot) => {
    return docSnapshot.data() as ShopData;
    // Please adjust the data accordingly if there's a changing structure.
  });

  return categoryMap;
}
