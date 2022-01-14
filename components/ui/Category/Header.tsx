import classNames from "classnames";
import STYLE from "constants/style";
import styles from "./style.module.css";

interface Props {
  title?: string;
  info?: string;
}

export default function CategoryHeader({ title, info }: Props) {
  return (
    <div className={classNames(STYLE.paddingHorizontal, styles.header)}>
      <div className={styles.title}>{title}</div>
      <div
        dangerouslySetInnerHTML={{ __html: info || "" }}
        className={styles.info}
      />
    </div>
  );
}
