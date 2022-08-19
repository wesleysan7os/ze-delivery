import { useState } from "react";

export function Card({ amount }) {
  const [cards, setCards] = useState(new Array(amount).fill('down'));

  function handleSelectCard(selectedCardIndex) {
    setCards(() => {
      return cards.map((card, index) => index === selectedCardIndex ? 'up' : 'down');
    })
  }
  
  return (
    <table>
      <tbody>
        <tr>
          {cards && cards.map((card, i) => (
            <td 
              key={i}
              onClick={() => handleSelectCard(i)} 
            >
              { card }
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}