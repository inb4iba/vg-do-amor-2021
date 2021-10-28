import { ListCard } from "../Cards/ListCard";
import style from "./style.module.scss";

export function Schedule() {
  return (
    <div className={style.scheduleWrapper}>
      <h3 id="schedule">Calendário</h3>
      <ListCard />
      <ListCard />
      <ListCard />
    </div>
  );
}
