import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './styles.css';

const optionTexts = {
  1: `Sumérgete en la Ceremonia China del té. Déjate seducir por la magia de este encuentro de sensaciones propio del universo mandarín. Iréis a Majadahonda y Hon-Chi-Li os ofrecerá hacer la ceremonia en mesa baja, con pequeños asientos de cortesía, en el suelo; o en mesa «normal», sentados en sillas convencionales. Durará unas dos horas y os regalarán una caja de 25 kilos de té verde.

Estaría guay, pero va a ser que no, queridos...`,
  2: `Un paseo en globo, Manolo, Victoria... ¡moooola!`,
  3: `Un curso para cocinar sushi.`,
  4: `Un curso de conducción deportiva / 4x4.`,
  5: `Una cena en un restaurante con estrella Michelín.`,
  6: `Un escape room.`,
  7: `Un safari fotográfico.`,
  8: `Un casuario.`
};

export default function OptionPage() {
  const { id } = useParams();
  const text = optionTexts[id] || 'Próximamente...';

  return (
    <div className="page">
      <div className="container">
        <h2>{text.split('\n')[0]}</h2>
        <p className="option-text">{text.split('\n').slice(1).join('\n')}</p>
        <Link to="/" className="back-btn">Volver al menú principal</Link>
      </div>
    </div>
  );
}