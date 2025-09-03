'use client'

import Image from "next/image";
import { useState } from "react";


type LichessUser = {
  id: string;
  perfs: {
    bullet?: { rating: number };
    blitz?: { rating: number };
    rapid?: { rating: number };
    puzzle?: { rating: number };
  };
}

export default async function Home() {

  const chessTeam = ['lopsbea',  'marcusvrpereira', 'mavi10']

  const baraoLogo = {borderRadius: '50%', margin: 'auto'}

  const gridItemStyle= 'border-2 border-solid border-white p-4 rounded-xl'

    async function getPlayer(username: string): Promise<LichessUser> {
  const res = await fetch(`https://lichess.org/api/user/${username}`, {
    headers: {
      "Accept": "application/json",
    },
    // cache: "no-store" // usar isso se quiser sempre dados atualizados
  });

  if (!res.ok) {
    throw new Error(`Erro ao buscar ${username}`);
  }
  return res.json();

}
const players = await Promise.all(chessTeam.map(getPlayer));

  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20">
     <span className='w-[200px] h-[200px] overflow-hidden'>
      
     <Image alt='' src='/barao.jpg' width={200} height={200} style={baraoLogo} /> 
     </span>

     <ul className='grid grid-cols-2 w-100% gap-4'>
     {players.map(player =>      
     ( <li className={gridItemStyle} key={player.id}>
            @{player.perfs.blitz?.rating}
            <p>bullet: {player?.perfs?.bullet?.rating}</p>            
            <p>rapid:</p>
            <p>blitz:</p>
            <p>puzzle:</p>
          </li>)
     )}

     </ul>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          rel="noopener noreferrer"
        >
         Feito por Bia - T33 :D
        </a>
  
       
      </footer>
    </div>
  );
}
