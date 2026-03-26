import React from 'react';
import Card from '../Card/Card';


const AvailablePlayers = ({ players, setCoin , coin, selectedPlayers, setSelectedPlayers}) => {
    console.log('players', players)
    return (


        <div className='mx-auto'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    players?.map((player, ind) =>  <Card key={ind} player={player} setCoin={setCoin} coin={coin} selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers}></Card>)
                       
                 
                    
                }
            </div>

        </div>
    );
};

export default AvailablePlayers;