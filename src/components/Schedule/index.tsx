import style from "./style.module.scss";

export function Schedule() {
  return (
    <div className={style.scheduleWrapper}>
      <h3 id="schedule">Calendário</h3>

      <div className={style.card}>
        <p className={style.title}>Título</p>
        <p>Tipo de live</p>
        <span>Pessoas envolvidas</span>
        <p>Data e horário</p>
      </div>
      <div className={style.card}>
        <p className={style.title}>Título</p>
        <p>Tipo de live</p>
        <span>Pessoas envolvidas</span>
        <p>Data e horário</p>
      </div>
      <div className={style.card}>
        <p className={style.title}>Título</p>
        <p>Tipo de live</p>
        <span>Pessoas envolvidas</span>
        <p>Data e horário</p>
      </div>
      <div className={style.card}>
        <p className={style.title}>Título</p>
        <p>Tipo de live</p>
        <span>Pessoas envolvidas</span>
        <p>Data e horário</p>
      </div>
    </div>
  );
}
