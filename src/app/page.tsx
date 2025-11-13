"use client";

import { useState } from "react";
import Image from "next/image";

export default function DiceeGame() {
    const [dice1, setDice1] = useState(1);
    const [dice2, setDice2] = useState(1);
    const [result, setResult] = useState("Roll the dice!");

    const rollDice = () => {
        setResult("Rolling...");

        setTimeout(() => {
            const newD1 = Math.floor(Math.random() * 6) + 1;
            const newD2 = Math.floor(Math.random() * 6) + 1;

            setDice1(newD1);
            setDice2(newD2);

            // MOVE THE CONDITION CHECK INSIDE THE TIMEOUT
            if (newD1 > newD2) setResult("Player 1 Wins!");
            else if (newD2 > newD1) setResult("Player 2 Wins!");
            else setResult("Draw!");
        }, 500);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-500 to-purple-500 text-white">
            <h1 className="text-4xl font-bold mb-8">Dicee Game</h1>

            <div className="flex items-center justify-center gap-8 mb-6">
                {/* Dice 1 with prominent white border */}
                <div className="border-[8px] border-white rounded-2xl p-4 bg-gradient-to-br from-gray-200 to-gray-300 shadow-xl">
                    <Image
                        src={`/dice${dice1}.png`}
                        alt={`Dice ${dice1}`}
                        width={96}
                        height={96}
                        className="rounded-lg drop-shadow-lg"
                        priority
                    />
                </div>

                {/* Dice 2 with prominent white border */}
                <div className="border-[8px] border-white rounded-2xl p-4 bg-gradient-to-br from-gray-200 to-gray-300 shadow-xl">
                    <Image
                        src={`/dice${dice2}.png`}
                        alt={`Dice ${dice2}`}
                        width={96}
                        height={96}
                        className="rounded-lg drop-shadow-lg"
                        priority
                    />
                </div>
            </div>

            <h2 className="text-2xl mb-6 font-semibold">{result}</h2>

            <button
                onClick={rollDice}
                className="px-6 py-3 bg-white text-purple-600 font-bold rounded-lg shadow-lg hover:bg-purple-100 active:scale-95 transition"
            >
                Roll Dice
            </button>
        </div>
    );
}