import { useState, useEffect } from 'react';
import { db } from './Firebase';

export const useFirestore = (collection, filterField, filterValue) => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let query = db.collection(collection);
    if (filterField && filterValue) {
      query = query.where(filterField, '==', filterValue);
    }

    const unsubscribe = query.onSnapshot((snap) => {
      const fetched = snap.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setItems(fetched);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [collection, filterField, filterValue]);

  const addItem = async (newItem) => {
    try {
      const docRef = db.collection(collection).doc();
      await docRef.set({
        ...newItem,
        id: docRef.id,
      });
    } catch (error) {
      console.error('Error adding document:', error);
      throw error;
    }
  };

  const updateItem = async (id, updatedFields) => {
    try {
      await db.collection(collection).doc(id).update(updatedFields);
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  return {
    loading,
    items,
    updateItem,
    addItem,
  };
};
