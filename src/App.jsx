
import { Suspense, useState } from 'react'
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
  const [coin, setCoin]=useState(50000)


  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Banner></Banner>
     <Suspense className="max-w-287.5 mx-auto" fallback={<span className="loading loading-dots loading-xl  text-center"></span>}>
       <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin} />
     </Suspense>
    </>
  )
}

export default App
