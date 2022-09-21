import { useState } from 'react';

import NumberIs from '../../components/NumberIs';
import Summary from '../../components/Summary';

const title = 'EL FAMOSO "FIZZ BUZZ';

const content = [
  `Enunciado: Escribe un programa que muestre los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes: - Múltiplos de 3 por la palabra "fizz". - Múltiplos de 5 por la palabra "buzz". - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".`,
];

const startingNumbers = [
  ...Array(100)
    .fill(1)
    .map((e, i) => e + i),
];

export default function fizzbuzz() {
  const [numbers] = useState(startingNumbers);
  return (
    <>
      <Summary title={title} content={content} />
      <section className="container">
        <article className="columns is-multiline">
          {numbers.map((num, i) => {
            return <NumberIs number={num} key={i} />;
          })}
        </article>
      </section>
    </>
  );
}
