import { events } from "../../utils/events";
import { ListCard } from "../Cards/ListCard";
import style from "./style.module.scss";

export function Schedule() {
  return (
    <div id="schedule" className={style.scheduleWrapper}>
      <h3>Calendário</h3>
      <div className={style.eventsWrapper}>
        {events.map((event, idx) => (
          <ListCard key={idx} event={event} />
        ))}
      </div>
    </div>
  );
}
