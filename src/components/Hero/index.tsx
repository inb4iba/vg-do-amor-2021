import style from "./style.module.scss";

export function Hero() {
  return (
    <div id="about" className={style.heroWrapper}>
      <h1 className={style.logo}>
        VERTENTE <br />
        DO AMOR
      </h1>
      <h2 className={style.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, minima
        ipsa iusto fuga excepturi repudiandae aperiam a perspiciatis. Pariatur
        rem commodi quidem nulla odit animi optio ad possimus, accusamus
        dolores.
      </h2>
    </div>
  );
}
