import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const options = [
  { id: 1, title: "Ceremonia, curso y cata de té" },
  { id: 2, title: "Un paseo en globo, Manolo, Victoria... ¡moooola!" },
  { id: 3, title: "Un curso para cocinar sushi" },
  { id: 4, title: "Un curso de conducción deportiva / 4x4" },
  { id: 5, title: "Una cena en un restaurante con estrella Michelín" },
  { id: 6, title: "Un escape room" },
  { id: 7, title: "Un safari fotográfico" },
  { id: 8, title: "Un casuario" },
  { id: 9, title: "" },
  { id: 10, title: "" },
  { id: 11, title: "" },
  { id: 12, title: "" },
  { id: 13, title: "" },
  { id: 14, title: "Gran final (sorpresa)" }
];

export default function App() {
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    const savedCooldown = localStorage.getItem('cooldown');
    if (savedCooldown) setCooldown(parseInt(savedCooldown));

    const shuffle = [...options].sort(() => Math.random() - 0.5);
    setShuffledOptions(shuffle);

    const interval = setInterval(() => {
      setCooldown(prev => {
        if (prev > 0) {
          localStorage.setItem('cooldown', prev - 1);
          return prev - 1;
        } else {
          localStorage.removeItem('cooldown');
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    if (cooldown === 0) {
      setCooldown(24 * 60 * 60);
      localStorage.setItem('cooldown', 24 * 60 * 60);
    }
  };

  const now = new Date();
  const unlockDate = new Date(Date.UTC(2025, 10, 9, 15, 0, 0));

  return (
    <div className="container">
      <h1>Hemos decidido colectivamente que no queremos haceros sufrir tanto, así que os vamos a decir el regalo.</h1>
      <p>Las opciones que hemos barajado son las siguientes:</p>
      <ul>
        {shuffledOptions.map((option) => {
          const isOption14 = option.id === 14;
          const isUnlocked = !isOption14 || now >= unlockDate;
          return (
            <li key={option.id} className={isOption14 && isUnlocked ? "highlighted" : ""}>
              {isUnlocked ? (
                <Link
                  to={`/option/${option.id}`}
                  onClick={handleClick}
                  className={cooldown > 0 ? 'disabled' : ''}
                >
                  {option.title}
                </Link>
              ) : (
                <span className="disabled">Opción secreta (disponible el 9 de noviembre a las 15:00)</span>
              )}
            </li>
          );
        })}
      </ul>
      {cooldown > 0 && (
        <p className="cooldown">Debes esperar {Math.floor(cooldown / 3600)}h {Math.floor((cooldown % 3600) / 60)}m para volver a elegir.</p>
      )}
    </div>
  );
}