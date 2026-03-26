import React from 'react';
import Card from '../Card/Card';


const AvailablePlayers = ({ players }) => {
    console.log('players', players)
    return (


        <div className='mx-auto'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    players.map(player =>  <Card player={player}></Card>)
                       
                 
                    
                }
            </div>

        </div>
    );
};

export default AvailablePlayers;