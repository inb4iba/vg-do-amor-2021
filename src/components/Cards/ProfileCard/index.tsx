import { LinksType, PersonType } from "../../../utils/organization";
import style from "./style.module.scss";
import {
  RiInstagramFill,
  RiTwitterFill,
  RiGithubFill,
  RiTwitchFill,
} from "react-icons/ri";
import { IoGlobeOutline } from "react-icons/io5";

type PropsType = {
  person: PersonType;
};

export function ProfileCard({ person }: PropsType) {
  return (
    <div className={style.profileCardWrapper}>
      <div className={style.userInfo}>
        <img
          className={style.avatar}
          src={person.avatar_url}
          alt={person.name}
        />
        <div className={style.userDetails}>
          <p className={style.name}>{person.name}</p>
          <p className={style.description}>{person.description}</p>
        </div>
      </div>
      {person.links && (
        <ul className={style.links}>
          {Object.keys(person.links).map((linkName: string) => (
            <p key={linkName}>
              <a
                className={style.link}
                href={(person.links as LinksType)[linkName as keyof LinksType]}
              >
                {linkName === "instagram" && <RiInstagramFill size={30} />}
                {linkName === "twitter" && <RiTwitterFill size={30} />}
                {linkName === "github" && <RiGithubFill size={30} />}
                {linkName === "twitch" && <RiTwitchFill size={30} />}
                {linkName === "site" && <IoGlobeOutline size={30} />}
              </a>
            </p>
          ))}
        </ul>
      )}
    </div>
  );
}
