import Link from 'next/link';
export default function Header() {
  const routes = [
    {
      name: " EL FAMOSO 'FIZZ BUZZ'",
      link: '/fizzbuzz',
    },
    {
      name: ' ¿ES UN ANAGRAMA?',
      link: '/anagrama',
    },
    {
      name: ' LA SUCESIÓN DE FIBONACCI',
      link: '/fibonacci',
    },
    {
      name: ' CÓDIGO MORSE',
      link: '/codigo-morse',
    },
  ];

  return (
    <div className="container">
      <nav className="navbar " role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">Lert</a>
          </Link>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Blog</a>
              <div id="blogDropdown" className="navbar-dropdown">
                <div className="container is-fluid">
                  <div className="columns">
                    {routes.map((route, i) => {
                      return (
                        <div className="column" key={i}>
                          <Link href={route.link}>
                            <a className="navbar-item">
                              <div className="navbar-content">
                                <p> {route.name}</p>
                              </div>
                            </a>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
