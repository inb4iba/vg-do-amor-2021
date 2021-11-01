import style from "./style.module.scss";

export function Hero() {
  return (
    <div id="about" className={style.heroWrapper}>
      <div className={style.heroHeader}>
        <h1 className={style.logo}>
          VERTENTE <br />
          DO AMOR
        </h1>
        <h2 className={style.subtitle}>
          O evento de final de ano do vertente geek, á quatro anos criando,
          imaginando e jogando juntos.
        </h2>
      </div>
      <h3>Sobre o evento</h3>
      <p className={style.description}>
        Mobilizando a comunidade de RPG com o objetivo de oferecer o melhor que
        o RPG pode proporcionar. Criando um espaço seguro para produtores de
        conteúdo apresentarem seus trabalhos, além de mobilizar doações para
        instituições (ONGs e orgs sem fins lucrativos) que representam os ideais
        de nossa comunidade.
      </p>
      <div className={style.circles1}></div>
      <div className={style.circles2}></div>
      <div className={style.circles3}></div>
      <div className={style.circles4}></div>
    </div>
  );
}
