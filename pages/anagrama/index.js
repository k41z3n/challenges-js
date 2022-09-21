import { useState } from 'react';
import Summary from '../../components/Summary';

const title = '¿ES UN ANAGRAMA?';

const content = [
  'Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.',
  'Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.',
  'NO hace falta comprobar que ambas palabras existan.',
  'Dos palabras exactamente iguales no son anagrama.',
];

export default function anagrama() {
  const [firstWord, setFirstWord] = useState('');
  const [secondWord, setSecondWord] = useState('');
  const [isAnagrama, setIsAnagrama] = useState(false);

  const handleonsubmit = (e) => {
    e.preventDefault();

    const secondWordReverse = secondWord
      .toLocaleLowerCase()
      .split('')
      .reverse()
      .join('');
    const firstWordTest = firstWord.toLocaleLowerCase();

    if (firstWordTest === secondWordReverse) {
      setIsAnagrama(true);
    } else {
      setIsAnagrama(false);
    }
  };

  const handleInputChange = ({ target }) => {
    if (target.name === 'firstWord') setFirstWord(target.value);

    if (target.name === 'secondWord') setSecondWord(target.value);
  };
  const reset = () => {
    setFirstWord('');
    setSecondWord('');
  };

  return (
    <>
      <Summary title={title} content={content} />
      <div className="container">
        <form onSubmit={handleonsubmit} className="columns">
          <div className="column is-4">
            <div className="field">
              <label className="label">1ra Palabra</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="firstWord"
                  required
                  value={firstWord}
                  onChange={handleInputChange}
                  name="firstWord"
                />
              </div>
            </div>

            <div className="field">
              <label className="label">2da Palabra</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="secondWord"
                  required
                  value={secondWord}
                  onChange={handleInputChange}
                  name="secondWord"
                />
              </div>
            </div>

            <button className="button" type="submit">
              Probar
            </button>
            <button className="button" onClick={reset}>
              reset
            </button>
          </div>
          <div className="column">
            <h1 className="is-size-4">
              Es anagrama:&nbsp;
              <strong>{isAnagrama ? 'Si' : 'No'}</strong>
            </h1>
          </div>
        </form>
      </div>
    </>
  );
}
