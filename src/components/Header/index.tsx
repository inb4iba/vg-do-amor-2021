import style from "./style.module.scss";

export function Header() {
  return (
    <header className={style.header}>
      <div className={style.headerWrapper}>
        <div className={style.logo}>
          <span>VERTENTEGEEK</span>
        </div>
        <nav className={style.navWrapper}>
          <a href="#" className={style.link}>
            Sobre
          </a>
          <a href="#support" className={style.link}>
            Apoie
          </a>
          <a href="#schedule" className={style.link}>
            Calendário
          </a>
          <a href="#organization" className={style.link}>
            Organizadores
          </a>
        </nav>
      </div>
    </header>
  );
}
