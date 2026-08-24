import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-storage.js";


const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "pakhometutors-database",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "74148069004",
  appId: "YOUR_APP_ID"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);


document.getElementById("teacherForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const photoFile = document.getElementById("photoFile").files[0];
  const docFile = document.getElementById("docFile").files[0];

  if (!photoFile || !docFile) {
    alert("Please select both a profile photo and a verification document.");
    return;
  }

  try {
    const timestamp = Date.now();

    const photoRef = ref(
      storage,
      `teachers/photos/${timestamp}_${photoFile.name}`
    );

    const docRef = ref(
      storage,
      `teachers/documents/${timestamp}_${docFile.name}`
    );

    const [photoSnapshot, docSnapshot] = await Promise.all([
      uploadBytes(photoRef, photoFile),
      uploadBytes(docRef, docFile)
    ]);

    const photoUrl = await getDownloadURL(photoSnapshot.ref);
    const docUrl = await getDownloadURL(docSnapshot.ref);

    const teacherData = {
      fullName: document.getElementById("fullName").value.trim(),
      email: document.getElementById("email").value.trim(),
      city: document.getElementById("city").value.trim(),
      experienceYears: parseInt(
        document.getElementById("experience").value,
        10
      ),
      teachingMode: document.getElementById("teachingMode").value,
      profilePhotoUrl: photoUrl,
      verificationDocumentUrl: docUrl,
      membershipStatus: "pending",
      createdAt: serverTimestamp()
    };

    await addDoc(collection(db, "teachers"), teacherData);

    alert("Your application has been submitted successfully!");
    document.getElementById("teacherForm").reset();

  } catch (error) {
    console.error("Submission failed:", error);
    alert("Error submitting form. Please try again.");
  }
});
