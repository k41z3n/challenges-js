import CardModule from '../components/cardModule.component';

const title = 'HELLO';
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="title">{title}</h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
        </div>

        <div className="container mt-5">
          <section className="columns is-multiline">
            {items.map((e, i) => {
              return <CardModule name={e} index={i} key={i} />;
            })}
          </section>
        </div>
      </section>
    </>
  );
}
