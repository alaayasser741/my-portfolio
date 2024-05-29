// src/firebaseStorage.js
import { storage } from './Firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const uploadFile = async (file, folder) => {
  const fileRef = ref(storage, `${folder}/${file.name}`);
  try {
    await uploadBytes(fileRef, file);
    return await getDownloadURL(fileRef);
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};

export { uploadFile };
