import style from "./App.module.scss";
import { Hero } from "./components/Hero";
import { Organization } from "./components/Organization";
import { Schedule } from "./components/Schedule";
import { Support } from "./components/Support";

export function App() {
  return (
    <div className={style.contentWrapper}>
      <Hero />
      <Support />
      <Schedule />
      <Organization />
    </div>
  );
}
