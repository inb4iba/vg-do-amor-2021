import style from "./style.module.scss";
import logo from "../../assets/casa1.png";

export function Support() {
  return (
    <div className={style.supportWrapper}>
      <a id="support" className={style.anchor}>
        &nbsp;
      </a>
      <div className={style.container}>
        <h3>
          Colabore com doações para o{" "}
          <a href="https://www.casaum.org/">
            <img className={style.logo} src={logo} alt="Casa1" />
          </a>
        </h3>
        <p className={style.about}>
          Fundada em 2017, a <a href="https://www.casaum.org/"> Casa 1</a> é um
          projeto de sociedade civil que tem como propósito a acolhida de jovens
          entre 18 e 25 anos que foram expulsos de casa pela família por suas
          orientações afetivas sexuais e identidade de gênero. O trabalho corre
          em paralelo às atividades do{" "}
          <a href="https://www.casaum.org/centro-cultural/">Centro Cultural</a>{" "}
          e da{" "}
          <a href="https://www.casaum.org/clinica-social/"> Clínica Social</a>,
          com todos os serviços ofertados gratuitamente.
        </p>
        <p className={style.link}>
          Apoie via PIX: <span>financeiro@casaum.org</span>
        </p>
      </div>
    </div>
  );
}
