// ** styles
import style from "../teams.module.css";

// ** components
import Flexible from "components/ui/Flexible";
import classNames from "classnames";
import { ReactNode, useState } from "react";
import Matches from "./Matches";
import Events from "./Event";
import News from "./News";

export default function TeamTabs() {
  const [selectedTab, setSelectedTab] = useState("matches");

  const isActiveTab = (tab: string) => tab === selectedTab;

  return (
    <div className="">
      <Flexible alignItem="items-center" className={style.team_tabs}>
        <button
          onClick={() => setSelectedTab("matches")}
          className={classNames(style.tab, {
            [style.active_tab]: isActiveTab("matches"),
          })}
        >
          Matches
          <span>18,231</span>
        </button>
        <button
          onClick={() => setSelectedTab("roster")}
          className={classNames(style.tab, {
            [style.active_tab]: isActiveTab("roster"),
          })}
        >
          Roster <span>7</span>
        </button>
        <button
          onClick={() => setSelectedTab("events")}
          className={classNames(style.tab, {
            [style.active_tab]: isActiveTab("events"),
          })}
        >
          Events
          <span>18</span>
        </button>
        <button
          onClick={() => setSelectedTab("news")}
          className={classNames(style.tab, {
            [style.active_tab]: isActiveTab("news"),
          })}
        >
          News <span>12,216</span>
        </button>
      </Flexible>
      {selectedTab === "matches" && <Matches />}
      {selectedTab === "events" && <Events />}
      {selectedTab === "news" && <News />}
    </div>
  );
}

export const TabTitle = (props: { children?: ReactNode }) => {
  return <div className={style.tabTitle}>{props.children}</div>;
};
