import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const SelectedPlayers = ({ selectedPlayers }) => {
    console.log(selectedPlayers)
    return (
        <div>
            {
                selectedPlayers.map((player, ind) => {
                    return (<div key={ind} >
                        <div className='flex justify-between items-center p-10 border rounded-2xl'>
                            <div>
                                <img className='w-17.5' src={player.image} alt={player.playerName} />
                            <div>
                                <h2 className=' flex gap-3 items-center text-3xl font-bold'> <FaUser />{player.playerName}</h2>
                                <p>{player.playerType}</p>
                            </div>
                            </div>

                        <button className='btn text-red-600'><MdDelete /></button>
                        </div>
                    </div>)
                })
            }
        </div>
    );
};

export default SelectedPlayers;