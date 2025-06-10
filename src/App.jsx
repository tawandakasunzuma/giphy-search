import { useState, useEffect } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

export default function App() {

  const [gifs,setGifs] = useState([])
  
  useEffect(() => {
    
    const fetchingApi = async () => {

      const key = import.meta.env.VITE_TENOR_API_KEY;
      const url = `https://tenor.googleapis.com/v2/featured?key=${key}&limit=16`;

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
  console.log(gifs)

  return (
    <div className="
      h-14 bg-gradient-to-t from-sky-500 to-blue-800
      min-h-screen h-full max-w-screen
    ">
      <Header/>
      <Main gifs={gifs} />
      <Footer />
    </div>
  );
}
