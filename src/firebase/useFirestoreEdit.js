// src/useFirestore.js
import { useState, useEffect } from 'react';
import { db } from './firebaseConfig';
import { collection, query, where, onSnapshot, addDoc, updateDoc, doc, Timestamp } from "firebase/firestore";

export const useFirestore = (collectionName, filterField, filterValue) => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let q = collection(db, collectionName);
    if (filterField && filterValue) {
      q = query(q, where(filterField, '==', filterValue));
    }

    const unsubscribe = onSnapshot(q, (snap) => {
      const fetched = snap.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setItems(fetched);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [collectionName, filterField, filterValue]);

  const addItem = async (newItem) => {
    try {
      await addDoc(collection(db, collectionName), {
        ...newItem,
        createdAt: Timestamp.now(),
      });
    } catch (error) {
      console.error('Error adding document:', error);
      throw error;
    }
  };

  const updateItem = async (id, updatedFields) => {
    try {
      await updateDoc(doc(db, collectionName, id), updatedFields);
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
