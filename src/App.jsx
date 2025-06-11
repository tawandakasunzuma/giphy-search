import { useState, useEffect } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Modal from './components/Modal';

export default function App() {

  const [theme,setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    localStorage.setItem('theme',theme)
  },[theme])

  function toggleTheme () {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const [gifs,setGifs] = useState([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState("")
  const [selectedGif,setSelectedGif] = useState(null)

  console.log(selectedGif)
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
    <div 
      className={`
        ${theme === 'dark' 
          ? 'bg-gradient-to-t from-sky-500 to-blue-900'
          : 'bg-gradient-to-t from-sky-100 to-blue-300'
        }
        h-14
        min-h-screen h-full max-w-screen
      `}>

      {/*========== 
          Header
       ==========*/}

      <Header onSearch={handleSearch} onToggle={toggleTheme} theme={theme} />

      {/*========== 
          Loader & Main
       ==========*/}

      {loading ? (
        <div className="flex justify-center items-center min-h-[60vh]">
          <Loader theme={theme} />
        </div>
      ) : (
        <Main gifs={gifs} onSelect={setSelectedGif} theme={theme} />
      )}

      {/*========== 
          Error
       ==========*/}

      {error && 
        <p className={`
          text-center mb-8
          ${theme === 'dark' ? 'text-stone-100' : 'text-stone-700'}
        `}>
          {error}
        </p>
      }

      {/*========== 
          Modal
       ==========*/}

      {selectedGif !== null && 
        <Modal
          theme={theme}
          gif={selectedGif} 
          onClose={() => setSelectedGif(null)}
        />
      }

      {/*========== 
          Footer
       ==========*/}

      <Footer theme={theme} />
    </div>
  );
}
