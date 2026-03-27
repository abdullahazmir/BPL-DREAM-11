import React, { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Players = ({playersPromise, setCoin, coin}) => {
//   console.log(playersPromise)
  const players = use(playersPromise)
  console.log(players)

  const [selectedType, setSelectedType] = useState('available')
//   console.log(selectedType, 'selectedType')

const [selectedPlayers, setSelectedPlayers]= useState([])

    return (
        <div className='max-w-287.5 mx-auto '>
            <div className='flex justify-between my-15'>
                {
                    selectedType==='available' ? <h2 className='font-bold text-3xl'>Available Players</h2> : <h2 className='font-bold text-3xl'>Selected Players ({selectedPlayers.length}/{players.length})</h2>
                }

                <div className='flex'>
                    <button onClick={()=>setSelectedType('available')} className={`btn ${selectedType==='available' ? 'bg-[#E7FE29]':' bg-white'} rounded-r-none rounded-l-xl`} >Available Players</button>


                    <button onClick={()=>setSelectedType('selected')} className={`btn ${selectedType==='selected' ? 'bg-[#E7FE29]':' bg-white'} rounded-l-none rounded-r-xl`}>Selected ({selectedPlayers.length})</button>
                </div>
            </div>
          
            {
               selectedType==='available' ? <AvailablePlayers players={players} setCoin= {setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}/> 

               : <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} setCoin= {setCoin} coin={coin}/>
            }
        </div>
    );
};

export default Players;