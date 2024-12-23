import { useState, useEffect } from 'react'
import { FirebaseApp, initializeApp } from 'firebase/app'
import { DataSnapshot, getDatabase, onValue, ref } from 'firebase/database'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "job-search-blog-post.firebaseapp.com",
    databaseURL: "https://job-search-blog-post-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "job-search-blog-post",
    storageBucket: "job-search-blog-post.firebasestorage.app",
    messagingSenderId: "605608131962",
    appId: "1:605608131962:web:c27f38756c7d55e9a3eac3",
    measurementId: "G-ELPP2MTSRF"
}

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

const useFirebase = () => {
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const dbRef = ref(getDatabase(app))

        const handleData = (snapshot: DataSnapshot) => {
            console.table(snapshot)

            setData(snapshot.val())
            setLoading(false)
        }

        const handleError = (error: Error) => {
            setError(error)
            setLoading(false)
        }

        onValue(dbRef, handleData, handleError)
    }, [])

    return { data, loading, error }
}

export default useFirebase
