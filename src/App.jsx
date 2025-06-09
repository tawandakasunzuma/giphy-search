import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="
      h-14 bg-gradient-to-t from-sky-500 to-blue-800
      min-h-screen h-full max-w-screen
    ">
      <Header/>
      <Main />
      <Footer />
    </div>
  );
}
