import { useState, useEffect } from 'react'
import { FirebaseApp, initializeApp } from 'firebase/app'
import { DataSnapshot, getDatabase, onValue, ref } from 'firebase/database'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_DATABASE_URL,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID
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
