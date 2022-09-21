import { useState } from 'react';
import Summary from '../../components/Summary';
import { useForm } from '../../hooks/useForm';

const title = 'CÓDIGO MORSE';

const content = [
  'Crea un programa que sea capaz de transformar texto natural a código morse y viceversa.',
  'Debe detectar automáticamente de qué tipo se trata y realizar la conversión.',
  'En morse se soporta raya "—", punto ".", un espacio " " entre letras o símbolos y dos espacios entre palabras "  ".',
  'El alfabeto morse soportado será el mostrado en https://es.wikipedia.org/wiki/Código_morse',
];

const morseCode = {
  ',': '——..——',
  '?': '..——..',
  '.': '.—.—.—',
  '"': '.—..—.',
  '/': '—..—.',
  0: '—————',
  1: '.————',
  2: '..———',
  3: '...——',
  4: '....—',
  5: '.....',
  6: '—....',
  7: '——...',
  8: '———..',
  9: '————.',
  A: '.—',
  B: '—...',
  C: '—.—.',
  CH: '————',
  D: '—..',
  E: '.',
  F: '..—.',
  G: '——.',
  H: '....',
  I: '..',
  J: '.———',
  K: '—.—',
  L: '.—..',
  M: '——',
  N: '—.',
  Ñ: '——.——',
  O: '———',
  P: '.——.',
  Q: '——.—',
  R: '.—.',
  S: '...',
  T: '—',
  U: '..—',
  V: '...—',
  W: '.——',
  X: '—..—',
  Y: '—.——',
  Z: '——..',
};

export default function CodigoMorse() {
  const [endcode, setEncode] = useState('');

  const [formValues, handleInputChange, reset] = useForm({
    message: '',
  });

  const { message } = formValues;

  const buildMorseCode = (e) => {
    e.preventDefault();
    setEncode('');
    const encryt = message
      .split('')
      .map((letter) => {
        if (letter === ' ') return ' ';
        else return morseCode[letter.toUpperCase()];
      })
      .join('');

    setEncode(encryt);
  };

  const onReset = () => {
    setEncode('');
    reset();
  };

  return (
    <>
      <Summary title={title} content={content} />
      <div className="container">
        <section className="columns is-vcentered">
          <form onSubmit={buildMorseCode} className="column is-4">
            <div className="field">
              <label className="label">message</label>
              <div className="control">
                <textarea
                  className="input"
                  placeholder="message"
                  required
                  value={message}
                  onChange={handleInputChange}
                  name="message"
                />
              </div>
            </div>
            <button className="button" type="submit">
              Probar
            </button>
            <button className="button" onClick={onReset} type="button">
              reset
            </button>
          </form>
          <aside className="column">
            <h1>{endcode}</h1>
          </aside>
        </section>
      </div>
    </>
  );
}
