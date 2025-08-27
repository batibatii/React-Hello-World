"use client";

import Cards from "./cards.js"
import Button from "./button.js"
import { useState } from 'react';

export default function Home() {

  const [showCards, setShowCards] = useState(true);

  const toggleCards = () => {
    setShowCards(!showCards);
  };

  return (
    <main className="flex flex-col items-center gap-24 mt-20 bg-gray-800 ">
      <div className="bg-gray-900 w-48 h-16 flex items-center justify-center rounded-xl shadow-inner shadow-gray-950/50 border border-gray-950/30">
        <h1 className="text-gray-200 tracking-wider">FIRST HEADING</h1>
      </div>
      {showCards && (
        <div className="grid grid-cols-4 gap-10">
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
        </div>
      )}

      <Button showCards={showCards} onToggle={toggleCards}></Button>
    </main>
  );
}
