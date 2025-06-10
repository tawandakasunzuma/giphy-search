import { useState, useEffect } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

export default function App() {

  const [gifs,setGifs] = useState([])

  function handleSearch (searchTerm) {
    const key = import.meta.env.VITE_TENOR_API_KEY;
    const url = `https://tenor.googleapis.com/v2/search?q=${searchTerm}&key=${key}&limit=12`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error ("Search failed");
        }
        return response.json();
      })
      .then(data => {
        setGifs(data.results)
      })
      .catch((error) => {
        console.log("Search error:",error)
      })
  }
  
  useEffect(() => {
    
    const fetchingApi = async () => {

      const key = import.meta.env.VITE_TENOR_API_KEY;
      const url = `https://tenor.googleapis.com/v2/featured?key=${key}&limit=12`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error ("Error in fetching API.")
        }
        const data = await response.json()
        setGifs(data.results)
      }

      catch (error) {
        console.log("Error:",error)
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
      <Main gifs={gifs} />
      <Footer />
    </div>
  );
}
