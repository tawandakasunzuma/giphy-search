import { useState, useEffect } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Loader from './components/Loader'

export default function App() {

  const [gifs,setGifs] = useState([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState("")

  function handleSearch (searchTerm) {
    const key = import.meta.env.VITE_TENOR_API_KEY;
    if (!key) {
      setError("API key is missing.");
      return;
    }
    const url = `https://tenor.googleapis.com/v2/search?q=${searchTerm}&key=${key}&limit=12`;

    setLoading(true)
    setError("")

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error ("Search failed. Please try again.");
        }
        return response.json();
      })
      .then(data => {
        if (data.results.length === 0) {
          setError(`No GIFs found for “${searchTerm}.”`);
          setGifs([]);
        } else {
          setError("");
          setGifs(data.results);
        }
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally (() => {
        setLoading(false)
      })
  }
  
  useEffect(() => {

    setLoading(true);
    setError("");

    const fetchingApi = async () => {

      const key = import.meta.env.VITE_TENOR_API_KEY;
      const url = `https://tenor.googleapis.com/v2/featured?key=${key}&limit=12`;

      try {

        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error ("Error in fetching API.")
        }
        
        const data = await response.json()
        
        if (data.results.length === 0) {
          setError("No GIFs found")
        } else {
          setGifs(data.results)
        }

      }
      catch (error) {
        setError(error.message)
      }
      finally {
        setLoading(false)
      }
  }
  fetchingApi()
  },[]);

  return (
    <div className="
      h-14 bg-gradient-to-t from-sky-600 to-blue-900
      min-h-screen h-full max-w-screen
    ">
      <Header onSearch={handleSearch}/>
      {loading ? (
        <div className="flex justify-center items-center min-h-[60vh]">
          <Loader />
        </div>
      ) : (
        <Main gifs={gifs} />
      )}
      {error && 
        <p 
          style={{
            color:"white",
            textAlign: "center",
            marginBottom: "2rem"
          }}
        >
          {error}
        </p>
      }
      <Footer />
    </div>
  );
}
