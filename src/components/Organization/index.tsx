import { ProfileCard } from "../Cards/ProfileCard";
import style from "./style.module.scss";
import { organization } from "../../utils/organization";

export function Organization() {
  return (
    <div id="organization" className={style.organizationWrapper}>
      <div className={style.container}>
        <h3>Organizadores</h3>
        <div className={style.cardsWrapper}>
          {organization.map((person, idx) => (
            <ProfileCard key={idx} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
}
