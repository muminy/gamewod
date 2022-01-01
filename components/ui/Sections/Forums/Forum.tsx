// ** style
import style from "./forum.module.css";

// ** fake db
import db from "./db.json";

// ** components
import CustomTitle from "components/ui/Title";

// ** moment js for date locale
import moment from "moment";

// ** cn opt
import cn from "classnames";

export interface ForumProps {
  title: string;
  id: string;
  date: string;
}

export default function Forums() {
  return (
    <section>
      <CustomTitle morable="/">Topluluk</CustomTitle>
      {db.map((item) => (
        <ForumCard key={item.id} {...item} />
      ))}
    </section>
  );
}

export const ForumCard: React.FC<ForumProps> = (props) => {
  return (
    <div className={cn(style.forum, "group bg-graypink")}>
      <div className={cn(style.title, "text-darkcolor")}>{props.title}</div>

      <span className={style.date}>
        {moment(props.date).format("D MMMM, y")}
      </span>
    </div>
  );
};
