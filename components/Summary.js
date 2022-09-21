import React from 'react';

const Summary = ({ title = '?', content = [] }) => {
  return (
    <section>
      <div className="hero">
        <div className="hero-body">
          <p className="title">{title}</p>
          {content.map((e, i) => {
            return <p key={i}>{e}</p>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Summary;
