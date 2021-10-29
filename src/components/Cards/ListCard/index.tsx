import { EventsType } from "../../../utils/types";
import style from "./style.module.scss";
import {
  RiInstagramFill,
  RiTwitterFill,
  RiGithubFill,
  RiTwitchFill,
} from "react-icons/ri";
import { IoGlobeOutline } from "react-icons/io5";

type PropsType = {
  event: EventsType;
};

export function ListCard({ event }: PropsType) {
  return (
    <div className={style.listCardWrapper}>
      <div className={style.eventInfo}>
        <div className={style.timeWrapper}>
          <p className={style.date}>{event.date}</p>
          <p className={style.time}>{event.time}</p>
        </div>
        <p className={style.title}>{event.title}</p>
      </div>
      <div className={style.speakers}>
        {event.speakers.map((person) => {
          return (
            <img
              key={person.name}
              className={style.avatar}
              src={person.avatar_url}
              alt={person.name}
            />
          );
        })}
      </div>
    </div>
  );
}
