"use client";
import React, { useState } from 'react';

export default function DartsGame() {
  const [players, setPlayers] = useState([]);
  const [name, setName] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [dartsThrown, setDartsThrown] = useState(0);
  const [scoreAtStartOfTurn, setScoreAtStartOfTurn] = useState(301);

  const addPlayer = () => {
    if (name.trim()) {
      setPlayers([...players, { name, score: 301 }]);
      setName("");
    }
  };

  const handleHit = (val, mult) => {
    const points = val * mult;
    const newPlayers = [...players];
    const player = newPlayers[currentPlayer];

    if (dartsThrown === 0) setScoreAtStartOfTurn(player.score);

    if (player.score - points < 0) {
      alert("BUST ! Score trop élevé.");
      player.score = scoreAtStartOfTurn;
      nextTurn();
    } else {
      player.score -= points;
      if (player.score === 0) {
        alert(`Victoire de ${player.name} !`);
        window.location.reload();
      } else if (dartsThrown === 2) {
        nextTurn();
      } else {
        setDartsThrown(dartsThrown + 1);
      }
    }
    setPlayers(newPlayers);
  };

  const nextTurn = () => {
    setDartsThrown(0);
    setCurrentPlayer((currentPlayer + 1) % players.length);
  };

  if (!gameStarted) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-4xl font-bold text-orange-500 mb-8">🎯 Flèchettes entre copains</h1>
        <div className="bg-slate-800 p-6 rounded-xl w-full max-w-md border border-slate-700 shadow-2xl">
          <div className="flex gap-2 mb-6">
            <input 
              className="flex-1 p-3 bg-slate-700 rounded border border-slate-600 outline-none focus:border-orange-500 text-white"
              value={name} onChange={(e) => setName(e.target.value)}
              placeholder="Nom du joueur..."
            />
            <button onClick={addPlayer} className="bg-orange-600 px-4 py-2 rounded font-bold hover:bg-orange-500 transition">Ajouter</button>
          </div>
          <div className="space-y-2 mb-6">
            {players.map((p, i) => (
              <div key={i} className="p-3 bg-slate-700/50 rounded border border-slate-600 flex justify-between">
                <span>{p.name}</span>
                <span className="text-slate-400">301</span>
              </div>
            ))}
          </div>
          {players.length > 0 && (
            <button onClick={() => setGameStarted(true)} className="w-full bg-green-600 py-4 rounded-lg font-bold text-lg hover:bg-green-500 transition shadow-lg">
              LET'S GO (vous allez souffrir)
            </button>
          )}
        </div>
      </main>
    );
  }

  return (
    <main className="p-4 max-w-5xl mx-auto min-h-screen">
      <div className="flex justify-between items-center mb-8 border-b border-slate-700 pb-4">
        <h1 className="text-2xl font-bold text-orange-500">🎯 Flèchettes entre copains</h1>
        <button onClick={() => window.location.reload()} className="text-slate-400 text-sm hover:text-white">Quitter</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-4">
          {players.map((p, i) => (
            <div key={i} className={`p-5 rounded-2xl border-2 transition-all ${i === currentPlayer ? 'bg-orange-600/20 border-orange-500 scale-105 shadow-xl' : 'bg-slate-800 border-slate-700 opacity-50'}`}>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">{p.name}</span>
                <span className="text-4xl font-black">{p.score}</span>
              </div>
              {i === currentPlayer && (
                <div className="flex gap-2 mt-3">
                  {[0, 1, 2].map(d => (
                    <div key={d} className={`h-2 flex-1 rounded-full ${d < dartsThrown ? 'bg-orange-500' : 'bg-slate-600'}`}></div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="lg:col-span-2 bg-slate-800 p-6 rounded-3xl border border-slate-700 shadow-inner">
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
            {[...Array(20)].map((_, i) => (
              <div key={i+1} className="flex flex-col gap-1">
                <button onClick={() => handleHit(i+1, 1)} className="bg-slate-700 hover:bg-white hover:text-black p-3 rounded-lg font-bold transition text-lg">{i+1}</button>
                <div className="flex gap-1">
                  <button onClick={() => handleHit(i+1, 2)} className="flex-1 bg-red-900/40 hover:bg-red-600 py-1 rounded text-[10px] font-bold">x2</button>
                  <button onClick={() => handleHit(i+1, 3)} className="flex-1 bg-green-900/40 hover:bg-green-600 py-1 rounded text-[10px] font-bold">x3</button>
                </div>
              </div>
            ))}
            <button onClick={() => handleHit(25, 1)} className="bg-green-600 hover:bg-green-500 p-3 rounded-lg font-bold flex flex-col items-center col-span-2">
              <span className="text-[10px]">BULL</span>
              <span>25</span>
            </button>
            <button onClick={() => handleHit(25, 2)} className="bg-red-600 hover:bg-red-500 p-3 rounded-lg font-bold flex flex-col items-center col-span-2">
              <span className="text-[10px]">DBL BULL</span>
              <span>50</span>
            </button>
            <button onClick={() => handleHit(0, 1)} className="bg-slate-600 hover:bg-slate-500 p-3 rounded-lg font-bold">RATÉ 👍</button>
          </div>
        </div>
      </div>
    </main>
  );
}
