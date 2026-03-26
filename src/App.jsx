
import { Suspense } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Players from './components/players/Players'

const fetchPlayers = async ()=> {
  const res = await fetch("/data.json")
  return res.json()
}

function App() {
  const playersPromise = fetchPlayers()


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
     <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
       <Players playersPromise={playersPromise} />
     </Suspense>
    </>
  )
}

export default App
