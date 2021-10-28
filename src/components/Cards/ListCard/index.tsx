import style from "./style.module.scss";

export function ListCard() {
  return (
    <div className={style.listCardWrapper}>
      <p className={style.title}>Título</p>
      <p>Tipo de live</p>
      <span>Pessoas envolvidas</span>
      <p>Data e horário</p>
    </div>
  );
}
