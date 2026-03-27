import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaFlag } from "react-icons/fa";
import { toast } from 'react-toastify';



const Card = ({player, setCoin, coin, selectedPlayers, setSelectedPlayers}) => {
    const handleChoosePlayer=()=> {
        let newCoin = coin -player.price;
        if(newCoin>= 0){
           setCoin(coin - player.price) 
        } else {toast.error('not enough coin to buy')
        return;
         }

        
         toast.success(`${player.playerName} is selected, autoClose: 500`);
    setIsSelected(true);
    setSelectedPlayers([...selectedPlayers, player])


}

    const [isSelected, setIsSelected]= useState(false)
    return (
        <div>
             <div className="card bg-base-100 shadow-sm ">
                            <figure>
                                <img
                                    src={player.image}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title"><FaUser />{player.
                                    playerName}</h2>

                                <div className='flex justify-between'>
                                    <div className='flex justify-between gap-2 items-center'>
                                        <FaFlag />
                                        <p>{player.
                                            playerCountry}</p>
                                    </div>
                                    <div>
                                        <button className='btn '>{player.
                                            playerType} </button>
                                    </div>
                                </div>

                                <div className="divider"></div>
                                <h2 className='font-bold'> rating: ({player.
                                    rating
                                } )</h2>
                                <div className='flex justify-between gap-2 font-bold'>
                                    <p> {player.
                                        BattingStyle}</p>
                                    <p className='text-right'>{player.
                                        BowlingStyle}</p>
                                </div>


                                <div className="card-actions justify-end items-center">
                                    <p className='font-semibold'> {player.
                                        price
                                    }</p>
                                    <button className="btn " onClick={handleChoosePlayer} disabled={isSelected}>{isSelected===true ? 'Selected': 'Choose Player'}</button>
                                </div>
                            </div>
                        </div>
        </div>
    );
};

export default Card;