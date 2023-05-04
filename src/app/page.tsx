"use client";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { useState } from "react";

import css from './page.module.css'

export default function Home() {
	const [game, setGame] = useState(new Chess());

	const makeMove = (move: {from: string, to: string, promotion?: string}) => {
		const gameCopy = {...game} as Chess;
		const result = gameCopy.move(move);
	}

  	return <main className={css.main}>
		<div className={css.board}>
			<Chessboard 
				id="BasicBoard" 
				customBoardStyle={{borderRadius: 5, boxShadow: "0 5px 15px rgba(0,0,0,0.5)"}}
			/>
		</div>
	</main>
}
