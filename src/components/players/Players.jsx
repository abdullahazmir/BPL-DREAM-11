import React, { use, useState } from 'react';
import AvailablePlayers from '../AvailablePlayers/AvailablePlayers';
import SelectedPlayers from '../SelectedPlayers/SelectedPlayers';

const Players = ({playersPromise}) => {
//   console.log(playersPromise)
  const players = use(playersPromise)
  console.log(players)

  const [selectedType, setSelectedType] = useState('available')
//   console.log(selectedType, 'selectedType')

    return (
        <div className='max-w-287.5 mx-auto '>
            <div className='flex justify-between my-15'>
                {
                    selectedType==='available' ? <h2 className='font-bold text-3xl'>Available Players</h2> : <h2 className='font-bold text-3xl'>Selected Players</h2>
                }

                <div className='flex'>
                    <button onClick={()=>setSelectedType('available')} className={`btn ${selectedType==='available' ? 'bg-[#E7FE29]':' bg-white'} rounded-r-none rounded-l-xl`} >Available Players</button>


                    <button onClick={()=>setSelectedType('selected')} className={`btn ${selectedType==='selected' ? 'bg-[#E7FE29]':' bg-white'} rounded-l-none rounded-r-xl`}>Selected</button>
                </div>
            </div>
          
            {
               selectedType==='available' ? <AvailablePlayers players={players}/> 
               : <SelectedPlayers/>
            }
        </div>
    );
};

export default Players;