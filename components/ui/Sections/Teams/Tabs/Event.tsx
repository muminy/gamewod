// ** style
import Flexible from "components/ui/Flexible";
import Grid from "components/ui/Grid";
import { TabTitle } from ".";
import style from "../teams.module.css";

export default function Events() {
  return (
    <div className="py-10">
      <TabTitle>Etkinlikler</TabTitle>
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  );
}

export const EventCard = () => {
  return (
    <Flexible
      justifyContent="justify-between"
      alignItem="items-center"
      className={style.event_card}
    >
      <Flexible alignItem="items-center">
        <img src="https://img-cdn.hltv.org/eventlogo/b75aNG0i4UVPNQHX_Tq-Zq.png?ixlib=java-2.1.0&s=a41982a53b2a3d56ca657c6f6335259d" />
        <div className="ml-5">
          <div className={style.e_name}>
            ESEA Advanced Season 39 Europe
          </div>
          <div className={style.e_country}>Europe</div>
        </div>
      </Flexible>

      <Flexible className="space-x-20">
        <div className="">
          <div className={style.e_value}>4</div>
          <div className={style.e_title}>Takım</div>
        </div>
        <div className="">
          <div className={style.e_value}>$24.000</div>
          <div className={style.e_title}>Price</div>
        </div>
        <div className="">
          <div className={style.e_value}>4</div>
          <div className={style.e_title}>Takım</div>
        </div>
      </Flexible>
    </Flexible>
  );
};
