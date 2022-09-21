import { useEffect, useState } from 'react';

export default function numberDe({ number }) {
  const id = number;
  const [numberDef, setNumberDef] = useState(() => {
    return {
      number: number,
      classlist: '',
    };
  });

  const isFizzBuzz = () => {
    const divisibleByThree = id % 3 === 0;
    const divisibleByFive = id % 5 === 0;

    let classlist;
    let number;

    if (divisibleByThree && divisibleByFive) {
      number = 'fizzbuzz';
      classlist = 'has-background-info has-text-light';
    } else if (divisibleByThree) {
      number = 'buzz';
      classlist = 'has-background-warning';
    } else if (divisibleByFive) {
      number = 'buzz';
      classlist = 'has-background-danger has-text-light';
    } else {
      number = id;
      classlist = '';
    }

    setNumberDef({
      number,
      classlist,
    });
  };

  useEffect(() => {
    isFizzBuzz();
  }, [id]);

  return (
    <div className="column is-2">
      <div className={`${numberDef.classlist} card`}>
        <div className="card-content">
          <h1 className="is-size-4 has-text-weight-bold">{numberDef.number}</h1>
        </div>
      </div>
    </div>
  );
}
