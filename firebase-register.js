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

// Your custom Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1RKueXO0egUDA_JaPtK3AL9Wsg7Cu8tQ",
  authDomain: "pakhometutors-database.firebaseapp.com",
  projectId: "pakhometutors-database",
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

    // 1. Create file references in Cloud Storage
    const photoRef = ref(
      storage,
      `teachers/photos/${timestamp}_${photoFile.name}`
    );

    const docRef = ref(
      storage,
      `teachers/documents/${timestamp}_${docFile.name}`
    );

    // 2. Upload files in parallel
    const [photoSnapshot, docSnapshot] = await Promise.all([
      uploadBytes(photoRef, photoFile),
      uploadBytes(docRef, docFile)
    ]);

    // 3. Get secure download URLs
    const photoUrl = await getDownloadURL(photoSnapshot.ref);
    const docUrl = await getDownloadURL(docSnapshot.ref);

    // 4. Create the teacher profile document
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

    // 5. Store metadata in Cloud Firestore
    await addDoc(collection(db, "teachers"), teacherData);

    alert("Your application has been submitted successfully!");
    document.getElementById("teacherForm").reset();

  } catch (error) {
    console.error("Submission failed:", error);
    alert("Error submitting form. Please try again.");
  }
});
