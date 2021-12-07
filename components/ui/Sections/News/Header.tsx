import Flexible from "components/ui/Flexible";
import style from "./style.module.css";

export interface Props {
  title: string;
}

export default function Header(props: Props) {
  return (
    <div className={style.header}>
      {/* <img src="https://img-cdn.hltv.org/gallerypicture/OAtXbtFkLnqcQLaZ1S3EbN.jpg?ixlib=java-2.1.0&m=%2Fm.png&mw=107&mx=20&my=473&w=800&s=dcbfb6ab87ad9d3cb42758e7db404852" /> */}
      <div className={style.title}>{props.title}</div>

      <Flexible className="mb-4 space-x-10">
        <Flexible alignItem="items-center">
          <img
            className={style.userProfile}
            src="https://pbs.twimg.com/profile_images/1430421013926350849/ZLFz22cO_400x400.jpg"
          />
          <div className="ml-2">
            <div className={style.creator}>Arthor Nameservice</div>
            <div className={style.username}>@nameservice</div>
          </div>
        </Flexible>

        <Flexible alignItem="items-center">
          <img
            className={style.userProfile}
            src="https://pbs.twimg.com/profile_images/1421446532944048132/QhPEH7Xw_400x400.jpg"
          />
          <div className="ml-2">
            <div className={style.creator}>Arthor Nameservice</div>
            <div className={style.username}>@nameservice</div>
          </div>
        </Flexible>
      </Flexible>
    </div>
  );
}
