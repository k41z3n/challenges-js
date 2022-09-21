import { useState } from 'react';
import Summary from '../../components/Summary';
import { useForm } from '../../hooks/useForm';

const title = 'LA SUCESIÓN DE FIBONACCI';

const content = [
  'Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0.',
  'La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.',
  '0, 1, 1, 2, 3, 5, 8, 13...',
];

export default function fibonacci() {
  const [formValues, handleInputChange, reset] = useForm({
    start: 0,
    end: 50,
  });

  const { start, end } = formValues;

  const [sequence, setSequence] = useState([]);

  const onReset = () => {
    setSequence([]);
    console.log(sequence);
    reset();
  };

  const buildFibonacci = (e) => {
    e.preventDefault();
    setSequence([]);

    const serie = [
      ...Array(end - start + 1)
        .fill(1)
        .map((e, i) => e + i),
    ];

    let current = 0;
    let next = 1;

    serie.forEach(() => {
      const value = current;
      setSequence((sequence) => [...sequence, value]);
      const fib = current + next;
      current = next;
      next = fib;
    });
  };

  return (
    <>
      <Summary title={title} content={content} />
      <div className="container">
        <div className="columns">
          <form onSubmit={buildFibonacci} className="column is-4">
            <div className="field">
              <label className="label">Start</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  placeholder="start"
                  required
                  min="0"
                  max={end}
                  value={start}
                  onChange={handleInputChange}
                  name="start"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">End</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  placeholder="end"
                  required
                  min={start}
                  value={end}
                  onChange={handleInputChange}
                  name="end"
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
            <div className="columns is-multiline">
              {sequence.map((value, i) => {
                return (
                  <div className="column" key={i}>
                    <strong className="box">{value}</strong>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
