// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

const appSettings = {
  databaseURL:
    "https://shopping-app-d17ba-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
export const moviesInDB = ref(database, "movies");
