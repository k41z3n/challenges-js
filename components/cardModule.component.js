import Link from 'next/link';

export default function CardModule({ name, index }) {
  return (
    <div className="column is-3">
      <div className="card">
        <div className="card-content">
          <Link href="/uno">
            <a>
              Module {name} + {index}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
