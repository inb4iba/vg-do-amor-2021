import { EventsType, LinksType } from "../../../utils/types";
import style from "./style.module.scss";
import avatar from "../../../assets/nullAvatar.svg";
import {
  RiInstagramFill,
  RiTwitterFill,
  RiGithubFill,
  RiTwitchFill,
  RiFacebookBoxFill,
} from "react-icons/ri";
import { IoGlobeOutline } from "react-icons/io5";

type PropsType = {
  event: EventsType;
};

export function ListCard({ event }: PropsType) {
  return (
    <div
      className={`${style.listCardWrapper} ${!event.title ? style.empty : ""}`}
    >
      <div className={style.eventInfo}>
        <div className={style.timeWrapper}>
          <p className={style.date}>{event.date}</p>
          <p className={style.time}>{event.time}</p>
        </div>
        <p className={style.title}>{event.title || "DATA DISPONÍVEL"}</p>
      </div>
      <div className={style.speakers}>
        {event.speakers.map((person) => {
          return (
            <div key={person.name} className={style.speaker}>
              <img
                className={style.avatar}
                src={person.avatar_url || avatar}
                alt={person.name || "avatar sem imagem"}
              />
              {person.name && person.links && (
                <div className={style.socials}>
                  {Object.keys(person.links).map((linkName: string) => (
                    <p key={linkName}>
                      <a
                        className={style.link}
                        href={
                          (person.links as LinksType)[
                            linkName as keyof LinksType
                          ]
                        }
                      >
                        {linkName === "instagram" && (
                          <RiInstagramFill size={30} />
                        )}
                        {linkName === "twitter" && <RiTwitterFill size={30} />}
                        {linkName === "facebook" && (
                          <RiFacebookBoxFill size={30} />
                        )}
                        {linkName === "github" && <RiGithubFill size={30} />}
                        {linkName === "twitch" && <RiTwitchFill size={30} />}
                        {linkName === "site" && <IoGlobeOutline size={30} />}
                      </a>
                    </p>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
