import { useState, useEffect } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Modal from './components/Modal';

export default function App() {

  // Theme
  const [theme,setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    localStorage.setItem('theme',theme)
  },[theme])

  function toggleTheme () {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  // UseState
  const [gifs,setGifs] = useState([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState("")
  const [selectedGif,setSelectedGif] = useState(null)
  const [pos, setPos] = useState("")
  const [searchTerm, setSearchTerm] = useState("");
  const [currentlySearching,setCurrentlySearching] = useState(false);

  // Handle Search 
  function handleSearch(term) {
    
    const key = import.meta.env.VITE_TENOR_API_KEY;
    
    if (!key) {
      setError("API key is missing.");
      return;
    }

    setSearchTerm(term);
    setLoading(true);
    setError("");

    const url = `https://tenor.googleapis.com/v2/search?q=${term}&key=${key}&limit=24`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Search failed. Please try again.");
        }
        return response.json();
      })

      .then(data => {
        if (data.results.length === 0) {
          setError(`No GIFs found for “${term}.”`);
          setGifs([]);
        } else {
          setError("");
          setGifs(data.results);
          setPos(data.next);
        }
      })
      
      .catch((error) => {
        setError(error.message);
      })
      
      .finally(() => {
        setLoading(false);
        setCurrentlySearching(true)
      
      });
  }

  // Load more gifs
  function loadMoreGifs() {

    const key = import.meta.env.VITE_TENOR_API_KEY;

    if (!key || !pos) {
      return
    };

    const baseUrl = searchTerm
      ? `https://tenor.googleapis.com/v2/search?q=${searchTerm}`
      : `https://tenor.googleapis.com/v2/featured`;

    const url = `${baseUrl}&key=${key}&limit=24&pos=${pos}`;

    setLoading(true);

    fetch(url)
      
    .then(res => res.json())
    
    .then(data => {
      setGifs(prev => [...prev, ...data.results]);
      setPos(data.next);
    })
    
    .catch(err => setError(err.message))
    
    .finally(() => setLoading(false));

  }
  
  // Load cards on mount and show loading icon
  useEffect(() => {

    setLoading(true);
    setError("");

    const fetchingApi = async () => {

      const key = import.meta.env.VITE_TENOR_API_KEY;
      const url = `https://tenor.googleapis.com/v2/featured?key=${key}&limit=24`;

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
          ? 'bg-gradient-to-br from-gray-900 via-indigo-800 to-blue-900'
          : 'bg-gradient-to-br from-sky-50 via-sky-200 to-blue-400'
        }
        h-14
        min-h-screen h-full max-w-screen
      `}>

      <Header 
        onSearch={handleSearch} 
        onToggle={toggleTheme} 
        theme={theme} />

      {loading ? (
        <div className="
          flex justify-center items-center 
          min-h-[60vh]"
        >
          <Loader theme={theme} />
        </div>
      ) : (
        <Main 
          gifs={gifs} 
          onSelect={setSelectedGif} 
          theme={theme} 
          onLoadMore={loadMoreGifs} 
          currentlySearching={currentlySearching}/>
      )}

      {error && 
        <p className={`
          text-center mb-8
          ${theme === 'dark' ? 'text-stone-100' : 'text-stone-700'}
        `}>
          {error}
        </p>
      }

      {/* Modal */}
      {selectedGif !== null && 
        <Modal
          theme={theme}
          gif={selectedGif} 
          onClose={() => setSelectedGif(null)} />
      }

      <Footer 
        theme={theme} />

    </div>
  );
}
