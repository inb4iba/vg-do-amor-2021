import style from "./style.module.scss";

export function Organization() {
  return (
    <div id="organization" className={style.organizationWrapper}>
      <h3>Organizadores</h3>
      <div className={style.cardsWrapper}>
        <div className={style.card}>
          <span>Foto</span>
          <p>Icaro Andrade</p>
          <p>
            Descrição: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maxime beatae tempora, odio nam reprehenderit expedita illo? Numquam
            reiciendis deleniti non.
          </p>
          <span>links</span>
        </div>
        <div className={style.card}>
          <span>Foto</span>
          <p>Josie Fonseca</p>
          <p>
            Descrição: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maxime beatae tempora, odio nam reprehenderit expedita illo? Numquam
            reiciendis deleniti non.
          </p>
          <span>links</span>
        </div>
      </div>
    </div>
  );
}
